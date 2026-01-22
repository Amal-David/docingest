/**
 * Documentation Versioning Utilities
 *
 * Functions for managing version strings, comparisons, and migrations.
 */

import fs from 'fs-extra';
import path from 'path';
import type {
  DocVersion,
  DomainMetadata,
  DomainMetadataV1,
  DomainMetadataV2,
  hasVersioning,
} from '../types/versioning';

/**
 * Normalize a version string to semantic versioning format (X.Y.Z)
 *
 * Examples:
 * - "v1" -> "1.0.0"
 * - "v2.1" -> "2.1.0"
 * - "1.5" -> "1.5.0"
 * - "3" -> "3.0.0"
 * - "1.0.0" -> "1.0.0" (already normalized)
 */
export function normalizeVersion(version: string): string {
  // Remove leading 'v' or 'V'
  let cleaned = version.replace(/^v/i, '').trim();

  // Handle empty or invalid input
  if (!cleaned || !/[\d]/.test(cleaned)) {
    return '1.0.0';
  }

  // Split by dots
  const parts = cleaned.split('.');

  // Extract numeric parts
  const major = parseInt(parts[0], 10) || 0;
  const minor = parseInt(parts[1], 10) || 0;
  const patch = parseInt(parts[2], 10) || 0;

  return `${major}.${minor}.${patch}`;
}

/**
 * Compare two semantic version strings
 *
 * Returns:
 * - Negative if a < b
 * - 0 if a == b
 * - Positive if a > b
 */
export function semverCompare(a: string, b: string): number {
  const aNorm = normalizeVersion(a);
  const bNorm = normalizeVersion(b);

  const aParts = aNorm.split('.').map(Number);
  const bParts = bNorm.split('.').map(Number);

  for (let i = 0; i < 3; i++) {
    const diff = aParts[i] - bParts[i];
    if (diff !== 0) return diff;
  }

  return 0;
}

/**
 * Calculate the next version by incrementing the patch number
 *
 * If no versions exist, returns "1.0.0"
 */
export function calculateNextVersion(existingVersions: string[]): string {
  if (existingVersions.length === 0) {
    return '1.0.0';
  }

  // Sort versions descending to get the latest
  const sorted = [...existingVersions].sort((a, b) => semverCompare(b, a));
  const latest = normalizeVersion(sorted[0]);

  const parts = latest.split('.').map(Number);
  parts[2] += 1; // Increment patch version

  return parts.join('.');
}

/**
 * Extract version from a URL path
 *
 * Patterns detected:
 * - /v2/ or /v2.1/ -> "2.0.0" or "2.1.0"
 * - /api/v1.5/ -> "1.5.0"
 * - /docs/version-3/ -> "3.0.0"
 * - /1.0/getting-started -> "1.0.0"
 *
 * Returns null if no version pattern is found
 */
export function extractVersionFromUrl(url: string): string | null {
  // Common version patterns in URLs
  const patterns = [
    // /v2/ or /v2.1/ or /v2.1.3/
    /\/v(\d+(?:\.\d+(?:\.\d+)?)?)\//i,
    // /api/v1.5/
    /\/api\/v(\d+(?:\.\d+)?)\//i,
    // /docs/version-3/ or /version-2.1/
    /\/version-?(\d+(?:\.\d+)?)\//i,
    // /1.0/ or /2.1.3/ at the start of path
    /^https?:\/\/[^\/]+\/(\d+\.\d+(?:\.\d+)?)\//,
    // /docs/1.0/ pattern
    /\/docs\/(\d+\.\d+(?:\.\d+)?)\//,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return normalizeVersion(match[1]);
    }
  }

  return null;
}

/**
 * Migrate legacy V1 metadata to V2 format with versioning
 *
 * This function:
 * 1. Reads existing documentation files in the domain path
 * 2. Assigns sequential versions (1.0.0, 1.1.0, etc.) based on timestamp
 * 3. Marks the newest as isLatest: true
 * 4. Returns the migrated metadata
 */
export async function migrateMetadataToV2(
  legacyMetadata: DomainMetadataV1,
  domainPath: string
): Promise<DomainMetadataV2> {
  // Find all documentation files
  const files = await fs.readdir(domainPath);
  const docFiles = files
    .filter((f) => f.startsWith('documentation_') && f.endsWith('.md'))
    .sort(); // Sort by timestamp (oldest first)

  // Create version entries for each file
  const versions: DocVersion[] = docFiles.map((filename, index) => {
    // Extract timestamp from filename
    const timestampMatch = filename.match(/documentation_(.+)\.md$/);
    const timestamp = timestampMatch ? timestampMatch[1] : new Date().toISOString();

    // Calculate version (1.0.0, 1.1.0, 1.2.0, etc.)
    const version = `1.${index}.0`;

    return {
      version,
      timestamp,
      filename,
      totalPages: legacyMetadata.totalPages,
      successfulPages: legacyMetadata.successfulPages,
      url: legacyMetadata.url,
      isLatest: false, // Will be set below
    };
  });

  // Mark the last (newest) version as latest
  if (versions.length > 0) {
    versions[versions.length - 1].isLatest = true;
    versions[versions.length - 1].label = 'latest';
  }

  const latestVersion = versions.length > 0 ? versions[versions.length - 1].version : '1.0.0';

  return {
    url: legacyMetadata.url,
    domain: legacyMetadata.domain,
    lastScraped: legacyMetadata.lastScraped,
    totalPages: legacyMetadata.totalPages,
    successfulPages: legacyMetadata.successfulPages,
    failedPages: legacyMetadata.failedPages,
    structure: legacyMetadata.structure,
    latestVersion,
    versions,
    schemaVersion: 2,
  };
}

/**
 * Find a documentation file by version
 *
 * Returns the filename if found, null otherwise
 */
export function findVersionFile(
  metadata: DomainMetadataV2,
  version: string
): string | null {
  const normalizedVersion = normalizeVersion(version);
  const versionEntry = metadata.versions.find(
    (v) => normalizeVersion(v.version) === normalizedVersion
  );
  return versionEntry?.filename || null;
}

/**
 * Get the latest version from metadata
 */
export function getLatestVersion(metadata: DomainMetadataV2): DocVersion | null {
  return metadata.versions.find((v) => v.isLatest) || metadata.versions[metadata.versions.length - 1] || null;
}

/**
 * Add a new version to metadata
 *
 * @param metadata - Existing metadata (V2 format)
 * @param newVersion - Version info for the new documentation
 * @returns Updated metadata with new version
 */
export function addVersionToMetadata(
  metadata: DomainMetadataV2,
  newVersion: Omit<DocVersion, 'isLatest'>
): DomainMetadataV2 {
  // Unmark all existing versions as not latest
  const updatedVersions: DocVersion[] = metadata.versions.map((v): DocVersion => {
    const updated: DocVersion = {
      ...v,
      isLatest: false,
    };
    // Clear the 'latest' label from old versions
    if (v.label === 'latest') {
      delete updated.label;
    }
    return updated;
  });

  // Add new version as latest
  const newVersionEntry: DocVersion = {
    ...newVersion,
    isLatest: true,
    label: 'latest',
  };

  updatedVersions.push(newVersionEntry);

  // Sort versions by semver (newest first for display)
  updatedVersions.sort((a, b) => semverCompare(b.version, a.version));

  return {
    ...metadata,
    latestVersion: newVersion.version,
    lastScraped: newVersion.timestamp,
    totalPages: newVersion.totalPages,
    successfulPages: newVersion.successfulPages,
    versions: updatedVersions,
  };
}

/**
 * Check if a version already exists in metadata
 */
export function versionExists(metadata: DomainMetadataV2, version: string): boolean {
  const normalizedVersion = normalizeVersion(version);
  return metadata.versions.some(
    (v) => normalizeVersion(v.version) === normalizedVersion
  );
}

/**
 * Determine version for new documentation
 *
 * Priority:
 * 1. Explicit version from request
 * 2. Extract from URL path
 * 3. Auto-increment from existing versions
 * 4. Default to 1.0.0
 */
export function determineVersion(
  explicitVersion: string | undefined,
  url: string,
  existingVersions: string[]
): string {
  // 1. Use explicit version if provided
  if (explicitVersion) {
    return normalizeVersion(explicitVersion);
  }

  // 2. Try to extract from URL
  const urlVersion = extractVersionFromUrl(url);
  if (urlVersion) {
    return urlVersion;
  }

  // 3. Auto-increment from existing versions
  return calculateNextVersion(existingVersions);
}
