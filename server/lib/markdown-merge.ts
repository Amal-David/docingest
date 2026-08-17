/**
 * The on-disk layout of a merged documentation snapshot.
 *
 * `/api/docs/save` writes a table of contents followed by one section per
 * accepted page. Nothing else transforms the file, so the merge is reversible:
 * given the page labels a snapshot recorded in its `structure`, the original
 * per-page content can be recovered exactly.
 *
 * Merge and split live together so the two cannot drift. A split that silently
 * disagreed with the merge would hand callers plausible but wrong page
 * boundaries, so `splitMergedMarkdown` re-merges its own result and refuses to
 * return anything that does not reproduce the input byte for byte.
 */

export interface MergeablePage {
  type?: string;
  content?: string;
}

const SECTION_SEPARATOR = '\n\n---\n\n';
const UNTITLED_SECTION = 'Untitled Section';

export function generateTableOfContents(pages: MergeablePage[]): string {
  let toc = '# Table of Contents\n\n';
  pages.forEach((page, index) => {
    const title = page.type || `Section ${index + 1}`;
    const anchor = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    toc += `- [${title}](#${anchor})\n`;
  });
  return toc + '\n---\n\n';
}

export function mergeMarkdownContent(pages: MergeablePage[]): string {
  let content = '';
  pages.forEach((page) => {
    const title = page.type || UNTITLED_SECTION;
    content += `# ${title}\n\n${page.content}${SECTION_SEPARATOR}`;
  });
  return content;
}

/**
 * Recover the per-page inputs a merged snapshot was built from.
 *
 * `structure` supplies the page labels in their original order, which is what
 * makes the boundaries unambiguous. Returns `null` when the file does not
 * reproduce exactly from the recovered pages — a hand-edited file, a snapshot
 * written by a different merge format, or a `structure` that no longer matches
 * its markdown. Callers must treat `null` as "cannot be reasoned about" rather
 * than falling back to a guess.
 */
export function splitMergedMarkdown(
  merged: string,
  structure: Array<{ type: string }>
): MergeablePage[] | null {
  const toc = generateTableOfContents(structure);
  if (!merged.startsWith(toc)) return null;

  const body = merged.slice(toc.length);
  const pages: MergeablePage[] = [];
  let cursor = 0;

  for (let index = 0; index < structure.length; index++) {
    const heading = `# ${structure[index].type || UNTITLED_SECTION}\n\n`;
    if (!body.startsWith(heading, cursor)) return null;
    const contentStart = cursor + heading.length;

    let contentEnd: number;
    if (index + 1 < structure.length) {
      const nextHeading = `# ${structure[index + 1].type || UNTITLED_SECTION}\n\n`;
      const boundary = body.indexOf(`${SECTION_SEPARATOR}${nextHeading}`, contentStart);
      if (boundary === -1) return null;
      contentEnd = boundary;
      cursor = boundary + SECTION_SEPARATOR.length;
    } else {
      if (!body.endsWith(SECTION_SEPARATOR)) return null;
      contentEnd = body.length - SECTION_SEPARATOR.length;
      cursor = body.length;
    }
    if (contentEnd < contentStart) return null;

    pages.push({ type: structure[index].type, content: body.slice(contentStart, contentEnd) });
  }

  if (cursor !== body.length) return null;
  if (generateTableOfContents(pages) + mergeMarkdownContent(pages) !== merged) return null;

  // Re-merging is not sufficient on its own: when a page body quotes a section
  // separator followed by its own heading, a second boundary placement produces
  // the identical file, so both parses re-merge cleanly and the format cannot
  // say which one is real. Scanning takes the first boundary, so the giveaway
  // is a later repeat of the same heading inside the page it opened. Refuse
  // rather than return one of two equally valid readings.
  for (let index = 1; index < pages.length; index++) {
    const ownHeading = `${SECTION_SEPARATOR}# ${structure[index].type || UNTITLED_SECTION}\n\n`;
    if ((pages[index].content || '').includes(ownHeading)) return null;
  }

  return pages;
}
