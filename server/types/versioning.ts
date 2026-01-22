/**
 * Documentation Versioning Types
 *
 * These types support multiple versions of documentation for the same domain.
 */

/**
 * Represents a single version of documentation for a domain
 */
export interface DocVersion {
  /** Semantic version string (e.g., "1.0.0", "2.1.3") */
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
}

/**
 * Union type for both metadata formats
 */
export type DomainMetadata = DomainMetadataV1 | DomainMetadataV2;

/**
 * Type guard to check if metadata has versioning support
 */
export function hasVersioning(metadata: DomainMetadata): metadata is DomainMetadataV2 {
  return 'versions' in metadata && Array.isArray(metadata.versions) && 'schemaVersion' in metadata;
}

/**
 * API response for listing versions
 */
export interface VersionsListResponse {
  domain: string;
  latestVersion: string;
  versions: Array<{
    version: string;
    label?: string;
    timestamp: string;
    isLatest: boolean;
    totalPages: number;
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
  }>;
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
  /** Optional explicit version (auto-assigned if not provided) */
  version?: string;
  /** Optional version label */
  versionLabel?: string;
  /** Whether to overwrite existing version */
  overwrite?: boolean;
}
