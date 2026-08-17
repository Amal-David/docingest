import assert from 'node:assert/strict';
import {
  generateTableOfContents,
  mergeMarkdownContent,
  splitMergedMarkdown,
} from './markdown-merge';

function merge(pages: Array<{ type: string; content: string }>): string {
  return generateTableOfContents(pages) + mergeMarkdownContent(pages);
}

function structureOf(pages: Array<{ type: string }>): Array<{ type: string }> {
  return pages.map((page) => ({ type: page.type }));
}

// A snapshot must round-trip, because the backfill re-derives per-page quality
// from the merged file. Pages recovered with the wrong boundaries would produce
// a confident but wrong verdict on stored documentation.
const ordinary = [
  { type: 'Introduction', content: 'Getting started with the thing.' },
  { type: 'Guide', content: `Details.\n\n${'Useful documentation. '.repeat(30)}` },
  { type: 'Reference', content: '## API\n\n- `doThing()`' },
];
assert.deepEqual(splitMergedMarkdown(merge(ordinary), structureOf(ordinary)), ordinary);

// Horizontal rules inside a page use the same token as the section separator.
const withHorizontalRules = [
  { type: 'Changelog', content: 'v2\n\n---\n\nv1' },
  { type: 'Notes', content: 'Trailing rule.\n\n---\n\n' },
];
assert.deepEqual(
  splitMergedMarkdown(merge(withHorizontalRules), structureOf(withHorizontalRules)),
  withHorizontalRules
);

// A page that quotes the next page's heading after a rule is the one case the
// scan cannot resolve. It must be refused, never guessed at.
const ambiguous = [
  { type: 'Overview', content: 'See below.\n\n---\n\n# Details\n\nQuoted, not a real section.' },
  { type: 'Details', content: 'The real section.' },
];
assert.equal(splitMergedMarkdown(merge(ambiguous), structureOf(ambiguous)), null);

// Empty labels take the merge fallback in the body and the index fallback in
// the table of contents. The recovered page keeps the label as stored, so the
// snapshot re-merges byte for byte.
const untitled = [
  { type: '', content: 'No label on this page.' },
  { type: 'Named', content: 'Labelled page.' },
];
const untitledMerged = merge(untitled);
assert.ok(untitledMerged.includes('- [Section 1](#section-1)'));
assert.ok(untitledMerged.includes('# Untitled Section\n\n'));
assert.deepEqual(splitMergedMarkdown(untitledMerged, structureOf(untitled)), untitled);

// Repeated labels are resolved by position, not by search.
const repeated = [
  { type: 'Page', content: 'first' },
  { type: 'Page', content: 'second' },
  { type: 'Page', content: 'third' },
];
assert.deepEqual(splitMergedMarkdown(merge(repeated), structureOf(repeated)), repeated);

// A structure that no longer describes its markdown is not reasoned about.
assert.equal(splitMergedMarkdown(merge(ordinary), [{ type: 'Introduction' }]), null);
assert.equal(
  splitMergedMarkdown(merge(ordinary), [...structureOf(ordinary), { type: 'Extra' }]),
  null
);
assert.equal(splitMergedMarkdown('# Not a snapshot\n\nfree text', [{ type: 'Guide' }]), null);
assert.equal(splitMergedMarkdown('', []), null);

// Legacy files predate the merge format and must not be silently accepted.
assert.equal(
  splitMergedMarkdown(mergeMarkdownContent(ordinary), structureOf(ordinary)),
  null
);

console.log('markdown merge tests passed');
