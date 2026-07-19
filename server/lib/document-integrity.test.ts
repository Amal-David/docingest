import assert from 'node:assert/strict';
import {
  appendCrawlRun,
  createCrawlRun,
  createSnapshot,
  selectApprovedCurrentSnapshot,
  summarizeOutcomes,
  toIntegrityMetadata,
} from './document-integrity';
import type { DomainMetadataV2 } from '../types/versioning';

function createV2Fixture(): DomainMetadataV2 {
  return {
    url: 'https://docs.example.test',
    domain: 'docs.example.test',
    lastScraped: '2026-07-01T00:00:00.000Z',
    totalPages: 1,
    successfulPages: 1,
    failedPages: [],
    structure: [],
    latestVersion: '1.0.0',
    versions: [{
      version: '1.0.0',
      timestamp: '2026-07-01T00:00:00.000Z',
      filename: 'documentation_2026-07-01T00:00:00.000Z.md',
      totalPages: 1,
      successfulPages: 1,
      url: 'https://docs.example.test',
      isLatest: true,
    }],
    schemaVersion: 2,
  };
}

function createRun() {
  return createCrawlRun({
    provider: 'firecrawl',
    seedUrl: 'https://docs.example.test',
    canonicalSeedUrl: 'https://docs.example.test/',
    configuration: { maxDepth: 2, render: false },
    startedAt: '2026-07-19T00:00:00.000Z',
    completedAt: '2026-07-19T00:00:10.000Z',
    providerTotals: { discovered: 4, returned: 4, discoveredIsExact: true },
    totals: { discovered: 4, returned: 4 },
    outcomes: [
      { url: 'https://docs.example.test/ok', status: 'valid' },
      { url: 'https://docs.example.test/challenge', status: 'blocked', reason: 'cloudflare-challenge' },
      { url: 'https://docs.example.test/empty', status: 'empty' },
      { url: 'https://docs.example.test/old', status: 'duplicate' },
    ],
  });
}

function testAppendOnlyLineage(): void {
  const v2 = createV2Fixture();
  const v2Before = JSON.stringify(v2);
  const run = createRun();
  const approved = createSnapshot({
    filename: 'documentation_2026-07-19T00:00:10.000Z.md',
    content: '# Install\r\n\r\nUse the package manager.\r\n',
    sourceUrl: 'https://docs.example.test/install',
    canonicalSourceUrl: 'https://docs.example.test/install',
    capturedAt: '2026-07-19T00:00:10.000Z',
    crawlRunId: run.id,
    totalPages: 1,
    successfulPages: 1,
    structure: [{ type: 'Install', url: 'https://docs.example.test/install' }],
    quality: { status: 'approved', reasons: [] },
  });
  const sameContent = createSnapshot({
    ...approved,
    content: '# Install\n\nUse the package manager.\n',
  });

  assert.equal(sameContent.id, approved.id);
  assert.deepEqual(run.totals, {
    discovered: 4,
    returned: 4,
    valid: 1,
    blocked: 1,
    empty: 1,
    duplicate: 1,
    rejected: 0,
    failed: 0,
  });
  assert.deepEqual(summarizeOutcomes(run.outcomes), {
    discovered: 0,
    returned: 0,
    valid: 1,
    blocked: 1,
    empty: 1,
    duplicate: 1,
    rejected: 0,
    failed: 0,
  });

  const integrity = appendCrawlRun(v2, run, approved);
  const duplicateAppend = appendCrawlRun(integrity, run, approved);
  const repeatedRun = createCrawlRun({
    provider: 'firecrawl',
    seedUrl: 'https://docs.example.test',
    canonicalSeedUrl: 'https://docs.example.test/',
    configuration: { maxDepth: 2, render: false },
    startedAt: '2026-07-20T00:00:00.000Z',
    completedAt: '2026-07-20T00:00:10.000Z',
    providerTotals: { discovered: 1, returned: 1, discoveredIsExact: true },
    outcomes: [{ url: 'https://docs.example.test/install', status: 'valid' }],
  });
  const repeatedObservation = appendCrawlRun(integrity, repeatedRun, sameContent);
  const changedSnapshot = createSnapshot({
    filename: 'documentation_2026-07-21T00:00:10.000Z.md',
    content: '# Install\n\nUse the package manager with the --frozen-lockfile flag.\n',
    sourceUrl: 'https://docs.example.test/install',
    canonicalSourceUrl: 'https://docs.example.test/install',
    capturedAt: '2026-07-21T00:00:10.000Z',
    crawlRunId: repeatedRun.id,
    totalPages: 1,
    successfulPages: 1,
    quality: { status: 'approved', reasons: [] },
  });
  const changedObservation = appendCrawlRun(repeatedObservation, repeatedRun, changedSnapshot);

  assert.equal(integrity.schemaVersion, 3);
  assert.equal(integrity.crawlRuns.length, 1);
  assert.equal(integrity.snapshots.length, 1);
  assert.equal(integrity.currentSnapshotId, approved.id);
  assert.deepEqual(integrity.snapshots[0].structure, approved.structure);
  assert.equal(duplicateAppend.crawlRuns.length, 1);
  assert.equal(duplicateAppend.snapshots.length, 1);
  assert.equal(repeatedObservation.crawlRuns.length, 2);
  assert.equal(repeatedObservation.snapshots.length, 1);
  assert.equal(changedObservation.snapshots.length, 2);
  assert.equal(changedObservation.currentSnapshotId, changedSnapshot.id);
  assert.equal(JSON.stringify(v2), v2Before);
}

function testCurrentSelectorRejectsInvalidSnapshots(): void {
  const run = createRun();
  const approved = createSnapshot({
    filename: 'approved.md',
    content: '# Approved',
    sourceUrl: 'https://docs.example.test/approved',
    canonicalSourceUrl: 'https://docs.example.test/approved',
    capturedAt: '2026-07-19T00:00:00.000Z',
    crawlRunId: run.id,
    totalPages: 1,
    successfulPages: 1,
    quality: { status: 'approved', reasons: [] },
  });
  const quarantined = createSnapshot({
    filename: 'blocked.md',
    content: '# Just a moment',
    sourceUrl: 'https://docs.example.test/blocked',
    canonicalSourceUrl: 'https://docs.example.test/blocked',
    capturedAt: '2026-07-20T00:00:00.000Z',
    crawlRunId: run.id,
    totalPages: 1,
    successfulPages: 0,
    quality: { status: 'quarantined', reasons: ['cloudflare-challenge'] },
  });
  const unknown = createSnapshot({
    filename: 'needs-review.md',
    content: '# Maybe documentation',
    sourceUrl: 'https://docs.example.test/review',
    canonicalSourceUrl: 'https://docs.example.test/review',
    capturedAt: '2026-07-21T00:00:00.000Z',
    crawlRunId: run.id,
    totalPages: 1,
    successfulPages: 1,
    quality: { status: 'unknown', reasons: ['content-too-short-for-automatic-approval'] },
  });

  assert.equal(
    selectApprovedCurrentSnapshot({
      snapshots: [quarantined, unknown, approved],
      currentSnapshotId: quarantined.id,
    })?.id,
    approved.id
  );
  assert.equal(selectApprovedCurrentSnapshot({ snapshots: [quarantined] }), null);
  assert.equal(selectApprovedCurrentSnapshot({ snapshots: [unknown] }), null);
}

function testIntegrityUpgradeCopiesV3Data(): void {
  const first = toIntegrityMetadata(createV2Fixture());
  const run = createRun();
  const upgraded = appendCrawlRun(first, run);
  const copied = toIntegrityMetadata(upgraded);

  copied.crawlRuns[0].configuration.maxDepth = 99;
  assert.equal(upgraded.crawlRuns[0].configuration.maxDepth, 2);
}

testAppendOnlyLineage();
testCurrentSelectorRejectsInvalidSnapshots();
testIntegrityUpgradeCopiesV3Data();
console.log('document integrity tests passed');
