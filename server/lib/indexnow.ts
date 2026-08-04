export interface IndexNowConfig {
  key: string;
  origin: string;
  host: string;
  keyLocation: string;
}

export interface IndexNowSubmissionResult {
  configured: boolean;
  submitted: boolean;
  status?: number;
  accepted?: boolean;
  urlCount: number;
  keyLocation?: string;
  error?: string;
}

type FetchLike = typeof fetch;

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export function normalizeIndexNowKey(key: string | undefined): string | null {
  const value = key?.trim();
  if (!value) return null;
  return /^[A-Za-z0-9-]{8,128}$/.test(value) ? value : null;
}

export function getIndexNowConfig(baseUrl: string, key: string | undefined): IndexNowConfig | null {
  const normalizedKey = normalizeIndexNowKey(key);
  if (!normalizedKey) return null;

  const origin = baseUrl.replace(/\/+$/, '');
  const { hostname } = new URL(origin);

  return {
    key: normalizedKey,
    origin,
    host: hostname,
    keyLocation: `${origin}/${normalizedKey}.txt`,
  };
}

export function isIndexNowKeyFileRequest(keyFile: string, config: IndexNowConfig | null): boolean {
  return Boolean(config && keyFile === `${config.key}.txt`);
}

export function buildIndexNowUrlList(urls: string[], config: IndexNowConfig): string[] {
  const seen = new Set<string>();
  const filtered: string[] = [];

  for (const rawUrl of urls) {
    try {
      const url = new URL(rawUrl);
      if (url.hostname !== config.host) continue;
      const normalized = url.toString();
      if (seen.has(normalized)) continue;
      seen.add(normalized);
      filtered.push(normalized);
    } catch {
      // Ignore invalid URLs; the caller gets a count of what was actually submitted.
    }
  }

  return filtered.slice(0, 10_000);
}

export async function submitIndexNowUrls(
  urls: string[],
  config: IndexNowConfig | null,
  fetchImpl: FetchLike = fetch,
): Promise<IndexNowSubmissionResult> {
  if (!config) {
    return {
      configured: false,
      submitted: false,
      urlCount: 0,
      error: 'INDEXNOW_KEY is not configured or is invalid',
    };
  }

  const urlList = buildIndexNowUrlList(urls, config);
  if (urlList.length === 0) {
    return {
      configured: true,
      submitted: false,
      urlCount: 0,
      keyLocation: config.keyLocation,
      error: 'No submit-ready URLs matched the configured host',
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    const response = await fetchImpl(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: config.host,
        key: config.key,
        urlList,
      }),
      signal: controller.signal,
    });

    return {
      configured: true,
      submitted: true,
      status: response.status,
      accepted: response.status === 200 || response.status === 202,
      urlCount: urlList.length,
      keyLocation: config.keyLocation,
      ...(response.ok ? {} : { error: `IndexNow returned HTTP ${response.status}` }),
    };
  } catch (error) {
    return {
      configured: true,
      submitted: false,
      urlCount: urlList.length,
      keyLocation: config.keyLocation,
      error: error instanceof Error ? error.message : 'IndexNow request failed',
    };
  } finally {
    clearTimeout(timeout);
  }
}
