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
    console.log(`[firecrawl] POST /crawl HTTP ${response.status}:`, JSON.stringify(data).slice(0, 300));

    if (!response.ok) {
      return {
        success: false,
        error: data.error || data.message || `Firecrawl API error: ${response.status}`,
      };
    }

    const id = data.id || data.jobId || data.crawlId;
    if (!id) {
      console.error('[firecrawl] No crawl ID in response:', JSON.stringify(data));
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
    console.log(`[firecrawl] GET /crawl/${crawlId} HTTP ${response.status}: status=${data.status} completed=${data.completed} total=${data.total} pages=${(data.data || data.results || []).length}${data.error ? ' error=' + data.error : ''}`);

    if (!response.ok) {
      return {
        status: 'failed',
        completed: 0,
        total: 0,
        data: [],
        error: data.error || data.message || `Firecrawl API error: ${response.status}`,
      };
    }

    const rawPages = data.data || data.results || [];
    const status = normalizeStatus(data.status);
    if (status === 'completed') {
      console.log(`[firecrawl] Crawl ${crawlId} completed with ${rawPages.length} pages`);
    }

    return {
      status,
      completed: Number(data.completed) || rawPages.length,
      total: Number(data.total) || Math.max(rawPages.length, 1),
      data: rawPages.map(normalizePage),
      error: data.error || data.message,
    };
  } catch (err: any) {
    return {
      status: 'failed',
      completed: 0,
      total: 0,
      data: [],
      error: err.message || 'Failed to reach Firecrawl API',
    };
  }
}
