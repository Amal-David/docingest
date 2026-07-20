import assert from 'node:assert/strict';
import { createSnapshot } from './document-integrity';
import { resolveSnapshotSelector } from './snapshot-selector';
import type { DomainMetadataV3 } from '../types/versioning';

const first = createSnapshot({
  filename: 'first.md',
  content: '# First snapshot',
  sourceUrl: 'https://docs.example.test/v2',
  canonicalSourceUrl: 'https://docs.example.test/v2',
  capturedAt: '2026-07-01T00:00:00.000Z',
  crawlRunId: 'run-1',
  totalPages: 1,
  successfulPages: 1,
  upstreamVersion: 'v2.0',
  structure: [{ type: 'First', url: 'https://docs.example.test/v2/first' }],
  quality: { status: 'approved', reasons: [] },
});
const later = createSnapshot({
  filename: 'later.md',
  content: '# Later snapshot',
  sourceUrl: 'https://docs.example.test/v2',
  canonicalSourceUrl: 'https://docs.example.test/v2',
  capturedAt: '2026-07-02T00:00:00.000Z',
  crawlRunId: 'run-2',
  totalPages: 1,
  successfulPages: 1,
  upstreamVersion: 'v2.0',
  structure: [{ type: 'Later', url: 'https://docs.example.test/v2/later' }],
  quality: { status: 'approved', reasons: [] },
});

const metadata: DomainMetadataV3 = {
  url: 'https://docs.example.test',
  domain: 'docs.example.test',
  lastScraped: later.capturedAt,
  totalPages: 1,
  successfulPages: 1,
  failedPages: [],
  structure: [],
  latestVersion: later.id,
  versions: [
    {
      version: '1.2.0',
      timestamp: first.capturedAt,
      filename: first.filename,
      totalPages: 1,
      successfulPages: 1,
      url: first.sourceUrl,
      isLatest: false,
    },
    {
      version: later.id,
      snapshotId: later.id,
      timestamp: later.capturedAt,
      filename: later.filename,
      totalPages: 1,
      successfulPages: 1,
      url: later.sourceUrl,
      isLatest: true,
      upstreamVersion: 'v2.0',
    },
  ],
  schemaVersion: 3,
  crawlRuns: [],
  snapshots: [first, later],
  currentSnapshotId: later.id,
};

assert.equal(resolveSnapshotSelector(metadata, { snapshotId: first.id })?.id, first.id);
assert.equal(resolveSnapshotSelector(metadata, { version: '2.0.0' })?.id, later.id);
assert.equal(resolveSnapshotSelector(metadata, { version: '1.2.0' })?.id, first.id);
assert.equal(resolveSnapshotSelector(metadata, { snapshotId: 'missing' }), null);
assert.deepEqual(
  resolveSnapshotSelector(metadata, { snapshotId: first.id })?.structure,
  [{ type: 'First', url: 'https://docs.example.test/v2/first' }]
);

console.log('snapshot selector tests passed');
