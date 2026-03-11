/**
 * Cloudflare Browser Rendering /crawl API client.
 *
 * Translates between the Firecrawl-shaped request/response contract
 * the frontend expects and Cloudflare's actual API.
 *
 * Also provides content extraction via @mozilla/readability to replace
 * Firecrawl's `onlyMainContent` feature.
 */

import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** What the frontend sends to POST /api/crawl/start */
export interface CrawlStartRequest {
  url: string;
  limit?: number;
  maxDepth?: number;
  includePaths?: string[];
  excludePaths?: string[];
  allowBackwardLinks?: boolean;
  ignoreQueryParameters?: boolean;
  scrapeOptions?: {
    formats?: string[];
    onlyMainContent?: boolean;
    removeBase64Images?: boolean;
    blockAds?: boolean;
    timeout?: number;
    waitFor?: number;
    maxAge?: number;
  };
}

/** Normalized page result returned to the frontend (Firecrawl-shaped) */
export interface CrawlPage {
  markdown: string;
  metadata: {
    sourceURL: string;
    title: string;
  };
}

/** Normalized status response returned to the frontend */
export interface CrawlStatusResponse {
  status: 'scraping' | 'completed' | 'failed';
  completed: number;
  total: number;
  data: CrawlPage[];
  error?: string;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

/** Crawl IDs from Cloudflare are UUIDs. Reject anything else to prevent SSRF. */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isValidCrawlId(id: string): boolean {
  return UUID_RE.test(id);
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const CF_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || '';
const CF_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '';
const CF_BASE = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/browser-rendering`;

function cfHeaders() {
  return {
    Authorization: `Bearer ${CF_API_TOKEN}`,
    'Content-Type': 'application/json',
  };
}

export function isCloudflareConfigured(): boolean {
  return Boolean(CF_API_TOKEN && CF_ACCOUNT_ID);
}

// ---------------------------------------------------------------------------
// Content extraction
// ---------------------------------------------------------------------------

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

// Strip images with base64 src
turndown.addRule('removeBase64Images', {
  filter: (node: HTMLElement) =>
    node.nodeName === 'IMG' &&
    (node.getAttribute('src') || '').startsWith('data:'),
  replacement: () => '',
});

/**
 * Extract main content from raw HTML using Readability, then convert to
 * markdown via Turndown. This replaces Firecrawl's `onlyMainContent`.
 */
export function extractMainContent(html: string, url: string): { markdown: string; title: string } {
  const dom = new JSDOM(html, { url });
  const doc = dom.window.document;

  // Try Readability first
  const reader = new Readability(doc);
  const article = reader.parse();

  if (article && article.content) {
    const markdown = turndown.turndown(article.content);
    return { markdown, title: article.title || doc.title || '' };
  }

  // Fallback: use <main> or <article> or <body>
  const main = doc.querySelector('main') || doc.querySelector('article') || doc.body;
  const markdown = main ? turndown.turndown(main.innerHTML) : '';
  return { markdown, title: doc.title || '' };
}

/**
 * Strip common noise patterns from markdown (nav items, cookie banners, etc.)
 */
function cleanMarkdown(md: string): string {
  return md
    // Remove lines that look like nav links (very short lines with just a link)
    .replace(/^\[.{1,30}\]\(\/[^)]*\)\s*$/gm, '')
    // Remove cookie consent patterns
    .replace(/we use cookies.*$/gim, '')
    .replace(/accept all cookies.*$/gim, '')
    // Collapse excessive blank lines
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();
}

// ---------------------------------------------------------------------------
// Cloudflare /crawl API
// ---------------------------------------------------------------------------

/**
 * Start a Cloudflare crawl. Returns the crawl job ID.
 */
export async function startCrawl(req: CrawlStartRequest): Promise<{ success: boolean; id?: string; error?: string }> {
  if (!isCloudflareConfigured()) {
    return { success: false, error: 'Cloudflare API not configured. Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID.' };
  }

  // Map Firecrawl-shaped request to Cloudflare params
  const body: Record<string, any> = {
    url: req.url,
    limit: Math.min(req.limit || 250, 100000),
    depth: req.maxDepth || 5,
    // Request both HTML (for Readability extraction) and markdown (as fallback)
    formats: ['html', 'markdown'],
    // Static crawling (unmetered during beta)
    render: false,
  };

  // Map include/exclude patterns
  if (req.includePaths && req.includePaths.length > 0) {
    body.includePatterns = req.includePaths;
  }
  if (req.excludePaths && req.excludePaths.length > 0) {
    body.excludePatterns = req.excludePaths;
  }

  // Map maxAge (Firecrawl uses ms, Cloudflare uses seconds)
  if (req.scrapeOptions?.maxAge) {
    body.maxAge = Math.floor(req.scrapeOptions.maxAge / 1000);
  }

  console.log('[cloudflare-crawl] Starting crawl:', JSON.stringify({ url: body.url, limit: body.limit, depth: body.depth }));

  try {
    const response = await fetch(`${CF_BASE}/crawl`, {
      method: 'POST',
      headers: cfHeaders(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[cloudflare-crawl] Start failed:', response.status, errorText);
      return { success: false, error: `Cloudflare API error: ${response.status} - ${errorText}` };
    }

    const data = await response.json() as any;

    // Cloudflare returns { success: true, result: "<crawl-id>" }
    if (data.success && data.result) {
      console.log('[cloudflare-crawl] Crawl started, id:', data.result);
      return { success: true, id: data.result };
    }

    return { success: false, error: data.errors?.[0]?.message || 'Unknown Cloudflare error' };
  } catch (err: any) {
    console.error('[cloudflare-crawl] Start error:', err);
    return { success: false, error: err.message || 'Failed to reach Cloudflare API' };
  }
}

/**
 * Poll a Cloudflare crawl for status. Translates response into the
 * Firecrawl-shaped format the frontend expects.
 */
export async function getCrawlStatus(crawlId: string): Promise<CrawlStatusResponse> {
  if (!isCloudflareConfigured()) {
    return { status: 'failed', completed: 0, total: 0, data: [], error: 'Cloudflare API not configured' };
  }

  // Validate crawl ID is a UUID to prevent SSRF via path traversal
  if (!isValidCrawlId(crawlId)) {
    return { status: 'failed', completed: 0, total: 0, data: [], error: 'Invalid crawl ID format' };
  }

  try {
    const response = await fetch(`${CF_BASE}/crawl/${crawlId}`, {
      method: 'GET',
      headers: cfHeaders(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[cloudflare-crawl] Status check failed:', response.status, errorText);

      if (response.status === 429) {
        // Rate limited — return scraping so frontend retries
        return { status: 'scraping', completed: 0, total: 0, data: [] };
      }

      return { status: 'failed', completed: 0, total: 0, data: [], error: `HTTP ${response.status}` };
    }

    const data = await response.json() as any;

    // Map Cloudflare status to Firecrawl status
    const cfStatus: string = data.status || '';
    let normalizedStatus: 'scraping' | 'completed' | 'failed';

    if (cfStatus === 'complete' || cfStatus === 'completed') {
      normalizedStatus = 'completed';
    } else if (
      cfStatus.startsWith('cancelled') ||
      cfStatus === 'failed' ||
      cfStatus === 'error'
    ) {
      normalizedStatus = 'failed';
    } else {
      // running, pending, etc.
      normalizedStatus = 'scraping';
    }

    // Process results — Cloudflare puts them in `result` array
    const rawResults: any[] = data.result || [];
    const pages: CrawlPage[] = [];
    const seenUrls = new Set<string>();

    for (const record of rawResults) {
      const pageUrl: string = record.url || '';

      // Deduplicate by URL (handles ignoreQueryParameters gap)
      // Skip dedup for records without a URL to avoid silently dropping them
      const normalizedUrl = pageUrl.split('?')[0].split('#')[0];
      if (normalizedUrl && seenUrls.has(normalizedUrl)) continue;
      if (normalizedUrl) seenUrls.add(normalizedUrl);

      let markdown = '';
      let title = record.title || '';

      // Try HTML → Readability extraction first (highest quality)
      if (record.html) {
        const extracted = extractMainContent(record.html, pageUrl);
        markdown = cleanMarkdown(extracted.markdown);
        title = extracted.title || title;
      }

      // Fallback to Cloudflare's raw markdown if Readability failed
      if (!markdown && record.markdown) {
        markdown = cleanMarkdown(record.markdown);
      }

      if (markdown) {
        pages.push({
          markdown,
          metadata: {
            sourceURL: pageUrl,
            title,
          },
        });
      }
    }

    return {
      status: normalizedStatus,
      completed: pages.length,
      total: normalizedStatus === 'completed' ? pages.length : Math.max(pages.length, rawResults.length),
      data: normalizedStatus === 'completed' ? pages : [],
    };
  } catch (err: any) {
    console.error('[cloudflare-crawl] Status error:', err);
    return { status: 'failed', completed: 0, total: 0, data: [], error: err.message };
  }
}
