import assert from 'node:assert/strict';
import { contentChunkPattern, escapeRedisGlob } from './redis-glob';

// Ordinary hostnames must pass through untouched, or every existing key would
// stop matching its own pattern. `.` and `-` are not glob metacharacters.
assert.equal(escapeRedisGlob('docs.example.com'), 'docs.example.com');
assert.equal(escapeRedisGlob('xn--ls8h.example-site.dev'), 'xn--ls8h.example-site.dev');
assert.equal(contentChunkPattern('docs.example.com'), 'content:docs.example.com:*');

// Each metacharacter that would widen the pattern gets escaped.
assert.equal(escapeRedisGlob('docs*example.com'), 'docs\\*example.com');
assert.equal(escapeRedisGlob('docs?example.com'), 'docs\\?example.com');
assert.equal(escapeRedisGlob('docs[ab].com'), 'docs\\[ab\\].com');
assert.equal(escapeRedisGlob('docs\\example.com'), 'docs\\\\example.com');

// The property that matters: a wildcard directory name must not produce a
// pattern that also selects a different domain's keys. Verified against a real
// Redis, an unescaped `docs*example.com` deleted every chunk belonging to both
// `docs.example.com` and `docsXexample.com`.
const pattern = contentChunkPattern('docs*example.com');
assert.equal(pattern, 'content:docs\\*example.com:*');
assert.ok(!pattern.includes('docs*example'), 'the wildcard must not survive into the pattern');

console.log('redis glob tests passed');
