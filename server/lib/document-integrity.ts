import crypto from 'node:crypto';
import type {
  CrawlPageOutcome,
  CrawlRun,
  CrawlRunTotals,
  CrawlProviderTotals,
  DocumentationSnapshot,
  DomainMetadataV2,
  DomainMetadataV3,
  SnapshotQuality,
  VersionedDomainMetadata,
} from '../types/versioning';

const EMPTY_TOTALS: CrawlRunTotals = {
  discovered: 0,
  returned: 0,
  valid: 0,
  blocked: 0,
  empty: 0,
  duplicate: 0,
  rejected: 0,
  failed: 0,
};

function sha256(value: string): string {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function stableJson(value: Record<string, unknown>): string {
  return JSON.stringify(
    Object.keys(value)
      .sort()
      .reduce<Record<string, unknown>>((result, key) => {
        result[key] = value[key];
        return result;
      }, {})
  );
}

export function hashContent(content: string): string {
  return sha256(content.replace(/\r\n/g, '\n'));
}

export function createCrawlRun(
  input: Omit<CrawlRun, 'id' | 'totals'> & { totals?: Partial<CrawlRunTotals> }
): CrawlRun {
  const outcomes = input.outcomes.map((outcome) => ({ ...outcome }));
  const totals = outcomes.reduce<CrawlRunTotals>((result, outcome) => {
    result[outcome.status] += 1;
    return result;
  }, { ...EMPTY_TOTALS, ...input.totals });
  const id = sha256([
    input.provider,
    input.canonicalSeedUrl,
    input.scope || '',
    input.startedAt,
    input.completedAt,
    JSON.stringify(input.providerTotals),
    stableJson(input.configuration),
    JSON.stringify(outcomes),
  ].join('\u0000'));

  return {
    ...input,
    id,
    totals,
    outcomes,
  };
}

export function createSnapshot(input: {
  filename: string;
  content: string;
  sourceUrl: string;
  canonicalSourceUrl: string;
  capturedAt: string;
  crawlRunId: string;
  totalPages: number;
  successfulPages: number;
  structure?: Array<{ type: string; url: string | null }>;
  upstreamVersion?: string;
  upstreamChannel?: string;
  quality?: SnapshotQuality;
}): DocumentationSnapshot {
  const contentHash = hashContent(input.content);
  const id = sha256([input.canonicalSourceUrl, contentHash].join('\u0000'));

  return {
    id,
    filename: input.filename,
    contentHash,
    sourceUrl: input.sourceUrl,
    canonicalSourceUrl: input.canonicalSourceUrl,
    capturedAt: input.capturedAt,
    crawlRunId: input.crawlRunId,
    upstreamVersion: input.upstreamVersion,
    upstreamChannel: input.upstreamChannel,
    totalPages: input.totalPages,
    successfulPages: input.successfulPages,
    structure: input.structure || [],
    quality: input.quality || { status: 'unknown', reasons: [] },
  };
}

function isApprovedSnapshot(snapshot: DocumentationSnapshot): boolean {
  return Boolean(
    snapshot.id &&
    snapshot.filename &&
    snapshot.contentHash &&
    snapshot.canonicalSourceUrl &&
    snapshot.quality.status === 'approved'
  );
}

export function selectApprovedCurrentSnapshot(
  metadata: Pick<DomainMetadataV3, 'snapshots' | 'currentSnapshotId'>
): DocumentationSnapshot | null {
  const snapshots = metadata.snapshots.filter(isApprovedSnapshot);
  if (snapshots.length === 0) return null;

  const explicitlySelected = metadata.currentSnapshotId
    ? snapshots.find((snapshot) => snapshot.id === metadata.currentSnapshotId)
    : undefined;
  if (explicitlySelected) return explicitlySelected;

  return [...snapshots].sort((a, b) => {
    const byTimestamp = b.capturedAt.localeCompare(a.capturedAt);
    return byTimestamp !== 0 ? byTimestamp : b.id.localeCompare(a.id);
  })[0];
}

export function toIntegrityMetadata(metadata: VersionedDomainMetadata): DomainMetadataV3 {
  if (metadata.schemaVersion === 3) {
    return {
      ...metadata,
      crawlRuns: metadata.crawlRuns.map((run) => ({
        ...run,
        configuration: { ...run.configuration },
        totals: { ...run.totals },
        providerTotals: { ...run.providerTotals },
        outcomes: run.outcomes.map((outcome) => ({ ...outcome })),
      })),
      snapshots: metadata.snapshots.map((snapshot) => ({
        ...snapshot,
        structure: (snapshot.structure || []).map((entry) => ({ ...entry })),
        quality: { ...snapshot.quality, reasons: [...snapshot.quality.reasons] },
      })),
    };
  }

  const v2 = metadata as DomainMetadataV2;
  return {
    ...v2,
    schemaVersion: 3,
    crawlRuns: [],
    snapshots: [],
    currentSnapshotId: undefined,
  };
}

export function appendCrawlRun(
  metadata: VersionedDomainMetadata,
  crawlRun: CrawlRun,
  snapshot?: DocumentationSnapshot
): DomainMetadataV3 {
  const integrity = toIntegrityMetadata(metadata);
  const existingRun = integrity.crawlRuns.find((run) => run.id === crawlRun.id);
  const existingSnapshot = snapshot
    ? integrity.snapshots.find((candidate) => candidate.id === snapshot.id)
    : undefined;
  const snapshots = snapshot && !existingSnapshot
    ? [...integrity.snapshots, snapshot]
    : integrity.snapshots;
  const candidate = selectApprovedCurrentSnapshot({
    snapshots,
    currentSnapshotId: snapshot?.quality.status === 'approved'
      ? snapshot.id
      : integrity.currentSnapshotId,
  });

  return {
    ...integrity,
    crawlRuns: existingRun ? integrity.crawlRuns : [...integrity.crawlRuns, crawlRun],
    snapshots,
    currentSnapshotId: candidate?.id,
  };
}

export function summarizeOutcomes(outcomes: CrawlPageOutcome[]): CrawlRunTotals {
  return outcomes.reduce<CrawlRunTotals>((result, outcome) => {
    result[outcome.status] += 1;
    return result;
  }, { ...EMPTY_TOTALS });
}
