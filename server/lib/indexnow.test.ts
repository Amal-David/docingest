import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import {
  buildIndexNowUrlList,
  getIndexNowConfig,
  isIndexNowKeyFileRequest,
  normalizeIndexNowKey,
  submitIndexNowUrls,
} from './indexnow';

describe('IndexNow contract', () => {
  test('validates and exposes a root key file location', () => {
    assert.equal(normalizeIndexNowKey('short'), null);
    assert.equal(normalizeIndexNowKey('docingest-key-2026'), 'docingest-key-2026');

    const config = getIndexNowConfig('https://docingest.com/', 'docingest-key-2026');
    assert.equal(config?.host, 'docingest.com');
    assert.equal(config?.keyLocation, 'https://docingest.com/docingest-key-2026.txt');
    assert.equal(isIndexNowKeyFileRequest('docingest-key-2026.txt', config), true);
    assert.equal(isIndexNowKeyFileRequest('other.txt', config), false);
  });

  test('keeps only unique URLs on the configured host', () => {
    const config = getIndexNowConfig('https://docingest.com', 'docingest-key-2026')!;

    assert.deepEqual(buildIndexNowUrlList([
      'https://docingest.com/',
      'https://docingest.com/',
      'https://docingest.com/markdown/example.com.md',
      'https://example.com/markdown/example.com.md',
      'not a url',
    ], config), [
      'https://docingest.com/',
      'https://docingest.com/markdown/example.com.md',
    ]);
  });

  test('submits the IndexNow bulk payload', async () => {
    const config = getIndexNowConfig('https://docingest.com', 'docingest-key-2026')!;
    let submittedUrl = '';
    let submittedBody: unknown;

    const result = await submitIndexNowUrls([
      'https://docingest.com/docs/example.com',
      'https://docingest.com/markdown/example.com.md',
    ], config, async (url, init) => {
      submittedUrl = String(url);
      submittedBody = JSON.parse(String(init?.body));
      return new Response(null, { status: 202 });
    });

    assert.equal(submittedUrl, 'https://api.indexnow.org/indexnow');
    assert.deepEqual(submittedBody, {
      host: 'docingest.com',
      key: 'docingest-key-2026',
      urlList: [
        'https://docingest.com/docs/example.com',
        'https://docingest.com/markdown/example.com.md',
      ],
    });
    assert.equal(result.configured, true);
    assert.equal(result.submitted, true);
    assert.equal(result.accepted, true);
    assert.equal(result.status, 202);
    assert.equal(result.urlCount, 2);
  });
});
