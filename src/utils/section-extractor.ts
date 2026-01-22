/**
 * Section extractor utility for parsing markdown content into navigable sections
 */

export interface Section {
  id: string;
  title: string;
  level: number;
  content: string; // From heading to next same/higher level heading
  startIndex: number;
  endIndex: number;
}

/**
 * Creates a URL-friendly ID from heading text
 */
export function createHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Extract all sections from markdown content
 * Each section includes the heading and all content until the next heading of same or higher level
 */
export function extractSections(content: string): Section[] {
  const sections: Section[] = [];
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const matches: { level: number; title: string; index: number }[] = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const title = match[2].trim();
    // Skip "Table of Contents" headings
    if (title.toLowerCase() === 'table of contents') {
      continue;
    }
    matches.push({
      level: match[1].length,
      title,
      index: match.index
    });
  }

  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];

    // Find where this section ends
    // A section ends at the next heading of same or higher level (smaller number)
    let endIndex = content.length;

    for (let j = i + 1; j < matches.length; j++) {
      if (matches[j].level <= current.level) {
        endIndex = matches[j].index;
        break;
      }
    }

    // If no higher/same level heading found, extend to end of content
    if (next && endIndex === content.length) {
      endIndex = content.length;
    }

    const sectionContent = content.slice(current.index, endIndex).trim();

    sections.push({
      id: createHeadingId(current.title),
      title: current.title,
      level: current.level,
      content: sectionContent,
      startIndex: current.index,
      endIndex
    });
  }

  return sections;
}

/**
 * Get a section by its ID
 */
export function getSectionById(sections: Section[], id: string): Section | null {
  return sections.find(section => section.id === id) || null;
}

/**
 * Get section content including all nested subsections
 */
export function getSectionWithSubsections(content: string, sectionId: string): string | null {
  const sections = extractSections(content);
  const section = getSectionById(sections, sectionId);

  if (!section) {
    return null;
  }

  return section.content;
}

/**
 * Find sections that match a search query
 */
export function searchSections(sections: Section[], query: string): Section[] {
  if (!query.trim()) {
    return [];
  }

  const lowerQuery = query.toLowerCase();
  return sections.filter(section =>
    section.title.toLowerCase().includes(lowerQuery) ||
    section.content.toLowerCase().includes(lowerQuery)
  );
}
