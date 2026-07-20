import type { DocumentationSnapshot } from '../types/versioning';
import { canonicalizeUrl } from './url-canonicalization';

export interface ApprovedDocumentForSearch {
  domain: string;
  snapshot: DocumentationSnapshot;
  content: string;
}

export interface SectionSearchResult {
  domain: string;
  canonicalUrl: string;
  pageUrl: string;
  sectionId: string;
  sectionTitle: string;
  snapshotId: string;
  contentHash: string;
  upstreamVersion?: string;
  freshness: string;
  qualityStatus: 'approved';
  qualityReasons: string[];
  content: string;
  score: number;
}

interface MarkdownSection {
  title: string;
  anchor: string;
  content: string;
  pageUrl?: string;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'overview';
}

function extractTerms(query: string): string[] {
  return [...new Set(query.toLowerCase().match(/[a-z0-9][a-z0-9_-]*/g) || [])];
}

function countOccurrences(value: string, term: string): number {
  return value.split(term).length - 1;
}

function boundedContent(content: string, maxChars: number): string {
  if (content.length <= maxChars) return content;
  const trimmed = content.slice(0, maxChars);
  const boundary = Math.max(trimmed.lastIndexOf('\n\n'), trimmed.lastIndexOf('. '));
  return `${trimmed.slice(0, boundary > maxChars * 0.6 ? boundary : maxChars).trimEnd()}\n\n[Section truncated]`;
}

export function extractMarkdownSections(content: string): MarkdownSection[] {
  const lines = content.split('\n');
  const sections: MarkdownSection[] = [];
  let title = 'Overview';
  let anchor = 'overview';
  let current: string[] = [];
  let pageUrl: string | undefined;

  const commit = () => {
    const sectionContent = current.join('\n').trim();
    if (!sectionContent) return;
    const sourceMatch = sectionContent.match(/^URL:\s*(\S+)/m);
    sections.push({
      title,
      anchor,
      content: sectionContent,
      pageUrl: sourceMatch?.[1] || pageUrl,
    });
  };

  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      commit();
      title = heading[2].trim();
      anchor = slugify(title);
      current = [line];
      pageUrl = undefined;
      continue;
    }
    const sourceMatch = line.match(/^URL:\s*(\S+)/);
    if (sourceMatch) pageUrl = sourceMatch[1];
    current.push(line);
  }
  commit();
  return sections;
}

/**
 * Deterministic lexical ranking. Body matches intentionally outweigh heading
 * and domain-only matches; no semantic/vector relevance is claimed here.
 */
export function searchApprovedSections(
  documents: ApprovedDocumentForSearch[],
  query: string,
  limit = 10,
  maxChars = 1600
): SectionSearchResult[] {
  const terms = extractTerms(query);
  if (terms.length === 0) return [];

  const results: SectionSearchResult[] = [];
  for (const document of documents) {
    if (document.snapshot.quality.status !== 'approved') continue;
    if (!document.snapshot.id || !document.snapshot.contentHash || !document.snapshot.canonicalSourceUrl) continue;

    for (const [index, section] of extractMarkdownSections(document.content).entries()) {
      const title = section.title.toLowerCase();
      const body = section.content.replace(/^#{1,6}\s+.*(?:\n|$)/, '').toLowerCase();
      const domain = document.domain.toLowerCase();
      const bodyMatches = terms.reduce((total, term) => total + countOccurrences(body, term), 0);
      const titleMatches = terms.reduce((total, term) => total + countOccurrences(title, term), 0);
      const domainMatches = terms.reduce((total, term) => total + countOccurrences(domain, term), 0);
      if (bodyMatches + titleMatches + domainMatches === 0) continue;

      const canonicalUrl = canonicalizeUrl(section.pageUrl || document.snapshot.canonicalSourceUrl);
      results.push({
        domain: document.domain,
        canonicalUrl,
        pageUrl: section.pageUrl || document.snapshot.sourceUrl,
        sectionId: `${document.snapshot.id}:${index}:${section.anchor}`,
        sectionTitle: section.title,
        snapshotId: document.snapshot.id,
        contentHash: document.snapshot.contentHash,
        upstreamVersion: document.snapshot.upstreamVersion,
        freshness: document.snapshot.capturedAt,
        qualityStatus: 'approved',
        qualityReasons: [...document.snapshot.quality.reasons],
        content: boundedContent(section.content, maxChars),
        score: bodyMatches * 100 + titleMatches * 10 + domainMatches,
      });
    }
  }

  return results
    .sort((left, right) => right.score - left.score
      || right.freshness.localeCompare(left.freshness)
      || left.sectionId.localeCompare(right.sectionId))
    .slice(0, Math.max(1, Math.min(limit, 50)));
}
