import Redis from 'ioredis';

// Redis connection configuration
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6380', 10);  // DocIngest uses 6380
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || undefined;

// Create Redis client with retry strategy
const redis = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
  retryStrategy: (times: number) => {
    if (times > 3) {
      console.error('[Redis] Max retries reached, giving up');
      return null; // Stop retrying
    }
    const delay = Math.min(times * 200, 2000);
    console.log(`[Redis] Retrying connection in ${delay}ms...`);
    return delay;
  },
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
  lazyConnect: true, // Don't connect immediately
});

// Connection state
let isConnected = false;

redis.on('connect', () => {
  console.log('[Redis] Connecting...');
});

redis.on('ready', () => {
  isConnected = true;
  console.log('[Redis] Connected and ready');
});

redis.on('error', (err) => {
  console.error('[Redis] Error:', err.message);
});

redis.on('close', () => {
  isConnected = false;
  console.log('[Redis] Connection closed');
});

// Redis key prefixes
export const KEYS = {
  AUTOCOMPLETE_DOMAINS: 'autocomplete:domains',
  DOMAIN_META: (domain: string) => `domain:${domain}`,
  CONTENT_CHUNK: (domain: string, index: number) => `content:${domain}:${index}`,
  SEARCH_CACHE: (query: string, page: number) => `cache:search:${query}:${page}`,
  POPULAR_SEARCHES: 'popular:searches',
  DOC_CACHE: (path: string) => `doc:cache:${path}`,
  DOC_ETAG: (path: string) => `doc:etag:${path}`,
} as const;

// Cache TTL values (in seconds)
export const TTL = {
  SEARCH_CACHE: 300, // 5 minutes
  CONTENT_CACHE: 3600, // 1 hour
  DOC_CACHE: 3600, // 1 hour for full doc content
} as const;

/**
 * Initialize Redis connection
 */
export async function initRedis(): Promise<boolean> {
  try {
    await redis.connect();
    await redis.ping();
    console.log('[Redis] Ping successful');
    return true;
  } catch (err) {
    console.error('[Redis] Failed to initialize:', err);
    return false;
  }
}

/**
 * Check if Redis is available
 */
export function isRedisAvailable(): boolean {
  return isConnected;
}

/**
 * Graceful shutdown
 */
export async function closeRedis(): Promise<void> {
  try {
    await redis.quit();
    console.log('[Redis] Connection closed gracefully');
  } catch (err) {
    console.error('[Redis] Error closing connection:', err);
  }
}

// Domain metadata interface
export interface DomainMeta {
  domain: string;
  url: string;
  title: string;
  snippet: string;
  lastScraped: string;
  totalPages: number;
  successfulPages: number;
}

/**
 * Add a domain to the autocomplete index
 */
export async function indexDomain(meta: DomainMeta): Promise<void> {
  if (!isConnected) {
    console.warn('[Redis] Not connected, skipping indexDomain');
    return;
  }

  const pipeline = redis.pipeline();

  // Add to sorted set for autocomplete (score 0 for lexicographic ordering)
  pipeline.zadd(KEYS.AUTOCOMPLETE_DOMAINS, 0, meta.domain.toLowerCase());

  // Store domain metadata as hash
  pipeline.hset(KEYS.DOMAIN_META(meta.domain), {
    domain: meta.domain,
    url: meta.url,
    title: meta.title || meta.domain,
    snippet: meta.snippet.slice(0, 500), // Limit snippet size
    lastScraped: meta.lastScraped,
    totalPages: meta.totalPages.toString(),
    successfulPages: meta.successfulPages.toString(),
  });

  await pipeline.exec();
}

/**
 * Index content chunks for full-text search
 */
export async function indexContentChunks(domain: string, content: string): Promise<void> {
  if (!isConnected) {
    console.warn('[Redis] Not connected, skipping indexContentChunks');
    return;
  }

  // Split content into chunks of ~500 chars
  const CHUNK_SIZE = 500;
  const chunks: string[] = [];

  for (let i = 0; i < content.length; i += CHUNK_SIZE) {
    chunks.push(content.slice(i, i + CHUNK_SIZE));
  }

  const pipeline = redis.pipeline();

  // Store each chunk
  chunks.slice(0, 100).forEach((chunk, index) => { // Limit to 100 chunks per domain
    pipeline.hset(KEYS.CONTENT_CHUNK(domain, index), {
      text: chunk,
      index: index.toString(),
    });
    pipeline.expire(KEYS.CONTENT_CHUNK(domain, index), TTL.CONTENT_CACHE);
  });

  await pipeline.exec();
}

/**
 * Autocomplete search - find domains matching prefix
 */
export async function autocompleteSearch(
  query: string,
  limit: number = 10
): Promise<DomainMeta[]> {
  if (!isConnected) {
    console.warn('[Redis] Not connected, returning empty autocomplete');
    return [];
  }

  const queryLower = query.toLowerCase();
  const results: DomainMeta[] = [];

  try {
    // Use ZRANGEBYLEX for prefix matching
    // Find all domains that start with the query
    const matches = await redis.zrangebylex(
      KEYS.AUTOCOMPLETE_DOMAINS,
      `[${queryLower}`,
      `[${queryLower}\xff`,
      'LIMIT',
      0,
      limit * 2 // Get more to account for filtering
    );

    // Fetch metadata for each match
    for (const domain of matches.slice(0, limit)) {
      const meta = await redis.hgetall(KEYS.DOMAIN_META(domain));
      if (meta && meta.domain) {
        results.push({
          domain: meta.domain,
          url: meta.url || '',
          title: meta.title || meta.domain,
          snippet: meta.snippet || '',
          lastScraped: meta.lastScraped || '',
          totalPages: parseInt(meta.totalPages || '0', 10),
          successfulPages: parseInt(meta.successfulPages || '0', 10),
        });
      }
    }

    return results;
  } catch (err) {
    console.error('[Redis] Autocomplete search error:', err);
    return [];
  }
}

/**
 * Full-text search across domains and content
 */
export async function fullTextSearch(
  query: string,
  limit: number = 10
): Promise<{ domains: DomainMeta[]; timing: number }> {
  const startTime = Date.now();

  if (!isConnected) {
    return { domains: [], timing: Date.now() - startTime };
  }

  const queryLower = query.toLowerCase();
  const results: DomainMeta[] = [];
  const seen = new Set<string>();

  try {
    // Check cache first
    const cacheKey = KEYS.SEARCH_CACHE(queryLower, 1);
    const cached = await redis.get(cacheKey);
    if (cached) {
      return {
        domains: JSON.parse(cached),
        timing: Date.now() - startTime,
      };
    }

    // 1. Exact domain matches (highest priority)
    const exactMatches = await redis.zrangebylex(
      KEYS.AUTOCOMPLETE_DOMAINS,
      `[${queryLower}`,
      `[${queryLower}\xff`,
      'LIMIT',
      0,
      limit
    );

    for (const domain of exactMatches) {
      if (!seen.has(domain)) {
        const meta = await redis.hgetall(KEYS.DOMAIN_META(domain));
        if (meta && meta.domain) {
          results.push({
            domain: meta.domain,
            url: meta.url || '',
            title: meta.title || meta.domain,
            snippet: meta.snippet || '',
            lastScraped: meta.lastScraped || '',
            totalPages: parseInt(meta.totalPages || '0', 10),
            successfulPages: parseInt(meta.successfulPages || '0', 10),
          });
          seen.add(domain);
        }
      }
    }

    // 2. Search in domain names, titles, and snippets
    if (results.length < limit) {
      const allDomains = await redis.zrange(KEYS.AUTOCOMPLETE_DOMAINS, 0, -1);

      for (const domain of allDomains) {
        if (results.length >= limit) break;
        if (seen.has(domain)) continue;

        const meta = await redis.hgetall(KEYS.DOMAIN_META(domain));
        if (meta && meta.domain) {
          // Search in domain name, title, and snippet
          const searchText = `${domain} ${meta.title || ''} ${meta.snippet || ''}`.toLowerCase();

          if (searchText.includes(queryLower)) {
            results.push({
              domain: meta.domain,
              url: meta.url || '',
              title: meta.title || meta.domain,
              snippet: meta.snippet || '',
              lastScraped: meta.lastScraped || '',
              totalPages: parseInt(meta.totalPages || '0', 10),
              successfulPages: parseInt(meta.successfulPages || '0', 10),
            });
            seen.add(domain);
          }
        }
      }
    }

    // Cache the results
    if (results.length > 0) {
      await redis.setex(cacheKey, TTL.SEARCH_CACHE, JSON.stringify(results));
    }

    return {
      domains: results,
      timing: Date.now() - startTime,
    };
  } catch (err) {
    console.error('[Redis] Full-text search error:', err);
    return { domains: [], timing: Date.now() - startTime };
  }
}

/**
 * Get domain metadata
 */
export async function getDomainMeta(domain: string): Promise<DomainMeta | null> {
  if (!isConnected) {
    return null;
  }

  try {
    const meta = await redis.hgetall(KEYS.DOMAIN_META(domain));
    if (!meta || !meta.domain) {
      return null;
    }

    return {
      domain: meta.domain,
      url: meta.url || '',
      title: meta.title || meta.domain,
      snippet: meta.snippet || '',
      lastScraped: meta.lastScraped || '',
      totalPages: parseInt(meta.totalPages || '0', 10),
      successfulPages: parseInt(meta.successfulPages || '0', 10),
    };
  } catch (err) {
    console.error('[Redis] getDomainMeta error:', err);
    return null;
  }
}

/**
 * Track popular search terms
 */
export async function trackSearch(query: string): Promise<void> {
  if (!isConnected || !query.trim()) return;

  try {
    await redis.zincrby(KEYS.POPULAR_SEARCHES, 1, query.toLowerCase().trim());
  } catch (err) {
    // Silently fail - analytics shouldn't break search
  }
}

/**
 * Get popular searches
 */
export async function getPopularSearches(limit: number = 10): Promise<string[]> {
  if (!isConnected) return [];

  try {
    const results = await redis.zrevrange(KEYS.POPULAR_SEARCHES, 0, limit - 1);
    return results;
  } catch (err) {
    return [];
  }
}

/**
 * Get index statistics
 */
export async function getIndexStats(): Promise<{
  totalDomains: number;
  redisConnected: boolean;
  memoryUsage: string;
}> {
  if (!isConnected) {
    return {
      totalDomains: 0,
      redisConnected: false,
      memoryUsage: 'N/A',
    };
  }

  try {
    const totalDomains = await redis.zcard(KEYS.AUTOCOMPLETE_DOMAINS);
    const info = await redis.info('memory');
    const memoryMatch = info.match(/used_memory_human:(\S+)/);
    const memoryUsage = memoryMatch ? memoryMatch[1] : 'N/A';

    return {
      totalDomains,
      redisConnected: true,
      memoryUsage,
    };
  } catch (err) {
    return {
      totalDomains: 0,
      redisConnected: false,
      memoryUsage: 'N/A',
    };
  }
}

/**
 * Clear all search data (admin only)
 */
export async function clearIndex(): Promise<void> {
  if (!isConnected) return;

  try {
    const keys = await redis.keys('autocomplete:*');
    const domainKeys = await redis.keys('domain:*');
    const contentKeys = await redis.keys('content:*');
    const cacheKeys = await redis.keys('cache:*');

    const allKeys = [...keys, ...domainKeys, ...contentKeys, ...cacheKeys];

    if (allKeys.length > 0) {
      await redis.del(...allKeys);
    }

    console.log(`[Redis] Cleared ${allKeys.length} keys`);
  } catch (err) {
    console.error('[Redis] clearIndex error:', err);
  }
}

/**
 * Cache full documentation content in Redis
 */
export async function cacheDocContent(
  path: string,
  content: string,
  etag: string
): Promise<void> {
  if (!isConnected) return;

  try {
    const pipeline = redis.pipeline();
    pipeline.setex(KEYS.DOC_CACHE(path), TTL.DOC_CACHE, content);
    pipeline.setex(KEYS.DOC_ETAG(path), TTL.DOC_CACHE, etag);
    await pipeline.exec();
  } catch (err) {
    console.error('[Redis] cacheDocContent error:', err);
  }
}

/**
 * Get cached documentation content from Redis
 */
export async function getCachedDoc(
  path: string
): Promise<{ content: string; etag: string } | null> {
  if (!isConnected) return null;

  try {
    const pipeline = redis.pipeline();
    pipeline.get(KEYS.DOC_CACHE(path));
    pipeline.get(KEYS.DOC_ETAG(path));
    const results = await pipeline.exec();

    if (!results) return null;

    const content = results[0]?.[1] as string | null;
    const etag = results[1]?.[1] as string | null;

    if (content && etag) {
      return { content, etag };
    }
    return null;
  } catch (err) {
    console.error('[Redis] getCachedDoc error:', err);
    return null;
  }
}

/**
 * Invalidate cached documentation
 */
export async function invalidateDocCache(path: string): Promise<void> {
  if (!isConnected) return;

  try {
    await redis.del(KEYS.DOC_CACHE(path), KEYS.DOC_ETAG(path));
  } catch (err) {
    console.error('[Redis] invalidateDocCache error:', err);
  }
}

/**
 * Get cache statistics
 */
export async function getCacheStats(): Promise<{
  docsCached: number;
  memoryUsage: string;
  hitRate: string;
}> {
  if (!isConnected) {
    return { docsCached: 0, memoryUsage: 'N/A', hitRate: 'N/A' };
  }

  try {
    const docKeys = await redis.keys('doc:cache:*');
    const info = await redis.info('memory');
    const statsInfo = await redis.info('stats');

    const memoryMatch = info.match(/used_memory_human:(\S+)/);
    const hitsMatch = statsInfo.match(/keyspace_hits:(\d+)/);
    const missesMatch = statsInfo.match(/keyspace_misses:(\d+)/);

    const hits = parseInt(hitsMatch?.[1] || '0', 10);
    const misses = parseInt(missesMatch?.[1] || '0', 10);
    const total = hits + misses;
    const hitRate = total > 0 ? `${((hits / total) * 100).toFixed(1)}%` : 'N/A';

    return {
      docsCached: docKeys.length,
      memoryUsage: memoryMatch ? memoryMatch[1] : 'N/A',
      hitRate,
    };
  } catch (err) {
    return { docsCached: 0, memoryUsage: 'N/A', hitRate: 'N/A' };
  }
}

export default redis;
