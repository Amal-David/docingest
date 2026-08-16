/**
 * Re-evaluate stored V3 snapshot quality under the proportional snapshot rule.
 *
 * Until #29, `/api/docs/save` demanded that *every* accepted page clear
 * automatic approval before it would mark a snapshot approved, and recorded
 * `one-or-more-pages-need-review` when one did not. A single short stub could
 * therefore hold back an entire corpus, and `selectApprovedCurrentSnapshot`
 * only serves approved snapshots, so the domain answered "Documentation not
 * found" despite its markdown sitting on disk.
 *
 * #29 fixed the rule going forward but left the already-stored verdicts in
 * place. This pass re-derives those verdicts from the markdown each snapshot
 * was built from, so stored documentation is not stranded until someone
 * happens to re-crawl it.
 *
 * Scope is deliberately narrow. `one-or-more-pages-need-review` was only ever
 * written by the unanimity rule, which makes it a precise marker for the
 * snapshots that rule held back. Snapshots quarantined for challenge pages,
 * error pages, login walls, or genuinely thin content carry different reasons
 * and are never touched.
 *
 * Dry-run is the default and the existing metadata is backed up before any
 * write, matching `audit-corpus-integrity`.
 *
 * Usage:
 *   npm run backfill:quality
 *   npm run backfill:quality -- --apply
 *   npm run backfill:quality -- --apply --force
 */
import fs from 'fs-extra';
import path from 'node:path';
import { assessSnapshotQuality } from '../lib/crawl-acceptance';
import { hashContent, selectApprovedCurrentSnapshot } from '../lib/document-integrity';
import { splitMergedMarkdown } from '../lib/markdown-merge';
import { resolveSafeSnapshotPath } from '../lib/storage-paths';
import type { DocumentationSnapshot, DomainMetadata, DomainMetadataV3 } from '../types/versioning';
import { hasVersioning } from '../types/versioning';

const UNANIMITY_REASON = 'one-or-more-pages-need-review';
const BACKUP_FILENAME = 'metadata.pre-quality-backfill.backup.json';

const apply = process.argv.includes('--apply');
const force = process.argv.includes('--force');
const storagePath = path.resolve(process.cwd(), 'server/storage/docs');

export interface BackfillOptions {
  apply: boolean;
  force: boolean;
  storagePath: string;
}

export interface BackfillSummary {
  mode: 'apply' | 'dry-run';
  /** Domains holding at least one snapshot the unanimity rule held back. */
  domainsExamined: number;
  /** Domains that gained a servable snapshot they did not have before. */
  domainsUnblocked: number;
  snapshotsApproved: number;
  snapshotsStillHeldBack: number;
  /** Snapshots whose markdown could not be reconciled with its `structure`. */
  snapshotsUnreadable: number;
  errors: number;
}

const EMPTY_SUMMARY: Omit<BackfillSummary, 'mode'> = {
  domainsExamined: 0,
  domainsUnblocked: 0,
  snapshotsApproved: 0,
  snapshotsStillHeldBack: 0,
  snapshotsUnreadable: 0,
  errors: 0,
};

function wasHeldBackByUnanimityRule(snapshot: DocumentationSnapshot): boolean {
  return snapshot.quality?.status === 'unknown'
    && snapshot.quality.reasons?.length === 1
    && snapshot.quality.reasons[0] === UNANIMITY_REASON;
}

function hasApprovedSnapshot(snapshots: DocumentationSnapshot[]): boolean {
  return snapshots.some((snapshot) => snapshot.quality?.status === 'approved');
}

/**
 * Recompute one snapshot's quality from the markdown on disk.
 *
 * Returns `null` when the snapshot cannot be reasoned about: a missing file, a
 * file whose hash no longer matches what the snapshot recorded, or markdown
 * that does not reconcile with the page labels the snapshot captured. A stale
 * or hand-edited file must not be allowed to promote documentation.
 */
async function requalifySnapshot(
  domainPath: string,
  snapshot: DocumentationSnapshot
): Promise<DocumentationSnapshot['quality'] | null> {
  const filePath = resolveSafeSnapshotPath(domainPath, snapshot.filename);
  if (!filePath || !await fs.pathExists(filePath)) return null;

  const content = await fs.readFile(filePath, 'utf-8');
  if (hashContent(content) !== snapshot.contentHash) return null;

  // `structure` records exactly the pages that passed server-side acceptance,
  // which is the same set the save handler rolled up. Recovering them gives the
  // rule the identical input it would have seen at save time.
  const pages = splitMergedMarkdown(content, snapshot.structure || []);
  if (!pages) return null;

  return assessSnapshotQuality(pages);
}

export async function backfillDomain(
  domain: string,
  options: BackfillOptions
): Promise<Omit<BackfillSummary, 'mode'>> {
  const result = { ...EMPTY_SUMMARY };
  const domainPath = path.join(options.storagePath, domain);
  const metadataPath = path.join(domainPath, 'metadata.json');
  if (!await fs.pathExists(metadataPath)) return result;

  const metadata = await fs.readJSON(metadataPath) as DomainMetadata;
  if (!hasVersioning(metadata) || metadata.schemaVersion !== 3) return result;

  const snapshots = metadata.snapshots || [];
  if (!snapshots.some(wasHeldBackByUnanimityRule)) return result;
  result.domainsExamined = 1;

  const wasServable = hasApprovedSnapshot(snapshots);
  const requalified: DocumentationSnapshot[] = [];
  let changed = false;

  for (const snapshot of snapshots) {
    if (!wasHeldBackByUnanimityRule(snapshot)) {
      requalified.push(snapshot);
      continue;
    }
    const quality = await requalifySnapshot(domainPath, snapshot);
    if (!quality) {
      result.snapshotsUnreadable += 1;
      requalified.push(snapshot);
      continue;
    }
    if (quality.status === 'approved') result.snapshotsApproved += 1;
    else result.snapshotsStillHeldBack += 1;
    changed = true;
    requalified.push({ ...snapshot, quality });
  }

  if (!changed) return result;
  if (!wasServable && hasApprovedSnapshot(requalified)) result.domainsUnblocked = 1;
  if (!options.apply) return result;

  const backupPath = path.join(domainPath, BACKUP_FILENAME);
  const backupExists = await fs.pathExists(backupPath);
  // An untouched backup is the only record of the pre-backfill boundary, so a
  // second run must not quietly overwrite it. The batch treats this as a
  // per-domain error and moves on.
  if (backupExists && !options.force) {
    throw new Error('backup exists; re-run with --force only after reviewing it');
  }
  if (!backupExists) {
    await fs.writeJSON(backupPath, metadata, { spaces: 2 });
  }

  const updated: DomainMetadataV3 = {
    ...metadata,
    snapshots: requalified,
    // A snapshot that just became approved may now be the one worth serving,
    // and a stale pointer would keep the domain dark regardless of quality.
    currentSnapshotId: selectApprovedCurrentSnapshot({
      snapshots: requalified,
      currentSnapshotId: metadata.currentSnapshotId,
    })?.id,
  };
  // Write through a sibling temp file so the replacement is atomic. A batch
  // interrupted mid-write would otherwise leave a domain with truncated
  // metadata, which reads as corrupt rather than as either verdict.
  const pendingPath = `${metadataPath}.pending`;
  await fs.writeJSON(pendingPath, updated, { spaces: 2 });
  await fs.rename(pendingPath, metadataPath);
  return result;
}

export async function backfillCorpus(options: BackfillOptions): Promise<BackfillSummary> {
  if (!await fs.pathExists(options.storagePath)) {
    throw new Error(`Storage directory does not exist: ${options.storagePath}`);
  }

  const summary: BackfillSummary = { mode: options.apply ? 'apply' : 'dry-run', ...EMPTY_SUMMARY };
  for (const domain of await fs.readdir(options.storagePath)) {
    try {
      if (!(await fs.stat(path.join(options.storagePath, domain))).isDirectory()) continue;
      const result = await backfillDomain(domain, options);
      summary.domainsExamined += result.domainsExamined;
      summary.domainsUnblocked += result.domainsUnblocked;
      summary.snapshotsApproved += result.snapshotsApproved;
      summary.snapshotsStillHeldBack += result.snapshotsStillHeldBack;
      summary.snapshotsUnreadable += result.snapshotsUnreadable;
      summary.errors += result.errors;
    } catch (error) {
      console.error(`${domain}: ${error instanceof Error ? error.message : error}`);
      summary.errors += 1;
    }
  }
  return summary;
}

async function main(): Promise<void> {
  const summary = await backfillCorpus({
    apply,
    force,
    storagePath,
  });

  console.log(JSON.stringify(summary));
  if (!apply) {
    console.log('Dry run only. Review the summary, then use --apply to write backup-first verdicts.');
  }
}

if (/^backfill-snapshot-quality\.(?:[cm]?[jt]s)$/.test(path.basename(process.argv[1] || ''))) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
