import assert from 'node:assert/strict';
import path from 'node:path';
import {
  isValidSnapshotTimestamp,
  resolveSafeDomainPath,
  resolveSafeSnapshotPath,
} from './storage-paths';

const storagePath = path.join(path.sep, 'tmp', 'docingest-storage');

assert.deepEqual(resolveSafeDomainPath(storagePath, 'Docs.Example.Test'), {
  domain: 'docs.example.test',
  domainPath: path.join(storagePath, 'docs.example.test'),
});
for (const unsafeDomain of ['../outside', 'docs/../../outside', '/tmp/outside', '.', '..', 'docs.example.test/']) {
  assert.equal(resolveSafeDomainPath(storagePath, unsafeDomain), null);
}

assert.equal(isValidSnapshotTimestamp('2026-07-19T06:33:14.000Z'), true);
for (const unsafeTimestamp of ['2026-07-19', '2026-13-19T06:33:14.000Z', '../outside', '2026-07-19T06:33:14Z']) {
  assert.equal(isValidSnapshotTimestamp(unsafeTimestamp), false);
}

const domainPath = path.join(storagePath, 'docs.example.test');
assert.equal(
  resolveSafeSnapshotPath(domainPath, 'documentation_2026-07-19T06:33:14.000Z.md'),
  path.join(domainPath, 'documentation_2026-07-19T06:33:14.000Z.md')
);
assert.equal(resolveSafeSnapshotPath(domainPath, '../../outside.md'), null);

console.log('storage path tests passed');
