import crypto from 'crypto';
import fs from 'fs-extra';
import path from 'path';
import { selectApprovedCurrentSnapshot } from './document-integrity';
import { hasVersioning, type DomainMetadata } from '../types/versioning';

export interface PublicMarkdownDocument {
  domain: string;
  content: string;
  filePath: string;
  mtimeMs: number;
  etag: string;
}

export interface PublicSitemapDomain {
  domain: string;
  lastmod?: string;
}

export interface PublicSitemapUrl {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
  lastmod?: string;
}

export function isSafePublicDomain(domain: string): boolean {
  return domain.length > 0
    && domain.length <= 253
    && !domain.includes('..')
    && /^[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?$/i.test(domain);
}

export function publicMarkdownPath(domain: string): string {
  if (!isSafePublicDomain(domain)) {
    throw new Error('Invalid public documentation domain');
  }

  return `/markdown/${domain}.md`;
}

export function buildPublicSitemapUrls(
  baseUrl: string,
  domains: PublicSitemapDomain[],
): PublicSitemapUrl[] {
  const origin = baseUrl.replace(/\/+$/, '');
  const urls: PublicSitemapUrl[] = [
    { url: `${origin}/`, changefreq: 'daily', priority: 1 },
    { url: `${origin}/view`, changefreq: 'daily', priority: 0.9 },
  ];

  for (const entry of domains) {
    if (!isSafePublicDomain(entry.domain)) continue;

    urls.push({
      url: `${origin}/docs/${entry.domain}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: entry.lastmod,
    });
    urls.push({
      url: `${origin}${publicMarkdownPath(entry.domain)}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: entry.lastmod,
    });
  }

  return urls;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateSitemapXml(urls: PublicSitemapUrl[]): string {
  const entries = urls.map(entry => {
    const lastmod = entry.lastmod
      ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`
      : '';

    return [
      '  <url>',
      `    <loc>${escapeXml(entry.url)}</loc>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority.toFixed(1)}</priority>${lastmod}`,
      '  </url>',
    ].join('\n');
  }).join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
    '',
  ].join('\n');
}

export async function loadPublicMarkdown(
  storagePath: string,
  domain: string,
): Promise<PublicMarkdownDocument | null> {
  if (!isSafePublicDomain(domain)) return null;

  const domainPath = path.join(storagePath, domain);
  const metadataPath = path.join(domainPath, 'metadata.json');
  if (!await fs.pathExists(domainPath) || !await fs.pathExists(metadataPath)) return null;

  const metadata = await fs.readJSON(metadataPath) as DomainMetadata;
  if (!hasVersioning(metadata) || metadata.schemaVersion !== 3) return null;

  const snapshot = selectApprovedCurrentSnapshot(metadata);
  const filename = snapshot?.filename;

  if (!filename || path.basename(filename) !== filename || !filename.endsWith('.md')) return null;

  const filePath = path.join(domainPath, filename);
  if (!await fs.pathExists(filePath)) return null;

  const [content, stat] = await Promise.all([
    fs.readFile(filePath, 'utf-8'),
    fs.stat(filePath),
  ]);

  return {
    domain,
    content,
    filePath,
    mtimeMs: stat.mtimeMs,
    etag: `"${crypto.createHash('sha256').update(content).digest('hex')}"`,
  };
}

export function getMarkdownResponseHeaders(
  document: PublicMarkdownDocument,
  baseUrl: string,
): Record<string, string> {
  const origin = baseUrl.replace(/\/+$/, '');

  return {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Disposition': `inline; filename="${document.domain}.md"`,
    'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
    'Last-Modified': new Date(document.mtimeMs).toUTCString(),
    'ETag': document.etag,
    'Link': `<${origin}/docs/${document.domain}>; rel="canonical"`,
    'X-Robots-Tag': 'index, follow',
  };
}
