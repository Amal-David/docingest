import assert from 'node:assert/strict';
import { canonicalDomain, canonicalizeUrl } from './url-canonicalization';

assert.equal(
  canonicalizeUrl(' HTTPS://Docs.Example.test:443//guide///?b=2&utm_source=newsletter&a=1#install '),
  'https://docs.example.test/guide?a=1&b=2'
);
assert.equal(
  canonicalizeUrl('https://docs.example.test/guide/?a=1&b=2'),
  'https://docs.example.test/guide?a=1&b=2'
);
assert.equal(canonicalizeUrl('not a URL'), 'not a URL');
assert.equal(canonicalDomain('https://www.docs.example.test/guide'), 'docs.example.test');

console.log('URL canonicalization tests passed');
