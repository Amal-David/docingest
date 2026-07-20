import assert from 'node:assert/strict';
import { normalizeFirecrawlCrawlStatus } from './firecrawl-crawl';

function testFirecrawlOutcomeNormalization(): void {
  const status = normalizeFirecrawlCrawlStatus({
    status: 'completed',
    total: 5,
    data: [
      {
        markdown: '# Install\nUse npm.',
        metadata: { sourceURL: 'https://docs.example.test/install', title: 'Install' },
      },
      {
        markdown: '# Install again',
        metadata: { sourceURL: 'https://docs.example.test/install?ref=nav', title: 'Install again' },
      },
      {
        markdown: '',
        metadata: { sourceURL: 'https://docs.example.test/empty', title: 'Empty' },
      },
    ],
  });

  assert.equal(status.completed, 3);
  assert.equal(status.total, 5);
  assert.deepEqual(status.providerTotals, { discovered: 5, returned: 3, discoveredIsExact: true });
  assert.equal(status.data.length, 1);
  assert.deepEqual(status.outcomes.map((outcome) => outcome.status), ['valid', 'duplicate', 'empty']);

  const lowerBound = normalizeFirecrawlCrawlStatus({
    status: 'completed',
    data: [{ markdown: '# One', metadata: { sourceURL: 'https://docs.example.test/one' } }],
  });
  assert.deepEqual(lowerBound.providerTotals, { discovered: 1, returned: 1, discoveredIsExact: false });
}

testFirecrawlOutcomeNormalization();
console.log('crawl outcome tests passed');
