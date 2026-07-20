import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import fs from 'fs-extra';
import {
  createLegacyCompatibilityView,
  migrateMetadataToV2,
  sortDocVersions,
} from './versioning';
import type { DocVersion, DomainMetadataV1 } from '../types/versioning';

async function withTemporaryDomain(
  run: (domainPath: string, metadata: DomainMetadataV1) => Promise<void>
): Promise<void> {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'docingest-versioning-'));
  const domainPath = path.join(root, 'docs.example.test');
  const metadataPath = path.join(domainPath, 'metadata.json');
  const metadata: DomainMetadataV1 = {
    url: 'https://docs.example.test',
    domain: 'docs.example.test',
    lastScraped: '2026-07-01T00:00:00.000Z',
    totalPages: 2,
    successfulPages: 2,
    failedPages: [],
    structure: [{ type: 'Guide', url: 'https://docs.example.test/guide' }],
  };

  await fs.ensureDir(domainPath);
  await fs.writeJSON(metadataPath, metadata, { spaces: 2 });
  await fs.writeFile(
    path.join(domainPath, 'documentation_2026-06-01T00:00:00.000Z.md'),
    '# Earlier capture\n'
  );
  await fs.writeFile(
    path.join(domainPath, 'documentation_2026-07-01T00:00:00.000Z.md'),
    '# Latest capture\n'
  );

  try {
    await run(domainPath, metadata);
  } finally {
    await fs.remove(root);
  }
}

async function testLegacyCompatibilityViewIsReadOnly(): Promise<void> {
  await withTemporaryDomain(async (domainPath, metadata) => {
    const metadataPath = path.join(domainPath, 'metadata.json');
    const filesBefore = (await fs.readdir(domainPath)).sort();
    const metadataBefore = await fs.readFile(metadataPath, 'utf-8');

    const view = await createLegacyCompatibilityView(metadata, domainPath);
    const alias = await migrateMetadataToV2(metadata, domainPath);

    assert.equal(view.schemaVersion, 2);
    assert.equal(view.latestVersion, 'legacy');
    assert.deepEqual(view.legacyDocumentFiles, [
      'documentation_2026-06-01T00:00:00.000Z.md',
      'documentation_2026-07-01T00:00:00.000Z.md',
    ]);
    assert.equal(view.versions.length, 1);
    assert.equal(view.versions[0].version, 'legacy');
    assert.equal(view.versions[0].filename, 'documentation_2026-07-01T00:00:00.000Z.md');
    assert.deepEqual(alias, view);

    assert.deepEqual((await fs.readdir(domainPath)).sort(), filesBefore);
    assert.equal(await fs.readFile(metadataPath, 'utf-8'), metadataBefore);
  });
}

function testSnapshotSelectorsAreNeverSortedAsSemver(): void {
  const records: DocVersion[] = [
    {
      version: 'f'.repeat(64),
      snapshotId: 'f'.repeat(64),
      timestamp: '2026-07-01T00:00:00.000Z',
      filename: 'older.md',
      totalPages: 1,
      successfulPages: 1,
      url: 'https://docs.example.test',
      isLatest: false,
    },
    {
      version: '0'.repeat(64),
      snapshotId: '0'.repeat(64),
      timestamp: '2026-07-02T00:00:00.000Z',
      filename: 'newer.md',
      totalPages: 1,
      successfulPages: 1,
      url: 'https://docs.example.test',
      isLatest: true,
      upstreamVersion: '2.0.0',
    },
  ];

  assert.deepEqual(sortDocVersions(records).map((record) => record.filename), ['newer.md', 'older.md']);
  assert.deepEqual(sortDocVersions([
    { ...records[0], version: '1.2.0', snapshotId: undefined },
    { ...records[1], version: '1.10.0', snapshotId: undefined },
  ]).map((record) => record.version), ['1.10.0', '1.2.0']);
}

void testLegacyCompatibilityViewIsReadOnly()
  .then(() => {
    testSnapshotSelectorsAreNeverSortedAsSemver();
    console.log('versioning compatibility tests passed');
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
