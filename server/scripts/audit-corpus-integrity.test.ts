import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import fs from 'fs-extra';
import { auditCorpus } from './audit-corpus-integrity';
import type { DomainMetadataV1 } from '../types/versioning';

const CAPTURED_AT = '2026-07-01T00:00:00.000Z';

async function addLegacyDomain(storagePath: string, domain: string, content: string): Promise<{
  domainPath: string;
  metadata: DomainMetadataV1;
}> {
  const domainPath = path.join(storagePath, domain);
  const metadata: DomainMetadataV1 = {
    url: `https://${domain}`,
    domain,
    lastScraped: CAPTURED_AT,
    totalPages: 1,
    successfulPages: 1,
    failedPages: [],
    structure: [{ type: 'Guide', url: `https://${domain}/guide` }],
  };
  await fs.ensureDir(domainPath);
  await fs.writeJSON(path.join(domainPath, 'metadata.json'), metadata, { spaces: 2 });
  await fs.writeFile(path.join(domainPath, `documentation_${CAPTURED_AT}.md`), content);
  return { domainPath, metadata };
}

async function withTemporaryCorpus(run: (storagePath: string) => Promise<void>): Promise<void> {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'docingest-integrity-audit-'));
  const storagePath = path.join(root, 'server', 'storage', 'docs');
  await fs.ensureDir(storagePath);
  try {
    await run(storagePath);
  } finally {
    await fs.remove(root);
  }
}

async function testApplyCreatesBackupBeforeReplacingMetadata(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const { domainPath, metadata } = await addLegacyDomain(
      storagePath,
      'approved.example.test',
      `# Approved\n\n${'Useful documentation. '.repeat(30)}`
    );

    const summary = await auditCorpus({ apply: true, force: false, storagePath });
    assert.deepEqual(summary, {
      mode: 'apply',
      upgraded: 1,
      clean: 0,
      skipped: 0,
      needsReview: 0,
      errors: 0,
    });
    assert.deepEqual(
      await fs.readJSON(path.join(domainPath, 'metadata.pre-integrity-audit.backup.json')),
      metadata
    );
    assert.equal((await fs.readJSON(path.join(domainPath, 'metadata.json'))).schemaVersion, 3);
  });
}

async function testBackupConflictDoesNotAbortBatchOrOverwriteEvidence(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const conflicted = await addLegacyDomain(
      storagePath,
      'conflicted.example.test',
      `# Conflicted\n\n${'Useful documentation. '.repeat(30)}`
    );
    const processed = await addLegacyDomain(
      storagePath,
      'processed.example.test',
      `# Processed\n\n${'Useful documentation. '.repeat(30)}`
    );
    const backupPath = path.join(conflicted.domainPath, 'metadata.pre-integrity-audit.backup.json');
    const preservedBackup = { preserved: 'first audit boundary' };
    await fs.writeJSON(backupPath, preservedBackup, { spaces: 2 });

    const firstRun = await auditCorpus({ apply: true, force: false, storagePath });
    assert.equal(firstRun.errors, 1);
    assert.equal(firstRun.upgraded, 1);
    assert.equal((await fs.readJSON(path.join(conflicted.domainPath, 'metadata.json'))).schemaVersion, undefined);
    assert.equal((await fs.readJSON(path.join(processed.domainPath, 'metadata.json'))).schemaVersion, 3);
    assert.deepEqual(await fs.readJSON(backupPath), preservedBackup);

    const forcedRun = await auditCorpus({ apply: true, force: true, storagePath });
    assert.equal(forcedRun.errors, 0);
    assert.equal(forcedRun.upgraded, 1);
    assert.equal((await fs.readJSON(path.join(conflicted.domainPath, 'metadata.json'))).schemaVersion, 3);
    assert.deepEqual(await fs.readJSON(backupPath), preservedBackup);
  });
}

async function testUnknownQualityIsRecordedForManualReview(): Promise<void> {
  await withTemporaryCorpus(async (storagePath) => {
    const { domainPath } = await addLegacyDomain(storagePath, 'review.example.test', '# Short documentation');

    const summary = await auditCorpus({ apply: true, force: false, storagePath });
    const upgraded = await fs.readJSON(path.join(domainPath, 'metadata.json'));

    assert.equal(summary.needsReview, 1);
    assert.equal(upgraded.crawlRuns[0].outcomes[0].status, 'needs-review');
  });
}

void testApplyCreatesBackupBeforeReplacingMetadata()
  .then(testBackupConflictDoesNotAbortBatchOrOverwriteEvidence)
  .then(testUnknownQualityIsRecordedForManualReview)
  .then(() => console.log('integrity audit tests passed'))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
