import type { CrawlPageOutcome, SnapshotQuality } from '../types/versioning';
import { canonicalizeUrl } from './url-canonicalization';

export interface SubmittedCrawlPage {
  type?: string;
  url?: string;
  content?: string;
}

const BLOCKED_TITLE_RE = /(just a moment|attention required|one more step|please wait|access denied|checking your browser|verify you are human)/i;
const BLOCKED_CHALLENGE_RE = /(checking your browser|verify you are human|enable javascript|ddos protection|cf-browser-verification|cf-challenge|turnstile|pardon our interruption|access denied|please wait|one more step)/i;
const BLOCKED_CLOUDFLARE_RE = /(cloudflare ray id|performance & security by cloudflare)/i;
const BLOCKED_URL_RE = /(\/cdn-cgi\/|\/cf-challenge\/|\/cf-cgi\/)/i;
const CHECKPOINT_TITLE_RE = /^(vercel security checkpoint|security checkpoint|just a moment|attention required|one more step|checking your browser)$/i;
const ERROR_TITLE_RE = /^(404|404 not found|page not found|not found|error|internal server error|application error)$/i;
const LOGIN_TITLE_RE = /^(sign in|log in|login|authenticate|authentication required)$/i;
const ERROR_CONTENT_RE = /(^|\n)\s*(#\s*)?(404|404 not found|page not found|not found)\s*($|\n)/i;
const CHECKPOINT_CONTENT_RE = /(vercel security checkpoint|checking your browser|verify you are human|cf-challenge|turnstile)/i;
const LOGIN_CONTENT_RE = /(?:sign in|log in) to (?:continue|your account)|authentication required|you must be logged in/i;

function firstMarkdownHeading(content: string): string {
  return content.match(/^#\s+(.+)$/m)?.[1]?.trim() || '';
}

export function assessDocumentationQuality(page: SubmittedCrawlPage): SnapshotQuality {
  const titles = [(page.type || '').trim(), firstMarkdownHeading(page.content || '')].filter(Boolean);
  const content = (page.content || '').trim();

  if (titles.some((title) => CHECKPOINT_TITLE_RE.test(title))) {
    return { status: 'quarantined', reasons: ['checkpoint-or-challenge-title'] };
  }
  if (titles.some((title) => ERROR_TITLE_RE.test(title) || LOGIN_TITLE_RE.test(title))) {
    return { status: 'quarantined', reasons: ['error-or-authentication-title'] };
  }
  if (content.length <= 4000 && ERROR_CONTENT_RE.test(content)) {
    return { status: 'quarantined', reasons: ['error-page-content'] };
  }
  if (content.length <= 4000 && CHECKPOINT_CONTENT_RE.test(content)) {
    return { status: 'quarantined', reasons: ['checkpoint-or-challenge-content'] };
  }
  if (content.length <= 4000 && LOGIN_CONTENT_RE.test(content)) {
    return { status: 'quarantined', reasons: ['error-or-authentication-content'] };
  }
  if (content.length < 500) {
    return { status: 'unknown', reasons: ['content-too-short-for-automatic-approval'] };
  }
  return { status: 'approved', reasons: [] };
}

export function isLikelyBlockedPage(page: SubmittedCrawlPage): boolean {
  const title = (page.type || '').toLowerCase();
  const content = (page.content || '').toLowerCase();
  const url = (page.url || '').toLowerCase();

  if (BLOCKED_TITLE_RE.test(title)) return true;
  if (BLOCKED_URL_RE.test(url)) return true;
  if (content.length < 2000 && BLOCKED_CHALLENGE_RE.test(content)) return true;
  if (content.length < 2000 && content.includes('cloudflare') && BLOCKED_CLOUDFLARE_RE.test(content)) return true;
  return false;
}

export function classifySubmittedPage(page: SubmittedCrawlPage): CrawlPageOutcome {
  const url = page.url || '';
  if (!url) {
    return { url: '', status: 'rejected', reason: 'submitted-page-missing-url' };
  }
  if (isLikelyBlockedPage(page)) {
    return { url, status: 'blocked', reason: 'server-detected-blocked-content' };
  }
  if (!page.content || page.content === 'No content available' || !page.content.trim()) {
    return { url, status: 'empty', reason: 'server-detected-empty-content' };
  }
  const quality = assessDocumentationQuality(page);
  if (quality.status === 'quarantined') {
    return { url, status: 'rejected', reason: quality.reasons[0] };
  }
  return { url, status: 'valid' };
}

export function reconcileCrawlOutcomes<T extends SubmittedCrawlPage>(
  providerOutcomes: CrawlPageOutcome[],
  pages: T[]
): { outcomes: CrawlPageOutcome[]; acceptedPages: T[]; evidencePages: T[] } {
  const outcomes = providerOutcomes.map((outcome) => ({
    ...outcome,
    canonicalUrl: canonicalizeUrl(outcome.canonicalUrl || outcome.url),
  }));
  const outcomeIndexesByCanonicalUrl = new Map<string, number[]>();
  outcomes.forEach((outcome, index) => {
    if (!outcome.canonicalUrl) return;
    const indexes = outcomeIndexesByCanonicalUrl.get(outcome.canonicalUrl) || [];
    indexes.push(index);
    outcomeIndexesByCanonicalUrl.set(outcome.canonicalUrl, indexes);
  });
  const consumedOutcomeIndexes = new Set<number>();
  const acceptedCanonicalUrls = new Set<string>();
  const acceptedPages: T[] = [];
  const evidencePages: T[] = [];

  for (const page of pages) {
    const canonicalUrl = canonicalizeUrl(page.url);
    const serverOutcome = { ...classifySubmittedPage(page), canonicalUrl };
    const candidates = outcomeIndexesByCanonicalUrl.get(canonicalUrl) || [];
    const matchingIndex = candidates.find((index) => !consumedOutcomeIndexes.has(index));
    let finalOutcome = serverOutcome;
    let finalOutcomeIndex: number;

    if (matchingIndex !== undefined) {
      consumedOutcomeIndexes.add(matchingIndex);
      const providerOutcome = outcomes[matchingIndex];
      if (serverOutcome.status === 'blocked' || serverOutcome.status === 'empty' || serverOutcome.status === 'rejected') {
        finalOutcome = {
          ...providerOutcome,
          ...serverOutcome,
          canonicalUrl: providerOutcome.canonicalUrl,
        };
      } else if (providerOutcome.status !== 'valid') {
        finalOutcome = providerOutcome;
      } else {
        finalOutcome = { ...providerOutcome, ...serverOutcome };
      }
      outcomes[matchingIndex] = finalOutcome;
      finalOutcomeIndex = matchingIndex;
    } else {
      outcomes.push(finalOutcome);
      finalOutcomeIndex = outcomes.length - 1;
      consumedOutcomeIndexes.add(finalOutcomeIndex);
    }

    if (finalOutcome.status === 'valid' && acceptedCanonicalUrls.has(canonicalUrl)) {
      finalOutcome = {
        ...finalOutcome,
        status: 'duplicate',
        reason: 'server-duplicate-canonical-url',
      };
      outcomes[finalOutcomeIndex] = finalOutcome;
    }

    if (finalOutcome.status === 'valid') {
      acceptedCanonicalUrls.add(canonicalUrl);
      acceptedPages.push(page);
    } else if ((finalOutcome.status === 'blocked' || finalOutcome.status === 'rejected') && page.content?.trim()) {
      evidencePages.push(page);
    }
  }

  outcomes.forEach((outcome, index) => {
    if (outcome.status === 'valid' && !consumedOutcomeIndexes.has(index)) {
      outcomes[index] = {
        ...outcome,
        status: 'rejected',
        reason: 'provider-page-not-submitted-to-save',
      };
    }
  });

  return { outcomes, acceptedPages, evidencePages };
}

export function failedPageLabels(outcomes: CrawlPageOutcome[]): string[] {
  return outcomes
    .filter((outcome) => outcome.status !== 'valid')
    .map((outcome) => outcome.reason ? `${outcome.url} (${outcome.reason})` : outcome.url)
    .filter(Boolean);
}
