/**
 * Direct ingestion script for static documentation sites.
 *
 * Bypasses Firecrawl entirely — fetches pages via plain HTTP, converts
 * HTML → markdown with @mozilla/readability + turndown, then POSTs
 * everything to /api/docs/save.
 *
 * Usage:
 *   bun server/scripts/ingest-static-site.ts <url> [--concurrency=5] [--limit=500]
 *
 * Examples:
 *   bun server/scripts/ingest-static-site.ts https://docs.vllm.ai/en/latest/
 *   bun server/scripts/ingest-static-site.ts https://docs.n8n.io/ --concurrency=3 --limit=300
 */

import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';

// ─── Config ──────────────────────────────────────────────────────────────────

const [, , ...rawArgs] = process.argv;
const positional = rawArgs.filter(a => !a.startsWith('--'));
const flags = Object.fromEntries(
  rawArgs.filter(a => a.startsWith('--')).map(a => {
    const [k, v] = a.slice(2).split('=');
    return [k, v ?? 'true'];
  }),
);

const ROOT_URL = positional[0];
if (!ROOT_URL) {
  console.error('Usage: bun ingest-static-site.ts <url> [--concurrency=5] [--limit=500]');
  process.exit(1);
}

const CONCURRENCY   = Number(flags.concurrency ?? 5);
const LIMIT         = Number(flags.limit       ?? 500);
const SAVE_API      = flags.api ?? 'http://localhost:8001/api/docs/save';
const BATCH_SIZE    = Number(flags.batch       ?? 50);
const USER_AGENT    = 'Mozilla/5.0 (compatible; DocIngest/1.0; +https://docingest.com)';

const rootUrlObj = new URL(ROOT_URL);
const DOMAIN     = rootUrlObj.hostname;
const BASE_ORIGIN = rootUrlObj.origin;
const BASE_PATH   = rootUrlObj.pathname.replace(/\/$/, '');

// ─── Markdown converter ───────────────────────────────────────────────────────

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
turndown.addRule('removeBase64Images', {
  filter: (node: HTMLElement) => node.nodeName === 'IMG' && (node.getAttribute('src') || '').startsWith('data:'),
  replacement: () => '',
});

function htmlToMarkdown(html: string, url: string): { markdown: string; title: string } {
  const dom = new JSDOM(html, { url });
  try {
    const doc = dom.window.document;
    const reader = new Readability(doc);
    const article = reader.parse();
    if (article?.content) {
      return { markdown: turndown.turndown(article.content).trim(), title: article.title || doc.title || '' };
    }
    const main = doc.querySelector('main, [role=main], article, .md-content, .rst-content, .document') || doc.body;
    return { markdown: turndown.turndown(main?.innerHTML ?? '').trim(), title: doc.title || '' };
  } finally {
    dom.window.close();
  }
}

// ─── URL helpers ─────────────────────────────────────────────────────────────

function normalise(url: string): string {
  try {
    const u = new URL(url);
    u.hash = '';
    u.search = '';
    return u.href.replace(/\/$/, '');
  } catch { return url; }
}

function isInScope(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.hostname !== rootUrlObj.hostname) return false;
    if (BASE_PATH && !u.pathname.startsWith(BASE_PATH)) return false;
    const ext = u.pathname.split('.').pop()?.toLowerCase() ?? '';
    if (['pdf','zip','tar','gz','png','jpg','jpeg','gif','svg','ico','css','js','woff','woff2','ttf'].includes(ext)) return false;
    return true;
  } catch { return false; }
}

function extractLinks(html: string, base: string): string[] {
  const dom = new JSDOM(html, { url: base });
  const anchors = Array.from(dom.window.document.querySelectorAll('a[href]')) as HTMLAnchorElement[];
  const links = anchors
    .map(a => { try { return normalise(new URL(a.href, base).href); } catch { return ''; } })
    .filter(u => u && isInScope(u));
  dom.window.close();
  return [...new Set(links)];
}

// ─── Sitemap discovery ────────────────────────────────────────────────────────

async function fetchSitemap(sitemapUrl: string): Promise<string[]> {
  try {
    const res = await fetch(sitemapUrl, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
    return locs.filter(u => isInScope(u)).map(normalise);
  } catch { return []; }
}

// ─── Fetch with retry ─────────────────────────────────────────────────────────

async function fetchPage(url: string, attempt = 1): Promise<{ html: string; ok: boolean }> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT, 'Accept': 'text/html,application/xhtml+xml' },
      signal: AbortSignal.timeout(15_000),
      redirect: 'follow',
    });
    if (!res.ok) return { html: '', ok: false };
    return { html: await res.text(), ok: true };
  } catch (e: any) {
    if (attempt < 3) {
      await Bun.sleep(1000 * attempt);
      return fetchPage(url, attempt + 1);
    }
    return { html: '', ok: false };
  }
}

// ─── Concurrency pool ─────────────────────────────────────────────────────────

async function pool<T>(items: T[], concurrency: number, fn: (item: T) => Promise<void>) {
  const iter = items[Symbol.iterator]();
  async function worker() {
    for (let { value, done } = iter.next(); !done; { value, done } = iter.next()) {
      await fn(value as T);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const timestamp = new Date().toISOString();
  console.log(`\n📥 Ingesting: ${ROOT_URL}`);
  console.log(`   domain=${DOMAIN}  concurrency=${CONCURRENCY}  limit=${LIMIT}`);
  console.log(`   save API: ${SAVE_API}\n`);

  // 1. Seed URLs from sitemap
  const sitemapUrls = [
    `${BASE_ORIGIN}${BASE_PATH}/sitemap.xml`,
    `${BASE_ORIGIN}/sitemap.xml`,
    `${BASE_ORIGIN}${BASE_PATH}/sitemap_index.xml`,
  ];
  let seedUrls: string[] = [];
  for (const su of sitemapUrls) {
    const found = await fetchSitemap(su);
    if (found.length > 0) {
      console.log(`✅ Sitemap ${su}: ${found.length} URLs`);
      seedUrls = found;
      break;
    }
  }
  if (seedUrls.length === 0) {
    console.log('⚠️  No sitemap found, starting from root URL');
    seedUrls = [normalise(ROOT_URL)];
  }

  // 2. Crawl + convert
  const visited  = new Set<string>();
  const queue    = [...seedUrls];
  const pages: Array<{ type: string; url: string; content: string; title: string }> = [];
  let   fetched  = 0;
  let   failed   = 0;

  // Process in batches using the pool
  while (queue.length > 0 && pages.length < LIMIT) {
    const batch = queue.splice(0, Math.min(CONCURRENCY * 4, LIMIT - pages.length));
    const unvisited = batch.filter(u => !visited.has(u));
    unvisited.forEach(u => visited.add(u));

    if (unvisited.length === 0) break;

    await pool(unvisited, CONCURRENCY, async (url) => {
      if (pages.length >= LIMIT) return;
      const { html, ok } = await fetchPage(url);
      fetched++;
      if (!ok || !html) { failed++; return; }

      // Discover new links
      const links = extractLinks(html, url);
      for (const l of links) {
        if (!visited.has(l) && !queue.includes(l) && pages.length + queue.length < LIMIT * 2) {
          queue.push(l);
        }
      }

      const { markdown, title } = htmlToMarkdown(html, url);
      if (markdown.length < 50) { failed++; return; }

      pages.push({ type: 'page', url, content: markdown });
      process.stdout.write(`\r   ${pages.length} pages | ${failed} failed | queue: ${queue.length}    `);
    });
  }

  console.log(`\n\n📊 Crawl complete: ${pages.length} pages, ${failed} failed, ${fetched} fetched`);

  if (pages.length === 0) {
    console.error('❌ No pages collected — aborting save');
    process.exit(1);
  }

  // 3. Save all pages in a single request (server supports up to 100MB)
  console.log(`\n💾 Saving ${pages.length} pages to ${SAVE_API}...`);

  const payload = {
    domain: DOMAIN,
    timestamp,
    pages,
    overwrite: true,
  };

  try {
    const res = await fetch(SAVE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(120_000),
    });
    const data = await res.json() as any;
    if (res.ok && data.success) {
      console.log(`\n✅ Done! ${pages.length} pages saved for ${DOMAIN}`);
    } else {
      console.error(`\n❌ Save failed:`, data.error || res.status, JSON.stringify(data).slice(0, 200));
      process.exit(1);
    }
  } catch (e: any) {
    console.error(`\n❌ Save error:`, e.message);
    process.exit(1);
  }
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
