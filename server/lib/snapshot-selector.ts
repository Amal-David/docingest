import type { DocumentationSnapshot, DomainMetadataV3 } from '../types/versioning';
import { normalizeVersion } from './versioning';

export interface SnapshotSelector {
  snapshotId?: string;
  version?: string;
}

function matchesVersion(left: string | undefined, right: string): boolean {
  if (!left) return false;
  if (left === right) return true;
  return /^v?\d+(?:\.\d+){0,2}$/i.test(left)
    && /^v?\d+(?:\.\d+){0,2}$/i.test(right)
    && normalizeVersion(left) === normalizeVersion(right);
}

/**
 * Resolve a historical snapshot deterministically. `snapshotId` always wins;
 * `version` exists only for compatibility with prior REST/MCP callers and
 * upstream release labels.
 */
export function resolveSnapshotSelector(
  metadata: DomainMetadataV3,
  selector: SnapshotSelector
): DocumentationSnapshot | null {
  if (selector.snapshotId) {
    return metadata.snapshots.find((snapshot) => snapshot.id === selector.snapshotId) || null;
  }
  if (!selector.version) return null;

  const directSnapshot = [...metadata.snapshots]
    .filter((snapshot) => snapshot.id === selector.version || matchesVersion(snapshot.upstreamVersion, selector.version!))
    .sort((a, b) => b.capturedAt.localeCompare(a.capturedAt) || b.id.localeCompare(a.id))[0];
  if (directSnapshot) return directSnapshot;

  const legacyVersion = metadata.versions.find((entry) =>
    matchesVersion(entry.version, selector.version!)
  );
  if (!legacyVersion) return null;
  return metadata.snapshots.find(
    (snapshot) => snapshot.id === legacyVersion.snapshotId || snapshot.filename === legacyVersion.filename
  ) || null;
}
