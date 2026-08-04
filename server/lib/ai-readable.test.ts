import assert from 'node:assert/strict';
import { afterEach, describe, test } from 'node:test';
import fs from 'fs-extra';
import os from 'os';
import path from 'path';
import {
  buildPublicSitemapUrls,
  generateSitemapXml,
  getMarkdownResponseHeaders,
  isSafePublicDomain,
  loadPublicMarkdown,
  publicMarkdownPath,
} from './ai-readable';

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map(directory => fs.remove(directory)));
});

describe('AI-readable Markdown contract', () => {
  test('publishes safe domain names at stable .md paths', () => {
    assert.equal(isSafePublicDomain('docs.example.com'), true);
    assert.equal(isSafePublicDomain('../../etc/passwd'), false);
    assert.equal(publicMarkdownPath('docs.example.com'), '/markdown/docs.example.com.md');
  });

  test('adds both the human page and Markdown file to the sitemap', () => {
    const urls = buildPublicSitemapUrls('https://docingest.com/', [{
      domain: 'docs.example.com',
      lastmod: '2026-07-14T00:00:00.000Z',
    }]);

    assert.deepEqual(urls.map(entry => entry.url), [
      'https://docingest.com/',
      'https://docingest.com/view',
      'https://docingest.com/docs/docs.example.com',
      'https://docingest.com/markdown/docs.example.com.md',
    ]);

    const xml = generateSitemapXml(urls);
    assert.match(xml, /<loc>https:\/\/docingest\.com\/markdown\/docs\.example\.com\.md<\/loc>/);
    assert.match(xml, /<lastmod>2026-07-14T00:00:00.000Z<\/lastmod>/);
  });

  test('serves the approved current snapshot and emits bot-friendly inline headers', async () => {
    const storagePath = await fs.mkdtemp(path.join(os.tmpdir(), 'docingest-ai-readable-'));
    temporaryDirectories.push(storagePath);
    const domainPath = path.join(storagePath, 'docs.example.com');
    await fs.ensureDir(domainPath);
    await fs.writeFile(path.join(domainPath, 'documentation_old.md'), '# Old');
    await fs.writeFile(path.join(domainPath, 'documentation_latest.md'), '# Latest\n\nReadable by agents.');
    // Newest by capturedAt, but quarantined. The public surface must never
    // serve it — that gating is the whole point of the integrity work, and a
    // fixture without it would pass even if approval were ignored entirely.
    await fs.writeFile(path.join(domainPath, 'documentation_bad.md'), '# Quarantined garbage');
    await fs.writeJSON(path.join(domainPath, 'metadata.json'), {
      domain: 'docs.example.com',
      url: 'https://docs.example.com',
      lastScraped: '2026-07-14T00:00:00.000Z',
      totalPages: 1,
      successfulPages: 1,
      failedPages: [],
      structure: [],
      latestVersion: '2.0.0',
      schemaVersion: 3,
      versions: [],
      crawlRuns: [],
      currentSnapshotId: 'snapshot-latest',
      snapshots: [
        {
          id: 'snapshot-old',
          filename: 'documentation_old.md',
          contentHash: 'a'.repeat(64),
          sourceUrl: 'https://docs.example.com',
          canonicalSourceUrl: 'https://docs.example.com',
          capturedAt: '2026-07-13T00:00:00.000Z',
          crawlRunId: 'run-old',
          totalPages: 1,
          successfulPages: 1,
          structure: [],
          quality: { status: 'approved', reasons: [] },
        },
        {
          id: 'snapshot-latest',
          filename: 'documentation_latest.md',
          contentHash: 'b'.repeat(64),
          sourceUrl: 'https://docs.example.com',
          canonicalSourceUrl: 'https://docs.example.com',
          capturedAt: '2026-07-14T00:00:00.000Z',
          crawlRunId: 'run-latest',
          totalPages: 1,
          successfulPages: 1,
          structure: [],
          quality: { status: 'approved', reasons: [] },
        },
        {
          id: 'snapshot-quarantined',
          filename: 'documentation_bad.md',
          contentHash: 'c'.repeat(64),
          sourceUrl: 'https://docs.example.com',
          canonicalSourceUrl: 'https://docs.example.com',
          capturedAt: '2026-07-15T00:00:00.000Z',
          crawlRunId: 'run-bad',
          totalPages: 1,
          successfulPages: 1,
          structure: [],
          quality: { status: 'quarantined', reasons: ['content-shrank'] },
        },
      ],
    });

    const document = await loadPublicMarkdown(storagePath, 'docs.example.com');
    assert.equal(document?.content, '# Latest\n\nReadable by agents.');
    assert.doesNotMatch(document!.content, /Quarantined/);

    const headers = getMarkdownResponseHeaders(document!, 'https://docingest.com/');
    assert.equal(headers['Content-Type'], 'text/plain; charset=utf-8');
    assert.equal(headers['Content-Disposition'], 'inline; filename="docs.example.com.md"');
    assert.equal(headers.Link, '<https://docingest.com/docs/docs.example.com>; rel="canonical"');
    assert.equal(headers['X-Robots-Tag'], 'index, follow');
    assert.match(headers.ETag, /^"[a-f0-9]{64}"$/);
  });

  test('falls back to the newest APPROVED snapshot, never a newer quarantined one', async () => {
    // Without currentSnapshotId the selector falls back to recency, so this is
    // the path where approval gating actually decides the outcome. The test
    // above cannot catch a regression here, because its explicit
    // currentSnapshotId wins before quality is ever consulted.
    const storagePath = await fs.mkdtemp(path.join(os.tmpdir(), 'docingest-ai-readable-'));
    temporaryDirectories.push(storagePath);
    const domainPath = path.join(storagePath, 'docs.example.com');
    await fs.ensureDir(domainPath);
    await fs.writeFile(path.join(domainPath, 'documentation_good.md'), '# Approved');
    await fs.writeFile(path.join(domainPath, 'documentation_bad.md'), '# Quarantined garbage');
    await fs.writeJSON(path.join(domainPath, 'metadata.json'), {
      domain: 'docs.example.com',
      url: 'https://docs.example.com',
      lastScraped: '2026-07-15T00:00:00.000Z',
      totalPages: 1,
      successfulPages: 1,
      failedPages: [],
      structure: [],
      schemaVersion: 3,
      versions: [],
      crawlRuns: [],
      snapshots: [
        {
          id: 'snapshot-good',
          filename: 'documentation_good.md',
          contentHash: 'd'.repeat(64),
          sourceUrl: 'https://docs.example.com',
          canonicalSourceUrl: 'https://docs.example.com',
          capturedAt: '2026-07-14T00:00:00.000Z',
          crawlRunId: 'run-good',
          totalPages: 1,
          successfulPages: 1,
          structure: [],
          quality: { status: 'approved', reasons: [] },
        },
        {
          // Newer, and would win on recency alone.
          id: 'snapshot-bad',
          filename: 'documentation_bad.md',
          contentHash: 'e'.repeat(64),
          sourceUrl: 'https://docs.example.com',
          canonicalSourceUrl: 'https://docs.example.com',
          capturedAt: '2026-07-15T00:00:00.000Z',
          crawlRunId: 'run-bad',
          totalPages: 1,
          successfulPages: 1,
          structure: [],
          quality: { status: 'quarantined', reasons: ['content-shrank'] },
        },
      ],
    });

    const document = await loadPublicMarkdown(storagePath, 'docs.example.com');
    assert.equal(document?.content, '# Approved');
  });

  test('serves nothing when no snapshot is approved', async () => {
    const storagePath = await fs.mkdtemp(path.join(os.tmpdir(), 'docingest-ai-readable-'));
    temporaryDirectories.push(storagePath);
    const domainPath = path.join(storagePath, 'docs.example.com');
    await fs.ensureDir(domainPath);
    await fs.writeFile(path.join(domainPath, 'documentation_bad.md'), '# Quarantined garbage');
    await fs.writeJSON(path.join(domainPath, 'metadata.json'), {
      domain: 'docs.example.com',
      url: 'https://docs.example.com',
      lastScraped: '2026-07-15T00:00:00.000Z',
      totalPages: 1,
      successfulPages: 1,
      failedPages: [],
      structure: [],
      schemaVersion: 3,
      versions: [],
      crawlRuns: [],
      snapshots: [
        {
          id: 'snapshot-bad',
          filename: 'documentation_bad.md',
          contentHash: 'f'.repeat(64),
          sourceUrl: 'https://docs.example.com',
          canonicalSourceUrl: 'https://docs.example.com',
          capturedAt: '2026-07-15T00:00:00.000Z',
          crawlRunId: 'run-bad',
          totalPages: 1,
          successfulPages: 1,
          structure: [],
          quality: { status: 'quarantined', reasons: ['content-shrank'] },
        },
      ],
    });

    assert.equal(await loadPublicMarkdown(storagePath, 'docs.example.com'), null);
  });
});
