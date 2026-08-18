import fs from 'fs-extra';
import path from 'node:path';
import { selectApprovedCurrentSnapshot } from './document-integrity';
import type { DocumentationSnapshot, DomainMetadata, DomainMetadataV3 } from '../types/versioning';
import { hasVersioning } from '../types/versioning';

/**
 * One definition of "what the corpus contains" and "what is servable".
 *
 * These two questions were previously answered independently by the request
 * handlers and by the offline search-index builder, and the answers disagreed:
 * the builder indexed any domain holding a `documentation_*.md`, while the API
 * only serves domains with an approved snapshot. Search could therefore surface
 * a domain that `/docs/:domain` then refused. Both callers now share this
 * module so the index cannot drift from what is served.
 */

/**
 * List the domain directories under a storage root.
 *
 * `readdir` also returns plain files — `.gitkeep` is committed to keep the
 * storage directory in Git — and treating one as a domain makes the next
 * `readdir` throw `ENOTDIR`. Filtering here fixes that at the source rather
 * than in each caller's error handler.
 */
export async function listDomainDirectories(storagePath: string): Promise<string[]> {
  if (!await fs.pathExists(storagePath)) return [];

  const entries = await fs.readdir(storagePath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export interface ApprovedDomain {
  domain: string;
  metadata: DomainMetadataV3;
  snapshot: DocumentationSnapshot;
  /** Absolute path to the markdown the snapshot points at. */
  contentPath: string;
}

/**
 * Resolve the snapshot a domain is actually served from, or `null`.
 *
 * Legacy V1/V2 records and domains whose snapshots are all quarantined or
 * unknown are deliberately not servable, so they resolve to `null` here too.
 */
export async function readApprovedDomain(
  storagePath: string,
  domain: string
): Promise<ApprovedDomain | null> {
  const domainPath = path.join(storagePath, domain);
  const metadataPath = path.join(domainPath, 'metadata.json');
  if (!await fs.pathExists(metadataPath)) return null;

  let metadata: DomainMetadata;
  try {
    metadata = await fs.readJSON(metadataPath) as DomainMetadata;
  } catch {
    return null;
  }
  if (!hasVersioning(metadata) || metadata.schemaVersion !== 3) return null;

  const snapshot = selectApprovedCurrentSnapshot(metadata);
  if (!snapshot) return null;

  // The served content is the approved snapshot's own file. Picking the
  // newest `documentation_*.md` instead would index text the API never
  // returns, because a newer snapshot can exist without being approved.
  const contentPath = path.join(domainPath, snapshot.filename);
  if (!await fs.pathExists(contentPath)) return null;

  return { domain, metadata, snapshot, contentPath };
}
