import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import fs from 'fs-extra';
import { backfillCorpus } from './backfill-snapshot-quality';
import { createSnapshot } from '../lib/document-integrity';
import { generateTableOfContents, mergeMarkdownContent } from '../lib/markdown-merge';
import type { DocumentationSnapshot, DomainMetadataV3 } from '../types/versioning';

const CAPTURED_AT = '2026-07-01T00:00:00.000Z';
const BACKUP_FILENAME = 'metadata.pre-quality-backfill.backup.json';
const UNANIMITY_QUALITY = { status: 'unknown' as const, reasons: ['one-or-more-pages-need-review'] };

const substantial = (label: string) => ({
  type: label,
  url: `https://example.test/${label}`,
  content: `${'Useful documentation. '.repeat(30)}`,
});
const stub = (label: string) => ({
  type: label,
  url: `https://example.test/${label}`,
  content: 'Short but potentially useful.',
});

async function addDomain(
  storagePath: string,
  domain: string,
  pages: Array<{ type: string; url: string; content: string }>,
  quality: DocumentationSnapshot['quality']
): Promise<{ domainPath: string; snapshotId: string; metadata: DomainMetadataV3 }> {
  const domainPath = path.join(storagePath, domain);
  const filename = `documentation_${CAPTURED_AT}.md`;
  const content = generateTableOfContents(pages) + mergeMarkdownContent(pages);
  const snapshot = createSnapshot({
    filename,
    content,
    sourceUrl: `https://${domain}`,
    canonicalSourceUrl: `https://${domain}`,
    capturedAt: CAPTURED_AT,
    crawlRunId: 'run-1',
    totalPages: pages.length,
    successfulPages: pages.length,
    structure: pages.map((page) => ({ type: page.type, url: page.url })),
    quality,
  });
  const metadata: DomainMetadataV3 = {
    url: `https://${domain}`,
    domain,
    lastScraped: CAPTURED_AT,
    latestVersion: snapshot.id,
    totalPages: pages.length,
    successfulPages: pages.length,
    failedPages: [],
    structure: pages.map((page) => ({ type: page.type, url: page.url })),
    schemaVersion: 3,
    versions: [{
      version: snapshot.id,
      timestamp: CAPTURED_AT,
      filename,
      totalPages: pages.length,
      successfulPages: pages.length,
      url: `https://${domain}`,
      isLatest: true,
      snapshotId: snapshot.id,
    }],
    crawlRuns: [],
    snapshots: [snapshot],
    currentSnapshotId: quality.status === 'approved' ? snapshot.id : undefined,
  };

  await fs.ensureDir(domainPath);
  await fs.writeJSON(path.join(domainPath, 'metadata.json'), metadata, { spaces: 2 });
  await fs.writeFile(path.join(domainPath, filename), content);
  return { domainPath, snapshotId: snapshot.id, metadata };
}

async function withTemporaryCorpus(run: (storagePath: string) => Promise<void>): Promise<void> {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'docingest-quality-backfill-'));
  const storagePath = path.join(root, 'server', 'storage', 'docs');
  await fs.ensureDir(storagePath);
  try {
    await run(storagePath);
  } finally {
    await fs.remove(root);
  }
}

const readMetadata = (domainPath: string) =>
  fs.readJSON(path.join(domainPath, 'metadata.json')) as Promise<DomainMetadataV3>;

/**
 * The regression the backfill exists for: one short page among substantial ones
 * stranded a whole corpus, and the domain has to become servable again.
 */
async function testOneStubNoLongerStrandsStoredDocumentation(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const pages = [...Array(99)].map((_, i) => substantial(`Guide ${i}`)).concat(stub('Stub'));
    const { domainPath, snapshotId } = await addDomain(
      storagePath, 'stranded.example.test', pages, UNANIMITY_QUALITY
    );

    const summary = await backfillCorpus({ apply: true, force: false, storagePath });
    assert.deepEqual(summary, {
      mode: 'apply',
      domainsExamined: 1,
      domainsUnblocked: 1,
      snapshotsApproved: 1,
      snapshotsStillHeldBack: 0,
      snapshotsUnreadable: 0,
      errors: 0,
    });

    const updated = await readMetadata(domainPath);
    assert.deepEqual(updated.snapshots[0].quality, { status: 'approved', reasons: [] });
    // Serving the domain also needs the pointer, not just the verdict.
    assert.equal(updated.currentSnapshotId, snapshotId);
    // Quality is not part of snapshot identity; the evidence must not move.
    assert.equal(updated.snapshots[0].id, snapshotId);
    assert.equal(updated.snapshots[0].contentHash, (await readMetadata(domainPath)).snapshots[0].contentHash);
  });
}

/** A corpus that really is mostly stubs stays out of the served index. */
async function testMostlyStubCorpusStaysHeldBack(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const pages = [substantial('Guide'), stub('a'), stub('b'), stub('c')];
    const { domainPath } = await addDomain(
      storagePath, 'thin.example.test', pages, UNANIMITY_QUALITY
    );

    const summary = await backfillCorpus({ apply: true, force: false, storagePath });
    assert.equal(summary.snapshotsApproved, 0);
    assert.equal(summary.snapshotsStillHeldBack, 1);
    assert.equal(summary.domainsUnblocked, 0);

    const updated = await readMetadata(domainPath);
    assert.equal(updated.snapshots[0].quality.status, 'unknown');
    // The stale reason is replaced by one that says what is actually wrong.
    assert.deepEqual(updated.snapshots[0].quality.reasons, [
      'only-1-of-4-accepted-pages-met-automatic-approval',
    ]);
    assert.equal(updated.currentSnapshotId, undefined);
  });
}

/**
 * Snapshots quarantined on their own merits carry different reasons. Widening
 * the backfill to those would promote challenge pages and error pages into the
 * served corpus, so they must be left exactly as they are.
 */
async function testSnapshotsQuarantinedOnTheirOwnMeritsAreUntouched(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const { domainPath } = await addDomain(
      storagePath,
      'blocked.example.test',
      [substantial('Guide')],
      { status: 'quarantined', reasons: ['checkpoint-or-challenge-content'] }
    );

    const summary = await backfillCorpus({ apply: true, force: false, storagePath });
    assert.deepEqual(summary, {
      mode: 'apply',
      domainsExamined: 0,
      domainsUnblocked: 0,
      snapshotsApproved: 0,
      snapshotsStillHeldBack: 0,
      snapshotsUnreadable: 0,
      errors: 0,
    });

    const updated = await readMetadata(domainPath);
    assert.deepEqual(updated.snapshots[0].quality, {
      status: 'quarantined',
      reasons: ['checkpoint-or-challenge-content'],
    });
    assert.equal(await fs.pathExists(path.join(domainPath, BACKUP_FILENAME)), false);
  });
}

/**
 * A markdown file that no longer matches what the snapshot recorded cannot be
 * reasoned about, and must never be used to promote documentation.
 */
async function testTamperedSnapshotIsRefusedRatherThanGuessedAt(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const pages = [substantial('Guide'), substantial('Reference')];
    const { domainPath } = await addDomain(
      storagePath, 'tampered.example.test', pages, UNANIMITY_QUALITY
    );
    const filename = (await readMetadata(domainPath)).snapshots[0].filename;
    await fs.appendFile(path.join(domainPath, filename), '\nedited by hand\n');

    const summary = await backfillCorpus({ apply: true, force: false, storagePath });
    assert.equal(summary.snapshotsUnreadable, 1);
    assert.equal(summary.snapshotsApproved, 0);
    assert.equal(summary.domainsUnblocked, 0);

    const updated = await readMetadata(domainPath);
    assert.deepEqual(updated.snapshots[0].quality, UNANIMITY_QUALITY);
    // Nothing changed, so nothing should have been written.
    assert.equal(await fs.pathExists(path.join(domainPath, BACKUP_FILENAME)), false);
  });
}

/** Dry run is the default and must not touch the corpus. */
async function testDryRunReportsWithoutWriting(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const pages = [substantial('Guide'), substantial('Reference'), stub('Stub')];
    const { domainPath } = await addDomain(
      storagePath, 'dryrun.example.test', pages, UNANIMITY_QUALITY
    );
    const before = await fs.readFile(path.join(domainPath, 'metadata.json'), 'utf-8');

    const summary = await backfillCorpus({ apply: false, force: false, storagePath });
    assert.equal(summary.mode, 'dry-run');
    assert.equal(summary.snapshotsApproved, 1);
    assert.equal(summary.domainsUnblocked, 1);

    assert.equal(await fs.readFile(path.join(domainPath, 'metadata.json'), 'utf-8'), before);
    assert.equal(await fs.pathExists(path.join(domainPath, BACKUP_FILENAME)), false);
  });
}

/** The pre-backfill boundary survives a second run, and the batch continues. */
async function testBackupConflictDoesNotAbortBatchOrOverwriteEvidence(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const pages = [substantial('Guide'), substantial('Reference'), stub('Stub')];
    const conflicted = await addDomain(
      storagePath, 'conflicted.example.test', pages, UNANIMITY_QUALITY
    );
    const processed = await addDomain(
      storagePath, 'processed.example.test', pages, UNANIMITY_QUALITY
    );
    const backupPath = path.join(conflicted.domainPath, BACKUP_FILENAME);
    const preservedBackup = { preserved: 'first backfill boundary' };
    await fs.writeJSON(backupPath, preservedBackup, { spaces: 2 });

    const firstRun = await backfillCorpus({ apply: true, force: false, storagePath });
    assert.equal(firstRun.errors, 1);
    assert.equal((await readMetadata(conflicted.domainPath)).snapshots[0].quality.status, 'unknown');
    assert.equal((await readMetadata(processed.domainPath)).snapshots[0].quality.status, 'approved');
    assert.deepEqual(await fs.readJSON(backupPath), preservedBackup);

    const forcedRun = await backfillCorpus({ apply: true, force: true, storagePath });
    assert.equal(forcedRun.errors, 0);
    assert.equal((await readMetadata(conflicted.domainPath)).snapshots[0].quality.status, 'approved');
    assert.deepEqual(await fs.readJSON(backupPath), preservedBackup);
  });
}

/** Re-running after a successful pass finds nothing left to do. */
async function testBackfillIsIdempotent(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const pages = [substantial('Guide'), substantial('Reference'), stub('Stub')];
    await addDomain(storagePath, 'repeat.example.test', pages, UNANIMITY_QUALITY);

    await backfillCorpus({ apply: true, force: false, storagePath });
    const second = await backfillCorpus({ apply: true, force: false, storagePath });
    assert.deepEqual(second, {
      mode: 'apply',
      domainsExamined: 0,
      domainsUnblocked: 0,
      snapshotsApproved: 0,
      snapshotsStillHeldBack: 0,
      snapshotsUnreadable: 0,
      errors: 0,
    });
  });
}

void testOneStubNoLongerStrandsStoredDocumentation()
  .then(testMostlyStubCorpusStaysHeldBack)
  .then(testSnapshotsQuarantinedOnTheirOwnMeritsAreUntouched)
  .then(testTamperedSnapshotIsRefusedRatherThanGuessedAt)
  .then(testDryRunReportsWithoutWriting)
  .then(testBackupConflictDoesNotAbortBatchOrOverwriteEvidence)
  .then(testBackfillIsIdempotent)
  .then(() => console.log('snapshot quality backfill tests passed'))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
