import assert from 'node:assert/strict';
import { buildContentIndexReplacementPlan } from './index-replacement';

const replacement = buildContentIndexReplacementPlan('a'.repeat(501));
assert.deepEqual(replacement.chunks.map((chunk) => chunk.length), [500, 1]);
assert.equal(replacement.staleChunkIndexes.length, 100);
assert.equal(replacement.staleChunkIndexes[0], 0);
assert.equal(replacement.staleChunkIndexes[99], 99);

console.log('index replacement tests passed');
