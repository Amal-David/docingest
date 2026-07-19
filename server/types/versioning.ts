/**
 * Documentation Versioning Types
 *
 * These types support multiple versions of documentation for the same domain.
 */

/**
 * Represents a single version of documentation for a domain
 */
export interface DocVersion {
  /**
   * Backwards-compatible selector. New V3 records set this to the immutable
   * snapshot ID; legacy V2 records may contain an upstream semantic version.
   */
  version: string;
  /** Optional human-readable label (e.g., "latest", "stable", "beta") */
  label?: string;
  /** ISO timestamp when this version was created */
  timestamp: string;
  /** The markdown filename (e.g., "documentation_2025-01-22T10:30:00.000Z.md") */
  filename: string;
  /** Total number of pages in this version */
  totalPages: number;
  /** Number of successfully scraped pages */
  successfulPages: number;
  /** Original source URL */
  url: string;
  /** Whether this is the latest version */
  isLatest: boolean;
  /** Immutable snapshot ID for V3 records. */
  snapshotId?: string;
  /** Upstream release/version claimed by the documentation source, if known. */
  upstreamVersion?: string;
  /** Upstream release channel such as stable, beta, or next, if known. */
  upstreamChannel?: string;
}

/**
 * Legacy metadata format (V1) - for backward compatibility
 */
export interface DomainMetadataV1 {
  url: string;
  domain: string;
  lastScraped: string;
  totalPages: number;
  successfulPages: number;
  failedPages: string[];
  structure: Array<{ type: string; url: string | null }>;
}

/**
 * New metadata format (V2) with versioning support
 */
export interface DomainMetadataV2 extends Omit<DomainMetadataV1, 'lastScraped'> {
  /** Latest version string */
  latestVersion: string;
  /** When the latest version was scraped */
  lastScraped: string;
  /** Array of all available versions */
  versions: DocVersion[];
  /** Schema version for future migrations */
  schemaVersion: 2;
  /** Legacy source files retained for a manual, backup-first migration. */
  legacyDocumentFiles?: string[];
}

export type CrawlPageOutcomeStatus =
  | 'valid'
  | 'blocked'
  | 'empty'
  | 'duplicate'
  | 'rejected'
  | 'failed';

export interface CrawlPageOutcome {
  url: string;
  canonicalUrl?: string;
  status: CrawlPageOutcomeStatus;
  reason?: string;
  contentHash?: string;
  providerStatus?: number | string;
}

export interface CrawlRunTotals {
  discovered: number;
  returned: number;
  valid: number;
  blocked: number;
  empty: number;
  duplicate: number;
  rejected: number;
  failed: number;
}

export interface CrawlProviderTotals {
  /** Provider-reported or lower-bound number of discovered pages. */
  discovered: number;
  /** Number of page records returned by the provider. */
  returned: number;
  /** False when the provider omitted a total and discovery is only a lower bound. */
  discoveredIsExact: boolean;
}

export interface CrawlRun {
  id: string;
  provider: string;
  seedUrl: string;
  canonicalSeedUrl: string;
  scope?: string;
  configuration: Record<string, unknown>;
  startedAt: string;
  completedAt: string;
  providerTotals: CrawlProviderTotals;
  totals: CrawlRunTotals;
  outcomes: CrawlPageOutcome[];
}

export type SnapshotQualityStatus = 'approved' | 'quarantined' | 'unknown';

export interface SnapshotQuality {
  status: SnapshotQualityStatus;
  reasons: string[];
}

export interface DocumentationSnapshot {
  id: string;
  filename: string;
  contentHash: string;
  sourceUrl: string;
  canonicalSourceUrl: string;
  capturedAt: string;
  crawlRunId: string;
  upstreamVersion?: string;
  upstreamChannel?: string;
  totalPages: number;
  successfulPages: number;
  /** Page labels and URLs captured with this exact snapshot. */
  structure: Array<{ type: string; url: string | null }>;
  quality: SnapshotQuality;
}

/**
 * Additive metadata format for reliable crawl lineage. V2 fields are retained
 * for backwards compatibility until each public reader is moved to snapshots.
 */
export interface DomainMetadataV3 extends Omit<DomainMetadataV2, 'schemaVersion'> {
  schemaVersion: 3;
  crawlRuns: CrawlRun[];
  snapshots: DocumentationSnapshot[];
  currentSnapshotId?: string;
}

export type VersionedDomainMetadata = DomainMetadataV2 | DomainMetadataV3;

/**
 * Union type for both metadata formats
 */
export type DomainMetadata = DomainMetadataV1 | VersionedDomainMetadata;

/**
 * Type guard to check if metadata has versioning support
 */
export function hasVersioning(metadata: DomainMetadata): metadata is VersionedDomainMetadata {
  return 'versions' in metadata && Array.isArray(metadata.versions) && 'schemaVersion' in metadata;
}

/**
 * API response for listing versions
 */
export interface VersionsListResponse {
  domain: string;
  latestVersion: string;
  currentSnapshotId?: string;
  versions: Array<{
    version: string;
    label?: string;
    timestamp: string;
    isLatest: boolean;
    totalPages: number;
    snapshotId?: string;
    upstreamVersion?: string;
    upstreamChannel?: string;
    quality?: SnapshotQuality;
  }>;
}

/**
 * API response for getting documentation with version info
 */
export interface DocWithVersionResponse {
  domain: string;
  content: string;
  lastUpdated: string;
  url: string;
  filePath: string;
  structure: Array<{ type: string; url: string | null }>;
  version: string;
  isLatest: boolean;
  availableVersions: Array<{
    version: string;
    label?: string;
    isLatest: boolean;
    snapshotId?: string;
    upstreamVersion?: string;
  }>;
  snapshot?: {
    id: string;
    contentHash: string;
    sourceUrl: string;
    capturedAt: string;
    quality: SnapshotQuality;
    upstreamVersion?: string;
    upstreamChannel?: string;
  };
}

/**
 * Request body for saving documentation with version
 */
export interface SaveDocRequest {
  domain: string;
  timestamp: string;
  pages: Array<{
    type: string;
    url: string;
    content: string;
  }>;
  /** Optional upstream version supplied by the documentation source. */
  version?: string;
  /** Optional version label */
  versionLabel?: string;
  /** @deprecated Snapshot identity is content-addressed; repeated content is idempotent. */
  overwrite?: boolean;
  /** Crawl provider that produced this result. */
  crawlProvider?: string;
  /** Provider-specific crawl options retained for lineage. */
  crawlConfiguration?: Record<string, unknown>;
  /** Optional provider start timestamp for the crawl run. */
  crawlStartedAt?: string;
  /** Provider job ID whose server-recorded outcomes should be used when available. */
  crawlId?: string;
  /** Complete normalized provider outcomes for direct or recovered submissions. */
  crawlOutcomes?: CrawlPageOutcome[];
  /** Provider totals, kept separate from server acceptance totals. */
  providerTotals?: Partial<CrawlProviderTotals>;
}
