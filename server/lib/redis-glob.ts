/**
 * Redis `SCAN ... MATCH` takes a glob, not a literal string.
 *
 * Domain names reach that pattern from directory names on disk, and nothing
 * validates those as hostnames. A directory called `docs*example.com` turns
 * `content:docs*example.com:*` into a pattern that also matches
 * `content:docs.example.com:0` and every other neighbour that happens to fit,
 * so removing that one domain would delete their content chunks too.
 *
 * Escaping the metacharacters keeps the pattern meaning exactly one domain.
 */
export function escapeRedisGlob(value: string): string {
  return value.replace(/[\\*?[\]]/g, (match) => `\\${match}`);
}

/** The content-chunk key pattern for exactly one domain. */
export function contentChunkPattern(domain: string): string {
  return `content:${escapeRedisGlob(domain)}:*`;
}
