import assert from 'node:assert/strict';
import { searchApprovedSections } from './section-retrieval';
import type { DocumentationSnapshot } from '../types/versioning';

function snapshot(id: string, quality: DocumentationSnapshot['quality']): DocumentationSnapshot {
  return {
    id,
    filename: `${id}.md`,
    contentHash: `${id}-hash`,
    sourceUrl: `https://docs.example.test/${id}`,
    canonicalSourceUrl: `https://docs.example.test/${id}`,
    capturedAt: '2026-07-19T00:00:00.000Z',
    crawlRunId: 'run',
    totalPages: 1,
    successfulPages: 1,
    structure: [],
    quality,
  };
}

const results = searchApprovedSections([
  {
    domain: 'title-only.example.test',
    snapshot: snapshot('title', { status: 'approved', reasons: [] }),
    content: '# Secure transport\n\nThis section has no matching body term.',
  },
  {
    domain: 'body-match.example.test',
    snapshot: snapshot('body', { status: 'approved', reasons: [] }),
    content: '# Configuration\nURL: https://docs.example.test/body/config#tls\n\nEnable secure transport by configuring TLS certificates.',
  },
  {
    domain: 'blocked.example.test',
    snapshot: snapshot('blocked', { status: 'quarantined', reasons: ['checkpoint-or-challenge-title'] }),
    content: '# Secure transport\n\nThis must never be returned.',
  },
  {
    domain: 'missing-provenance.example.test',
    snapshot: { ...snapshot('missing', { status: 'approved', reasons: [] }), contentHash: '' },
    content: '# Secure transport\n\nThis must never be returned either.',
  },
], 'secure transport', 10, 70);

assert.equal(results.length, 2);
assert.equal(results[0].domain, 'body-match.example.test');
assert.equal(results[0].canonicalUrl, 'https://docs.example.test/body/config');
assert.equal(results[0].snapshotId, 'body');
assert.equal(results[0].qualityStatus, 'approved');
assert.deepEqual(results[0].qualityReasons, []);
assert.ok(results[0].content.endsWith('[Section truncated]'));
assert.equal(results.some((result) => result.domain === 'blocked.example.test'), false);
assert.equal(results.some((result) => result.domain === 'missing-provenance.example.test'), false);

console.log('section retrieval tests passed');
