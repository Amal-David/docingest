import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import fs from 'fs-extra';
import { listDomainDirectories, readApprovedDomain } from './corpus';
import { createSnapshot } from './document-integrity';
import type { DocumentationSnapshot, DomainMetadataV3, SnapshotQuality } from '../types/versioning';

const APPROVED: SnapshotQuality = { status: 'approved', reasons: [] };
const UNKNOWN: SnapshotQuality = { status: 'unknown', reasons: ['content-too-short-for-automatic-approval'] };

function snapshotFor(domain: string, capturedAt: string, body: string, quality: SnapshotQuality) {
  return createSnapshot({
    filename: `documentation_${capturedAt}.md`,
    content: body,
    sourceUrl: `https://${domain}`,
    canonicalSourceUrl: `https://${domain}`,
    capturedAt,
    crawlRunId: `run-${capturedAt}`,
    totalPages: 1,
    successfulPages: 1,
    structure: [{ type: 'Guide', url: `https://${domain}/guide` }],
    quality,
  });
}

async function writeDomain(
  storagePath: string,
  domain: string,
  snapshots: Array<{ snapshot: DocumentationSnapshot; body: string }>,
  overrides: Partial<DomainMetadataV3> = {}
): Promise<string> {
  const domainPath = path.join(storagePath, domain);
  await fs.ensureDir(domainPath);
  for (const { snapshot, body } of snapshots) {
    await fs.writeFile(path.join(domainPath, snapshot.filename), body);
  }
  const metadata = {
    url: `https://${domain}`,
    domain,
    lastScraped: snapshots[snapshots.length - 1]?.snapshot.capturedAt,
    latestVersion: snapshots[snapshots.length - 1]?.snapshot.id,
    totalPages: 1,
    successfulPages: 1,
    failedPages: [],
    structure: [],
    schemaVersion: 3,
    versions: [],
    crawlRuns: [],
    snapshots: snapshots.map((entry) => entry.snapshot),
    ...overrides,
  };
  await fs.writeJSON(path.join(domainPath, 'metadata.json'), metadata, { spaces: 2 });
  return domainPath;
}

async function withCorpus(run: (storagePath: string) => Promise<void>): Promise<void> {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'docingest-corpus-'));
  const storagePath = path.join(root, 'docs');
  await fs.ensureDir(storagePath);
  try {
    await run(storagePath);
  } finally {
    await fs.remove(root);
  }
}

/**
 * `.gitkeep` is committed so the storage directory survives in Git. Treating it
 * as a domain made the next readdir throw ENOTDIR on every full-corpus request.
 */
async function testFilesAreNotMistakenForDomains(): Promise<void> {
  await withCorpus(async (storagePath) => {
    await fs.ensureDir(path.join(storagePath, 'example.test'));
    await fs.ensureDir(path.join(storagePath, 'another.test'));
    await fs.writeFile(path.join(storagePath, '.gitkeep'), '');
    await fs.writeFile(path.join(storagePath, 'stray-notes.md'), 'not a domain');

    assert.deepEqual((await listDomainDirectories(storagePath)).sort(), ['another.test', 'example.test']);
  });
}

async function testMissingStorageIsEmptyNotAThrow(): Promise<void> {
  await withCorpus(async (storagePath) => {
    assert.deepEqual(await listDomainDirectories(path.join(storagePath, 'nope')), []);
  });
}

/**
 * The property the search index depends on: a newer unapproved snapshot must
 * not shadow the approved one. Selecting the newest `documentation_*.md` on
 * disk would index text the API never returns.
 */
async function testApprovedSnapshotWinsOverANewerUnapprovedOne(): Promise<void> {
  await withCorpus(async (storagePath) => {
    const served = snapshotFor('example.test', '2026-01-01T00:00:00.000Z', '# Served\n\nreal documentation', APPROVED);
    const newer = snapshotFor('example.test', '2026-06-01T00:00:00.000Z', '# Newer\n\nstub', UNKNOWN);
    await writeDomain(storagePath, 'example.test', [
      { snapshot: served, body: '# Served\n\nreal documentation' },
      { snapshot: newer, body: '# Newer\n\nstub' },
    ]);

    const resolved = await readApprovedDomain(storagePath, 'example.test');
    assert.ok(resolved);
    assert.equal(resolved.snapshot.id, served.id);
    assert.equal(path.basename(resolved.contentPath), served.filename);
    assert.equal(await fs.readFile(resolved.contentPath, 'utf-8'), '# Served\n\nreal documentation');
  });
}

/** Everything the API refuses to serve must also resolve to null here. */
async function testUnservableDomainsResolveToNull(): Promise<void> {
  await withCorpus(async (storagePath) => {
    await fs.ensureDir(path.join(storagePath, 'no-metadata.test'));
    assert.equal(await readApprovedDomain(storagePath, 'no-metadata.test'), null);

    const held = snapshotFor('held.test', '2026-01-01T00:00:00.000Z', '# Held\n\nstub', UNKNOWN);
    await writeDomain(storagePath, 'held.test', [{ snapshot: held, body: '# Held\n\nstub' }]);
    assert.equal(await readApprovedDomain(storagePath, 'held.test'), null);

    // Legacy records carry no immutable snapshot, so they are not servable.
    const legacyPath = path.join(storagePath, 'legacy.test');
    await fs.ensureDir(legacyPath);
    await fs.writeJSON(path.join(legacyPath, 'metadata.json'), {
      url: 'https://legacy.test', domain: 'legacy.test', lastScraped: '2026-01-01T00:00:00.000Z',
      totalPages: 1, successfulPages: 1, failedPages: [], structure: [],
    });
    assert.equal(await readApprovedDomain(storagePath, 'legacy.test'), null);

    // An approved verdict pointing at a file that is gone is not servable.
    const orphan = snapshotFor('orphan.test', '2026-01-01T00:00:00.000Z', '# Orphan\n\ndocs', APPROVED);
    const orphanPath = await writeDomain(storagePath, 'orphan.test', [{ snapshot: orphan, body: '# Orphan\n\ndocs' }]);
    await fs.remove(path.join(orphanPath, orphan.filename));
    assert.equal(await readApprovedDomain(storagePath, 'orphan.test'), null);

    // Corrupt metadata must not take the whole sweep down.
    const brokenPath = path.join(storagePath, 'broken.test');
    await fs.ensureDir(brokenPath);
    await fs.writeFile(path.join(brokenPath, 'metadata.json'), '{ not json');
    assert.equal(await readApprovedDomain(storagePath, 'broken.test'), null);
  });
}

/**
 * `filename` is metadata read off disk, so a record that escapes its domain
 * directory or names something that is not a markdown file must resolve to
 * null instead of being read.
 */
async function testUntrustworthySnapshotPathsAreRefused(): Promise<void> {
  await withCorpus(async (storagePath) => {
    const secret = path.join(storagePath, 'secret.md');
    await fs.writeFile(secret, '# Not mine\n\nanother domain');

    // A directory that happens to be named like a snapshot file.
    const shaped = snapshotFor('dir.test', '2026-01-01T00:00:00.000Z', '# Dir\n\ndocs', APPROVED);
    await writeDomain(storagePath, 'dir.test', []);
    await fs.writeJSON(path.join(storagePath, 'dir.test', 'metadata.json'), {
      url: 'https://dir.test', domain: 'dir.test', lastScraped: shaped.capturedAt,
      latestVersion: shaped.id, totalPages: 1, successfulPages: 1, failedPages: [],
      structure: [], schemaVersion: 3, versions: [], crawlRuns: [], snapshots: [shaped],
    });
    await fs.ensureDir(path.join(storagePath, 'dir.test', shaped.filename));
    assert.equal(await readApprovedDomain(storagePath, 'dir.test'), null);

    // A traversal out of the domain directory.
    const escaping = { ...shaped, filename: '../secret.md' };
    await fs.ensureDir(path.join(storagePath, 'escape.test'));
    await fs.writeJSON(path.join(storagePath, 'escape.test', 'metadata.json'), {
      url: 'https://escape.test', domain: 'escape.test', lastScraped: escaping.capturedAt,
      latestVersion: escaping.id, totalPages: 1, successfulPages: 1, failedPages: [],
      structure: [], schemaVersion: 3, versions: [], crawlRuns: [], snapshots: [escaping],
    });
    assert.equal(await readApprovedDomain(storagePath, 'escape.test'), null);

    // A filename that is not markdown at all.
    const notMarkdown = { ...shaped, filename: 'notes.txt' };
    await fs.ensureDir(path.join(storagePath, 'txt.test'));
    await fs.writeFile(path.join(storagePath, 'txt.test', 'notes.txt'), 'plain');
    await fs.writeJSON(path.join(storagePath, 'txt.test', 'metadata.json'), {
      url: 'https://txt.test', domain: 'txt.test', lastScraped: notMarkdown.capturedAt,
      latestVersion: notMarkdown.id, totalPages: 1, successfulPages: 1, failedPages: [],
      structure: [], schemaVersion: 3, versions: [], crawlRuns: [], snapshots: [notMarkdown],
    });
    assert.equal(await readApprovedDomain(storagePath, 'txt.test'), null);
  });
}

/** currentSnapshotId selects among several approved snapshots. */
async function testExplicitCurrentSnapshotIsHonoured(): Promise<void> {
  await withCorpus(async (storagePath) => {
    const older = snapshotFor('pinned.test', '2026-01-01T00:00:00.000Z', '# Older\n\ndocs', APPROVED);
    const newer = snapshotFor('pinned.test', '2026-06-01T00:00:00.000Z', '# Newer\n\ndocs', APPROVED);
    await writeDomain(storagePath, 'pinned.test', [
      { snapshot: older, body: '# Older\n\ndocs' },
      { snapshot: newer, body: '# Newer\n\ndocs' },
    ], { currentSnapshotId: older.id });

    const resolved = await readApprovedDomain(storagePath, 'pinned.test');
    assert.equal(resolved?.snapshot.id, older.id);
  });
}

void testFilesAreNotMistakenForDomains()
  .then(testMissingStorageIsEmptyNotAThrow)
  .then(testApprovedSnapshotWinsOverANewerUnapprovedOne)
  .then(testUnservableDomainsResolveToNull)
  .then(testExplicitCurrentSnapshotIsHonoured)
  .then(testUntrustworthySnapshotPathsAreRefused)
  .then(() => console.log('corpus tests passed'))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
