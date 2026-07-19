import assert from 'node:assert/strict';
import {
  assessDocumentationQuality,
  failedPageLabels,
  reconcileCrawlOutcomes,
} from './crawl-acceptance';

assert.deepEqual(
  assessDocumentationQuality({ type: 'Vercel Security Checkpoint', content: 'You are being checked.' }),
  { status: 'quarantined', reasons: ['checkpoint-or-challenge-title'] }
);
assert.deepEqual(
  assessDocumentationQuality({ type: 'Documentation', content: '# 404 Not Found\nThis page does not exist.' }),
  { status: 'quarantined', reasons: ['error-or-authentication-title'] }
);
assert.deepEqual(
  assessDocumentationQuality({ type: 'Documentation', content: '# Login\nSign in to continue.' }),
  { status: 'quarantined', reasons: ['error-or-authentication-title'] }
);
assert.deepEqual(
  assessDocumentationQuality({ type: 'Guide', content: 'Short but potentially useful.' }),
  { status: 'unknown', reasons: ['content-too-short-for-automatic-approval'] }
);
assert.deepEqual(
  assessDocumentationQuality({ type: 'Guide', content: `# Guide\n\n${'Useful documentation. '.repeat(30)}` }),
  { status: 'approved', reasons: [] }
);

const result = reconcileCrawlOutcomes(
  [
    { url: 'https://docs.example.test/guide', status: 'valid' },
    { url: 'https://docs.example.test/hidden', status: 'valid' },
    { url: 'https://docs.example.test/empty', status: 'empty', reason: 'provider-result-had-no-extractable-content' },
  ],
  [
    {
      url: 'https://docs.example.test/guide',
      type: 'Guide',
      content: '# Guide\nReal documentation',
    },
    {
      url: 'https://docs.example.test/challenge',
      type: 'Just a moment',
      content: 'Checking your browser before accessing docs.',
    },
  ]
);

assert.equal(result.acceptedPages.length, 1);
assert.equal(result.acceptedPages[0].url, 'https://docs.example.test/guide');
assert.equal(result.evidencePages.length, 1);
assert.equal(result.evidencePages[0].url, 'https://docs.example.test/challenge');
assert.deepEqual(
  result.outcomes.map((outcome) => [outcome.url, outcome.status, outcome.reason]),
  [
    ['https://docs.example.test/guide', 'valid', undefined],
    ['https://docs.example.test/hidden', 'rejected', 'provider-page-not-submitted-to-save'],
    ['https://docs.example.test/empty', 'empty', 'provider-result-had-no-extractable-content'],
    ['https://docs.example.test/challenge', 'blocked', 'server-detected-blocked-content'],
  ]
);
assert.deepEqual(failedPageLabels(result.outcomes), [
  'https://docs.example.test/hidden (provider-page-not-submitted-to-save)',
  'https://docs.example.test/empty (provider-result-had-no-extractable-content)',
  'https://docs.example.test/challenge (server-detected-blocked-content)',
]);

const deduplicated = reconcileCrawlOutcomes(
  [{ url: 'https://docs.example.test//guide/?b=2&a=1', status: 'valid' }],
  [
    {
      url: 'https://docs.example.test/guide?a=1&b=2#overview',
      type: 'Guide',
      content: 'First copy of this guide.',
    },
    {
      url: 'https://docs.example.test/guide/?b=2&a=1',
      type: 'Guide',
      content: 'Second copy of this guide.',
    },
  ]
);
assert.equal(deduplicated.acceptedPages.length, 1);
assert.deepEqual(
  deduplicated.outcomes.map((outcome) => [outcome.status, outcome.canonicalUrl, outcome.reason]),
  [
    ['valid', 'https://docs.example.test/guide?a=1&b=2', undefined],
    ['duplicate', 'https://docs.example.test/guide?a=1&b=2', 'server-duplicate-canonical-url'],
  ]
);

console.log('crawl acceptance tests passed');
