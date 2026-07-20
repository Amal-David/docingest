import type { CrawlPageOutcome, CrawlProviderTotals } from '../types/versioning';

export interface CrawlStartRequest {
  url: string;
  limit?: number;
  maxDepth?: number;
  includePaths?: string[];
  excludePaths?: string[];
  allowBackwardLinks?: boolean;
  ignoreQueryParameters?: boolean;
  scrapeOptions?: {
    formats?: string[];
    onlyMainContent?: boolean;
    removeBase64Images?: boolean;
    blockAds?: boolean;
    timeout?: number;
    waitFor?: number;
    maxAge?: number;
  };
}

export interface CrawlPage {
  markdown: string;
  metadata: {
    sourceURL: string;
    title: string;
  };
}

export interface CrawlStatusResponse {
  status: 'scraping' | 'completed' | 'failed';
  completed: number;
  total: number;
  data: CrawlPage[];
  outcomes: CrawlPageOutcome[];
  providerTotals: CrawlProviderTotals;
  error?: string;
}

const EXPLICIT_FIRECRAWL_API_URL = process.env.FIRECRAWL_API_URL || process.env.REACT_APP_FIRECRAWL_API_URL || '';
const FIRECRAWL_API_URL = (
  EXPLICIT_FIRECRAWL_API_URL ||
  'https://api.firecrawl.dev/v1'
).replace(/\/$/, '');
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY || '';

function firecrawlHeaders() {
  return {
    'Content-Type': 'application/json',
    ...(FIRECRAWL_API_KEY ? { Authorization: `Bearer ${FIRECRAWL_API_KEY}` } : {}),
  };
}

export function isFirecrawlConfigured(): boolean {
  return Boolean(EXPLICIT_FIRECRAWL_API_URL || FIRECRAWL_API_KEY);
}

export function isValidFirecrawlCrawlId(id: string): boolean {
  return /^[A-Za-z0-9_-]{1,160}$/.test(id);
}

function normalizeStatus(status: string | undefined): 'scraping' | 'completed' | 'failed' {
  if (status === 'completed' || status === 'complete' || status === 'done') {
    return 'completed';
  }

  if (status === 'failed' || status === 'error' || status === 'cancelled') {
    return 'failed';
  }

  return 'scraping';
}

function normalizePage(page: any): CrawlPage {
  return {
    markdown: page.markdown || page.content || '',
    metadata: {
      sourceURL: page.metadata?.sourceURL || page.metadata?.url || page.url || '',
      title: page.metadata?.title || page.title || '',
    },
  };
}

export function normalizeFirecrawlCrawlStatus(data: any): CrawlStatusResponse {
  const rawPages: any[] = Array.isArray(data.data)
    ? data.data
    : Array.isArray(data.results)
      ? data.results
      : [];
  const status = normalizeStatus(data.status);
  const reportedTotal = Number(data.total || data.totalPages || data.totalCount);
  const discoveredIsExact = Number.isFinite(reportedTotal) && reportedTotal > 0;
  const providerTotal = discoveredIsExact
    ? Math.max(reportedTotal, rawPages.length)
    : Math.max(rawPages.length, 1);
  const providerCompleted = Number(data.completed);
  const completed = Number.isFinite(providerCompleted) && providerCompleted >= 0
    ? providerCompleted
    : rawPages.length;

  if (status !== 'completed') {
    return {
      status,
      completed,
      total: providerTotal,
      data: [],
      outcomes: [],
      providerTotals: { discovered: providerTotal, returned: rawPages.length, discoveredIsExact },
      error: data.error || data.message,
    };
  }

  const seenUrls = new Set<string>();
  const pages: CrawlPage[] = [];
  const outcomes: CrawlPageOutcome[] = [];

  for (const rawPage of rawPages) {
    const page = normalizePage(rawPage);
    const pageUrl = page.metadata.sourceURL;
    if (!pageUrl) {
      outcomes.push({ url: '', status: 'rejected', reason: 'provider-result-missing-url' });
      continue;
    }

    const canonicalUrl = pageUrl.split('?')[0].split('#')[0];
    if (seenUrls.has(canonicalUrl)) {
      outcomes.push({ url: pageUrl, canonicalUrl, status: 'duplicate', reason: 'duplicate-provider-url' });
      continue;
    }
    seenUrls.add(canonicalUrl);

    if (!page.markdown.trim()) {
      outcomes.push({ url: pageUrl, canonicalUrl, status: 'empty', reason: 'provider-result-had-no-extractable-content' });
      continue;
    }

    pages.push(page);
    outcomes.push({ url: pageUrl, canonicalUrl, status: 'valid' });
  }

  return {
    status,
    completed,
    total: providerTotal,
    data: pages,
    outcomes,
    providerTotals: { discovered: providerTotal, returned: rawPages.length, discoveredIsExact },
    error: data.error || data.message,
  };
}

export async function startFirecrawlCrawl(req: CrawlStartRequest): Promise<{ success: boolean; id?: string; error?: string }> {
  const body = {
    url: req.url,
    limit: req.limit,
    maxDepth: req.maxDepth,
    includePaths: req.includePaths,
    excludePaths: req.excludePaths,
    allowBackwardLinks: req.allowBackwardLinks,
    ignoreQueryParameters: req.ignoreQueryParameters,
    scrapeOptions: req.scrapeOptions,
  };

  try {
    const response = await fetch(`${FIRECRAWL_API_URL}/crawl`, {
      method: 'POST',
      headers: firecrawlHeaders(),
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        error: data.error || data.message || `Firecrawl API error: ${response.status}`,
      };
    }

    const id = data.id || data.jobId || data.crawlId;
    if (!id) {
      return { success: false, error: 'Firecrawl did not return a crawl ID' };
    }

    return { success: true, id };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to reach Firecrawl API' };
  }
}

export async function getFirecrawlCrawlStatus(crawlId: string): Promise<CrawlStatusResponse> {
  try {
    const response = await fetch(`${FIRECRAWL_API_URL}/crawl/${crawlId}`, {
      method: 'GET',
      headers: firecrawlHeaders(),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        status: 'failed',
        completed: 0,
        total: 0,
        data: [],
        outcomes: [],
        providerTotals: { discovered: 0, returned: 0, discoveredIsExact: false },
        error: data.error || data.message || `Firecrawl API error: ${response.status}`,
      };
    }

    return normalizeFirecrawlCrawlStatus(data);
  } catch (err: any) {
    return {
      status: 'failed',
      completed: 0,
      total: 0,
      data: [],
      outcomes: [],
      providerTotals: { discovered: 0, returned: 0, discoveredIsExact: false },
      error: err.message || 'Failed to reach Firecrawl API',
    };
  }
}
