import path from 'node:path';

const DOMAIN_NAME_RE = /^(?=.{1,253}$)(?!.*\.\.)(?!.*\.$)[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/i;

export interface SafeDomainPath {
  domain: string;
  domainPath: string;
}

export function resolveSafeDomainPath(storagePath: string, rawDomain: unknown): SafeDomainPath | null {
  if (typeof rawDomain !== 'string') return null;

  const domain = rawDomain.trim().toLowerCase();
  if (!DOMAIN_NAME_RE.test(domain)) return null;

  const rootPath = path.resolve(storagePath);
  const domainPath = path.resolve(rootPath, domain);
  if (path.dirname(domainPath) !== rootPath) return null;

  return { domain, domainPath };
}

export function isValidSnapshotTimestamp(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  const parsed = new Date(value);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString() === value;
}

export function resolveSafeSnapshotPath(domainPath: string, filename: string): string | null {
  const rootPath = path.resolve(domainPath);
  const filePath = path.resolve(rootPath, filename);
  return path.dirname(filePath) === rootPath ? filePath : null;
}
