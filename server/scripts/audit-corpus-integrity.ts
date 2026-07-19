/**
 * Add snapshot lineage and a deterministic quality verdict to existing V1/V2
 * corpus records without touching Markdown evidence. Dry-run is the default.
 *
 * Usage:
 *   npm run audit:integrity
 *   npm run audit:integrity -- --apply
 *   npm run audit:integrity -- --apply --force
 */
import fs from 'fs-extra';
import path from 'node:path';
import {
  appendCrawlRun,
  createCrawlRun,
  createSnapshot,
} from '../lib/document-integrity';
import { assessDocumentationQuality } from '../lib/crawl-acceptance';
import { canonicalizeUrl } from '../lib/url-canonicalization';
import { createLegacyCompatibilityView, getLatestVersion } from '../lib/versioning';
import type { DomainMetadata, DomainMetadataV1, VersionedDomainMetadata } from '../types/versioning';
import { hasVersioning } from '../types/versioning';

const apply = process.argv.includes('--apply');
const force = process.argv.includes('--force');
const storagePath = path.resolve(process.cwd(), 'server/storage/docs');

export interface AuditOptions {
  apply: boolean;
  force: boolean;
  storagePath: string;
}

export interface AuditSummary {
  mode: 'apply' | 'dry-run';
  upgraded: number;
  clean: number;
  skipped: number;
  needsReview: number;
  errors: number;
}

type AuditResult = 'upgraded' | 'clean' | 'skipped' | 'needs-review';

function firstHeading(content: string): string {
  return content.match(/^#\s+(.+)$/m)?.[1]?.trim() || '';
}

export async function auditDomain(domain: string, options: AuditOptions): Promise<AuditResult> {
  const domainPath = path.join(options.storagePath, domain);
  const metadataPath = path.join(domainPath, 'metadata.json');
  if (!await fs.pathExists(metadataPath)) return 'skipped';

  const rawMetadata = await fs.readJSON(metadataPath) as DomainMetadata;
  if (hasVersioning(rawMetadata) && rawMetadata.schemaVersion === 3) return 'clean';

  const metadata: VersionedDomainMetadata = hasVersioning(rawMetadata)
    ? rawMetadata
    : await createLegacyCompatibilityView(rawMetadata as DomainMetadataV1, domainPath);
  const current = getLatestVersion(metadata);
  if (!current) return 'needs-review';

  const contentPath = path.join(domainPath, current.filename);
  if (!await fs.pathExists(contentPath)) return 'needs-review';
  const content = await fs.readFile(contentPath, 'utf-8');
  const quality = assessDocumentationQuality({ type: firstHeading(content), content });
  const canonicalSourceUrl = canonicalizeUrl(current.url || metadata.url) || current.url || metadata.url;
  const capturedAt = current.timestamp || metadata.lastScraped;
  const auditRun = createCrawlRun({
    provider: 'integrity-audit',
    seedUrl: current.url || metadata.url,
    canonicalSeedUrl: canonicalSourceUrl,
    configuration: { sourceSchemaVersion: hasVersioning(rawMetadata) ? rawMetadata.schemaVersion : 1 },
    startedAt: capturedAt,
    completedAt: capturedAt,
    providerTotals: {
      discovered: metadata.totalPages,
      returned: metadata.successfulPages,
      discoveredIsExact: false,
    },
    outcomes: [{
      url: current.url || metadata.url,
      canonicalUrl: canonicalSourceUrl,
      status: quality.status === 'approved'
        ? 'valid'
        : quality.status === 'quarantined'
          ? 'rejected'
          : 'needs-review',
      reason: quality.reasons[0],
    }],
  });
  const snapshot = createSnapshot({
    filename: current.filename,
    content,
    sourceUrl: current.url || metadata.url,
    canonicalSourceUrl,
    capturedAt,
    crawlRunId: auditRun.id,
    totalPages: current.totalPages,
    successfulPages: current.successfulPages,
    structure: metadata.structure,
    upstreamVersion: current.upstreamVersion || (current.version === 'legacy' ? undefined : current.version),
    upstreamChannel: current.upstreamChannel || current.label,
    quality,
  });
  const upgraded = appendCrawlRun(metadata, auditRun, snapshot);

  if (options.apply) {
    const backupPath = path.join(domainPath, 'metadata.pre-integrity-audit.backup.json');
    const backupExists = await fs.pathExists(backupPath);
    if (backupExists && !options.force) {
      throw new Error(`${domain}: backup exists; re-run with --force only after reviewing it`);
    }
    if (!backupExists) {
      await fs.writeJSON(backupPath, rawMetadata, { spaces: 2 });
    }
    await fs.writeJSON(metadataPath, upgraded, { spaces: 2 });
  }

  return quality.status === 'approved' ? 'upgraded' : 'needs-review';
}

export async function auditCorpus(options: AuditOptions): Promise<AuditSummary> {
  if (!await fs.pathExists(options.storagePath)) {
    throw new Error(`Storage directory does not exist: ${options.storagePath}`);
  }

  const summary: AuditSummary = {
    mode: options.apply ? 'apply' : 'dry-run',
    upgraded: 0,
    clean: 0,
    skipped: 0,
    needsReview: 0,
    errors: 0,
  };
  for (const entry of await fs.readdir(options.storagePath)) {
    try {
      const fullPath = path.join(options.storagePath, entry);
      if (!(await fs.stat(fullPath)).isDirectory()) continue;
      const result = await auditDomain(entry, options);
      if (result === 'upgraded') summary.upgraded += 1;
      if (result === 'clean') summary.clean += 1;
      if (result === 'skipped') summary.skipped += 1;
      if (result === 'needs-review') summary.needsReview += 1;
    } catch (error) {
      console.error(`${entry}: ${error instanceof Error ? error.message : error}`);
      summary.errors += 1;
    }
  }

  return summary;
}

async function main(): Promise<void> {
  const summary = await auditCorpus({ apply, force, storagePath });

  console.log(JSON.stringify(summary));
  if (!apply) {
    console.log('Dry run only. Review the summary, then use --apply to write backup-first V3 metadata.');
  }
}

if (/^audit-corpus-integrity\.(?:[cm]?[jt]s)$/.test(path.basename(process.argv[1] || ''))) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
