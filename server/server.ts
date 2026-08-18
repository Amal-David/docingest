import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';
import path from 'path';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
// @ts-ignore
import compression from 'compression';
// import { LRUCache } from 'lru-cache'; // Removed for Bun compatibility
import crypto from 'crypto';

// Redis for fast search and caching
import {
  initRedis,
  isRedisAvailable,
  autocompleteSearch,
  fullTextSearch,
  trackSearch,
  getPopularSearches,
  getIndexStats,
  replaceDomainIndex,
  cacheDocContent,
  getCachedDoc,
  invalidateDocCache,
  getCacheStats,
  type DomainMeta,
} from './lib/redis';

// Versioning support
import {
  normalizeVersion,
  semverCompare,
  sortDocVersions,
  createLegacyCompatibilityView,
  getLatestVersion,
  addVersionToMetadata,
} from './lib/versioning';
import type {
  DocVersion,
  DomainMetadata,
  DomainMetadataV1,
  VersionedDomainMetadata,
  hasVersioning,
  VersionsListResponse,
  DocWithVersionResponse,
  SaveDocRequest,
} from './types/versioning';
import { hasVersioning as checkHasVersioning } from './types/versioning';
import {
  appendCrawlRun,
  createCrawlRun,
  createSnapshot,
  selectApprovedCurrentSnapshot,
} from './lib/document-integrity';
import {
  assessSnapshotQuality,
  failedPageLabels,
  reconcileCrawlOutcomes,
} from './lib/crawl-acceptance';
import { listDomainDirectories, readApprovedDomain } from './lib/corpus';
import { generateTableOfContents, mergeMarkdownContent } from './lib/markdown-merge';
import { resolveSnapshotSelector } from './lib/snapshot-selector';
import { canonicalDomain, canonicalizeUrl } from './lib/url-canonicalization';
import { searchApprovedSections, type ApprovedDocumentForSearch } from './lib/section-retrieval';
import {
  isValidSnapshotTimestamp,
  resolveSafeDomainPath,
  resolveSafeSnapshotPath,
} from './lib/storage-paths';
import {
  startFirecrawlCrawl,
  getFirecrawlCrawlStatus,
  isFirecrawlConfigured,
  isValidFirecrawlCrawlId,
  type CrawlStartRequest,
  type CrawlStatusResponse,
} from './lib/firecrawl-crawl';
import {
  buildPublicSitemapUrls,
  generateSitemapXml,
  getMarkdownResponseHeaders,
  isSafePublicDomain,
  loadPublicMarkdown,
  publicMarkdownPath,
  type PublicSitemapDomain,
} from './lib/ai-readable';
import {
  getIndexNowConfig,
  isIndexNowKeyFileRequest,
  submitIndexNowUrls,
  type IndexNowSubmissionResult,
} from './lib/indexnow';
const app = express();
const PORT = process.env.PORT || 8001;

interface CrawlJobState {
  provider: string;
  request: CrawlStartRequest;
  startedAt: string;
  latestStatus?: CrawlStatusResponse;
}

const crawlJobs = new Map<string, CrawlJobState>();
const CRAWL_JOB_TTL_MS = 60 * 60 * 1000;

function pruneExpiredCrawlJobs(now = Date.now()): void {
  for (const [id, job] of crawlJobs) {
    if (now - new Date(job.startedAt).getTime() > CRAWL_JOB_TTL_MS) {
      crawlJobs.delete(id);
    }
  }
}

// Trust proxy (nginx/load balancer) for correct IP detection in rate limiting
app.set('trust proxy', 1);

// Increase payload size limits
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Add additional middleware for raw and text payloads
app.use(express.raw({ limit: '100mb' }));
app.use(express.text({ limit: '100mb' }));

// Add headers to help identify the issue
app.use((req, res, next) => {
  // Set explicit content-length header for responses
  res.setHeader('x-max-content-length', '104857600'); // 100MB in bytes
  res.setHeader('x-server-limit', '100MB');
  next();
});

app.use(cors());
app.use(helmet());
app.use(rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
}));
app.use(compression());

// Simple in-memory cache for markdown files (Map)
const mdCache = new Map<string, { content: string, etag: string, mtime: number, cachedAt: number }>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

// Cache for API responses
const apiCache = new Map<string, { data: any, cachedAt: number }>();
const API_CACHE_TTL = 1000 * 60 * 5; // 5 minutes for API responses

// Simple per-file rate limiter (per IP, per file)
const fileRateLimits = new Map<string, Map<string, { count: number, last: number }>>();
const RATE_LIMIT = 30; // 30 requests
const RATE_WINDOW = 60 * 1000; // per minute

function checkRateLimit(ip: string, file: string): boolean {
  const now = Date.now();
  if (!fileRateLimits.has(file)) fileRateLimits.set(file, new Map());
  const ipMap = fileRateLimits.get(file)!;
  if (!ipMap.has(ip)) ipMap.set(ip, { count: 0, last: now });
  const entry = ipMap.get(ip)!;
  if (now - entry.last > RATE_WINDOW) {
    entry.count = 1;
    entry.last = now;
    return false;
  }
  entry.count++;
  entry.last = now;
  return entry.count > RATE_LIMIT;
}

// Define sortDocs function
function sortDocs(docs: any[], sortBy: string): any[] {
  const sortedDocs = [...docs]; // Create a copy to avoid mutating the original array
  
  if (!sortBy || docs.length === 0) {
    return sortedDocs;
  }

  console.log(`Sorting ${docs.length} documents by '${sortBy}'`);
  
  switch (sortBy.toLowerCase()) {
    case 'newest':
      // Sort by lastUpdated or lastScraped in descending order (newest first)
      return sortedDocs.sort((a, b) => {
        const dateA = new Date(a.lastUpdated || a.lastScraped || 0).getTime();
        const dateB = new Date(b.lastUpdated || b.lastScraped || 0).getTime();
        return dateB - dateA;
      });
      
    case 'oldest':
      // Sort by lastUpdated or lastScraped in ascending order (oldest first)
      return sortedDocs.sort((a, b) => {
        const dateA = new Date(a.lastUpdated || a.lastScraped || 0).getTime();
        const dateB = new Date(b.lastUpdated || b.lastScraped || 0).getTime();
        return dateA - dateB;
      });
      
    case 'name_asc':
      // Sort by domain name in ascending order (A-Z)
      return sortedDocs.sort((a, b) => {
        const nameA = (a.domain || a.url || '').toLowerCase();
        const nameB = (b.domain || b.url || '').toLowerCase();
        return nameA.localeCompare(nameB);
      });
      
    case 'name_desc':
      // Sort by domain name in descending order (Z-A)
      return sortedDocs.sort((a, b) => {
        const nameA = (a.domain || a.url || '').toLowerCase();
        const nameB = (b.domain || b.url || '').toLowerCase();
        return nameB.localeCompare(nameA);
      });
      
    default:
      // Default to newest if sort parameter is not recognized
      console.log(`Unknown sort parameter '${sortBy}', defaulting to 'newest'`);
      return sortDocs(sortedDocs, 'newest');
  }
}

// Storage path - using absolute path from project root
// Detect if we're running from the server directory or project root
const isInServerDir = process.cwd().endsWith('/server') || process.cwd().endsWith('\\server');
const STORAGE_PATH = isInServerDir
  ? path.join(process.cwd(), 'storage', 'docs')
  : path.join(process.cwd(), 'server', 'storage', 'docs');
console.log('Storage path:', STORAGE_PATH);

// The snapshot merge format lives in ./lib/markdown-merge alongside the split
// that reverses it, so the two cannot drift apart.

function getApprovedSnapshot(metadata: VersionedDomainMetadata) {
  return metadata.schemaVersion === 3
    ? selectApprovedCurrentSnapshot(metadata)
    : undefined;
}

async function isEligibleForPublicRead(domain: string): Promise<boolean> {
  const metadataPath = path.join(STORAGE_PATH, domain, 'metadata.json');
  if (!await fs.pathExists(metadataPath)) return false;

  const metadata = await fs.readJSON(metadataPath) as DomainMetadata;
  if (!checkHasVersioning(metadata) || metadata.schemaVersion !== 3) return false;
  return Boolean(getApprovedSnapshot(metadata));
}

async function syncApprovedSnapshotIndex(
  domain: string,
  metadata: VersionedDomainMetadata,
  justWrittenSnapshotId?: string,
  justWrittenContent?: string
): Promise<void> {
  if (!isRedisAvailable()) return;

  const approvedSnapshot = getApprovedSnapshot(metadata);
  if (!approvedSnapshot) return;

  try {
    const content = approvedSnapshot.id === justWrittenSnapshotId && justWrittenContent !== undefined
      ? justWrittenContent
      : await fs.readFile(path.join(STORAGE_PATH, domain, approvedSnapshot.filename), 'utf-8');
    await replaceDomainIndex({
      domain,
      url: approvedSnapshot.sourceUrl,
      title: domain,
      snippet: content,
      lastScraped: approvedSnapshot.capturedAt,
      totalPages: approvedSnapshot.totalPages,
      successfulPages: approvedSnapshot.successfulPages,
    }, content);
  } catch (error) {
    console.error(`[Redis] Failed to index approved snapshot for ${domain}:`, error);
  }
}

// Helper function to merge existing files
const mergeExistingFiles = async (domainPath: string) => {
  try {
    const files = await fs.readdir(domainPath);
    const mdFiles = files.filter(f => f.endsWith('.md') && !f.startsWith('documentation_'));
    
    const pages = await Promise.all(mdFiles.map(async (file) => {
      const filePath = path.join(domainPath, file);
      const content = await fs.readFile(filePath, 'utf-8');
      // Extract type from filename
      const type = file.split('_')[0].replace(/_/g, ' ');
      return { type, content };
    }));

    return pages;
  } catch (err) {
    console.error('Error merging existing files:', err);
    return [];
  }
};

const PUBLIC_BASE_URL = (process.env.PUBLIC_BASE_URL || 'https://docingest.com').replace(/\/+$/, '');
const INDEXNOW_CONFIG = getIndexNowConfig(PUBLIC_BASE_URL, process.env.INDEXNOW_KEY);
const SITEMAP_CACHE_TTL = 15 * 60 * 1000;
let sitemapCache: { xml: string; totalDomains: number; generatedAt: number } | null = null;
let sitemapRefreshPromise: Promise<{ xml: string; totalDomains: number; generatedAt: number }> | null = null;

async function collectPublicSitemapDomains(): Promise<PublicSitemapDomain[]> {
  const domains = await listDomainDirectories(STORAGE_PATH);
  const entries: PublicSitemapDomain[] = [];

  for (const domain of domains) {
    if (!isSafePublicDomain(domain)) continue;

    try {
      // Same servable definition the API and the search index use, so the
      // sitemap cannot advertise a URL that /docs/:domain then refuses.
      const approved = await readApprovedDomain(STORAGE_PATH, domain);
      if (!approved) continue;

      const rawLastmod = approved.snapshot.capturedAt;
      const lastmodDate = rawLastmod ? new Date(rawLastmod) : null;
      entries.push({
        domain,
        lastmod: lastmodDate && Number.isFinite(lastmodDate.getTime())
          ? lastmodDate.toISOString()
          : undefined,
      });
    } catch (error) {
      console.error(`Skipping invalid sitemap metadata for ${domain}:`, error);
    }
  }

  return entries;
}

async function refreshPublicSitemap(force = false) {
  if (!force && sitemapCache && Date.now() - sitemapCache.generatedAt < SITEMAP_CACHE_TTL) {
    return sitemapCache;
  }

  if (sitemapRefreshPromise) return sitemapRefreshPromise;

  sitemapRefreshPromise = (async () => {
    const domains = await collectPublicSitemapDomains();
    const urls = buildPublicSitemapUrls(PUBLIC_BASE_URL, domains);
    const refreshed = {
      xml: generateSitemapXml(urls),
      totalDomains: domains.length,
      generatedAt: Date.now(),
    };
    sitemapCache = refreshed;
    return refreshed;
  })();

  try {
    return await sitemapRefreshPromise;
  } finally {
    sitemapRefreshPromise = null;
  }
}

async function submitPublicSitemapToIndexNow(): Promise<IndexNowSubmissionResult> {
  const domains = await collectPublicSitemapDomains();
  const urls = buildPublicSitemapUrls(PUBLIC_BASE_URL, domains);
  return submitIndexNowUrls(urls.map(entry => entry.url), INDEXNOW_CONFIG);
}

async function submitDomainToIndexNow(domain: string): Promise<IndexNowSubmissionResult> {
  return submitIndexNowUrls([
    `${PUBLIC_BASE_URL}/docs/${domain}`,
    `${PUBLIC_BASE_URL}${publicMarkdownPath(domain)}`,
  ], INDEXNOW_CONFIG);
}

app.get('/api/indexnow/status', (_req, res) => {
  res.json({
    configured: Boolean(INDEXNOW_CONFIG),
    keyLocation: INDEXNOW_CONFIG?.keyLocation,
    endpoint: 'https://api.indexnow.org/indexnow',
  });
});

app.get('/api/indexnow/key/:keyFile', (req, res) => {
  if (!isIndexNowKeyFileRequest(req.params.keyFile, INDEXNOW_CONFIG)) {
    return res.status(404).type('text/plain').send('Not found');
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(INDEXNOW_CONFIG!.key);
});

app.post('/api/indexnow/submit-sitemap', async (_req, res) => {
  const result = await submitPublicSitemapToIndexNow();
  res.status(result.accepted || result.submitted === false ? 200 : 502).json(result);
});

app.get('/api/sitemap.xml', async (_req, res) => {
  try {
    const sitemap = await refreshPublicSitemap();
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
    res.send(sitemap.xml);
  } catch (error) {
    console.error('Sitemap delivery error:', error);
    res.status(500).json({ success: false, error: 'Failed to generate sitemap' });
  }
});

app.get('/api/sitemap/generate', async (_req, res) => {
  try {
    const sitemap = await refreshPublicSitemap(true);
    const indexNow = await submitPublicSitemapToIndexNow();
    res.json({
      success: true,
      processedDomains: sitemap.totalDomains,
      totalDomains: sitemap.totalDomains,
      totalUrls: (sitemap.totalDomains * 2) + 2,
      sitemapUrl: `${PUBLIC_BASE_URL}/sitemap.xml`,
      indexNow,
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).json({ success: false, error: 'Failed to generate sitemap' });
  }
});

app.get("/api/see", (req, res) => {
  return res.json({
    'Success': "It works"
  })
})
// Save documentation with versioning support
app.post('/api/docs/save', async (req, res) => {
  try {
    const {
      domain: requestedDomain,
      timestamp: requestedTimestamp,
      pages,
      version: explicitVersion,
      versionLabel,
      crawlProvider,
      crawlConfiguration,
      crawlStartedAt,
      crawlId,
      crawlOutcomes,
      providerTotals,
    } = req.body as SaveDocRequest;
    if (!requestedDomain || !requestedTimestamp || !Array.isArray(pages)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request body. Required: domain, timestamp, and pages array'
      });
    }

    const safeDomainPath = resolveSafeDomainPath(STORAGE_PATH, requestedDomain);
    if (!safeDomainPath || !isValidSnapshotTimestamp(requestedTimestamp)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid domain or timestamp',
      });
    }
    const { domain, domainPath } = safeDomainPath;
    const timestamp = requestedTimestamp;
    await fs.ensureDir(domainPath);
    console.log('Saving to domain path:', domainPath);

    const metadataPath = path.join(domainPath, 'metadata.json');
    const crawlJob = crawlId ? crawlJobs.get(crawlId) : undefined;
    const cachedStatus = crawlJob?.latestStatus;
    const providerOutcomes = cachedStatus?.outcomes || crawlOutcomes || [];
    const { outcomes, acceptedPages: validPages, evidencePages } = reconcileCrawlOutcomes(providerOutcomes, pages);
    const sourceUrl = crawlJob?.request.url || validPages[0]?.url || pages[0]?.url || outcomes.find((outcome) => outcome.url)?.url || '';
    const canonicalSourceUrl = canonicalizeUrl(sourceUrl) || sourceUrl || domain;
    const discoveredPages = Math.max(
      cachedStatus?.providerTotals.discovered || 0,
      providerTotals?.discovered || 0,
      outcomes.length
    );
    const returnedPages = Math.max(
      cachedStatus?.providerTotals.returned || 0,
      providerTotals?.returned || 0,
      outcomes.length
    );
    const totalPages = discoveredPages;
    const successfulPages = validPages.length;

    // Load existing metadata or create new
    let existingMetadata: VersionedDomainMetadata | null = null;

    if (await fs.pathExists(metadataPath)) {
      const rawMetadata = await fs.readJSON(metadataPath) as DomainMetadata;

      if (checkHasVersioning(rawMetadata)) {
        existingMetadata = rawMetadata;
      } else {
        return res.status(409).json({
          success: false,
          error: 'Legacy documentation must be migrated explicitly before it can be updated. Run the backup-first migration command first.',
        });
      }
    }

    const crawlRun = createCrawlRun({
      provider: crawlJob?.provider || crawlProvider || 'unknown',
      seedUrl: crawlJob?.request.url || sourceUrl || domain,
      canonicalSeedUrl: canonicalSourceUrl,
      configuration: (crawlJob ? { ...crawlJob.request } : crawlConfiguration || {}) as Record<string, unknown>,
      startedAt: crawlJob?.startedAt || crawlStartedAt || timestamp,
      completedAt: timestamp,
      providerTotals: {
        discovered: discoveredPages,
        returned: returnedPages,
        discoveredIsExact: cachedStatus?.providerTotals.discoveredIsExact
          ?? providerTotals?.discoveredIsExact
          ?? false,
      },
      totals: {
        discovered: discoveredPages,
        returned: returnedPages,
      },
      outcomes,
    });

    const evidenceContent = evidencePages.length > 0
      ? generateTableOfContents(evidencePages) + mergeMarkdownContent(evidencePages)
      : '';
    const proposedEvidenceSnapshot = evidenceContent
      ? createSnapshot({
        filename: `evidence_${timestamp}.md`,
        content: evidenceContent,
        sourceUrl: sourceUrl || domain,
        canonicalSourceUrl,
        capturedAt: timestamp,
        crawlRunId: crawlRun.id,
        totalPages: evidencePages.length,
        successfulPages: 0,
        structure: evidencePages.map((page) => ({ type: page.type || '', url: page.url || null })),
        quality: {
          status: 'quarantined',
          reasons: [...new Set(outcomes
            .filter((outcome) => outcome.status !== 'valid' && outcome.reason)
            .map((outcome) => outcome.reason as string))],
        },
      })
      : undefined;
    const existingEvidenceSnapshot = proposedEvidenceSnapshot && existingMetadata?.schemaVersion === 3
      ? existingMetadata.snapshots.find((candidate) => candidate.id === proposedEvidenceSnapshot.id)
      : undefined;
    const evidenceSnapshot = existingEvidenceSnapshot || proposedEvidenceSnapshot;
    if (proposedEvidenceSnapshot && !existingEvidenceSnapshot) {
      const evidencePath = resolveSafeSnapshotPath(domainPath, proposedEvidenceSnapshot.filename);
      if (!evidencePath) throw new Error('Refusing to write evidence outside the documentation domain directory');
      await fs.writeFile(evidencePath, evidenceContent);
    }

    if (validPages.length === 0) {
      const failureMetadata: VersionedDomainMetadata = existingMetadata || {
        url: sourceUrl || domain,
        domain,
        lastScraped: timestamp,
        totalPages,
        successfulPages: 0,
        failedPages: failedPageLabels(outcomes),
        structure: [],
        latestVersion: '',
        versions: [],
        schemaVersion: 3,
        crawlRuns: [],
        snapshots: [],
      };
      let updatedFailureMetadata = appendCrawlRun(failureMetadata, crawlRun, evidenceSnapshot);
      if (!existingMetadata) {
        updatedFailureMetadata.failedPages = failedPageLabels(outcomes);
      }
      await fs.writeJSON(metadataPath, updatedFailureMetadata, { spaces: 2 });
      apiCache.clear();
      await invalidateDocCache(domain);
      await syncApprovedSnapshotIndex(domain, updatedFailureMetadata);
      if (crawlId) crawlJobs.delete(crawlId);

      return res.status(422).json({
        success: false,
        error: 'No crawled pages passed server-side acceptance. The crawl outcome has been recorded for inspection.',
        crawlRunId: crawlRun.id,
        failedPages: failedPageLabels(outcomes),
      });
    }

    // Generate table of contents
    const toc = generateTableOfContents(validPages);

    // Merge all markdown content
    const mergedContent = mergeMarkdownContent(validPages);

    // Combine TOC and content
    const fullContent = toc + mergedContent;

    // The immutable snapshot ID is the primary identity. An upstream version
    // label is optional source metadata, never a synthetic crawl counter.
    const proposedFileName = `documentation_${timestamp}.md`;
    const proposedSnapshot = createSnapshot({
      filename: proposedFileName,
      content: fullContent,
      sourceUrl: sourceUrl || domain,
      canonicalSourceUrl,
      capturedAt: timestamp,
      crawlRunId: crawlRun.id,
      totalPages,
      successfulPages,
      structure: validPages.map((page) => ({ type: page.type || '', url: page.url || null })),
      upstreamVersion: explicitVersion,
      upstreamChannel: versionLabel,
      quality: assessSnapshotQuality(validPages),
    });
    const existingSnapshot = existingMetadata?.schemaVersion === 3
      ? existingMetadata.snapshots.find((candidate) => candidate.id === proposedSnapshot.id)
      : undefined;
    const snapshot = existingSnapshot || proposedSnapshot;
    const filePath = resolveSafeSnapshotPath(domainPath, snapshot.filename);
    if (!filePath) throw new Error('Refusing to write documentation outside the documentation domain directory');
    const version = snapshot.id;
    const existingSnapshotVersion = existingMetadata?.versions.find(
      (entry) => entry.snapshotId === snapshot.id || entry.version === snapshot.id
    );
    if (!existingSnapshot) {
      await fs.writeFile(filePath, fullContent);
      console.log('Saved merged documentation to:', filePath);
    } else {
      console.log('Reused unchanged documentation snapshot:', filePath);
    }

    // Retain the `version` field as a compatibility selector, but make it an
    // immutable snapshot ID. Upstream versions may repeat across snapshots.
    const newVersionEntry: Omit<DocVersion, 'isLatest'> = {
      version,
      label: versionLabel,
      timestamp,
      filename: snapshot.filename,
      totalPages,
      successfulPages,
      url: sourceUrl,
      snapshotId: snapshot.id,
      upstreamVersion: explicitVersion,
      upstreamChannel: versionLabel,
    };

    // Build updated metadata
    let updatedMetadata: VersionedDomainMetadata;

    if (existingMetadata) {
      // A repeated content-addressed snapshot remains the same historical
      // object. Its new crawl run is still appended below.
      updatedMetadata = existingSnapshotVersion
        ? existingMetadata
        : addVersionToMetadata(existingMetadata, newVersionEntry);
    } else {
      // Create fresh V2 metadata
      updatedMetadata = {
        url: sourceUrl,
        domain,
        lastScraped: timestamp,
        totalPages,
        successfulPages,
        failedPages: failedPageLabels(outcomes),
        structure: validPages.map(p => ({
          type: p.type,
          url: p.url
        })),
        latestVersion: version,
        versions: [{
          ...newVersionEntry,
          isLatest: true,
          label: versionLabel || 'latest',
        }],
        schemaVersion: 2,
      };
    }

    // Update structure to latest
    updatedMetadata.structure = validPages.map(p => ({
      type: p.type,
      url: p.url
    }));
    updatedMetadata.failedPages = failedPageLabels(outcomes);
    updatedMetadata = appendCrawlRun(updatedMetadata, crawlRun, snapshot);
    if (evidenceSnapshot) {
      updatedMetadata = appendCrawlRun(updatedMetadata, crawlRun, evidenceSnapshot);
    }

    console.log('Saving metadata with versioning:', {
      domain: updatedMetadata.domain,
      latestVersion: updatedMetadata.latestVersion,
      totalVersions: updatedMetadata.versions.length,
    });
    await fs.writeJSON(metadataPath, updatedMetadata, { spaces: 2 });
    apiCache.clear();
    await invalidateDocCache(domain);
    await syncApprovedSnapshotIndex(domain, updatedMetadata, snapshot.id, fullContent);
    if (crawlId) crawlJobs.delete(crawlId);

    let markdownUrl: string | null = null;
    let sitemapUpdated = false;
    let sitemapError: string | undefined;
    let indexNow: IndexNowSubmissionResult | undefined;

    if (isSafePublicDomain(domain)) {
      markdownUrl = `${PUBLIC_BASE_URL}${publicMarkdownPath(domain)}`;
      try {
        await refreshPublicSitemap(true);
        sitemapUpdated = true;
        indexNow = await submitDomainToIndexNow(domain);
        if (indexNow.error) {
          console.error(`Documentation saved for ${domain}, but IndexNow reported: ${indexNow.error}`);
        }
      } catch (error) {
        sitemapError = error instanceof Error ? error.message : 'Unknown sitemap error';
        console.error(`Documentation saved for ${domain}, but sitemap refresh failed:`, error);
      }
    } else {
      sitemapError = 'Domain is not safe for a public Markdown URL';
      console.error(`Documentation saved for ${domain}, but no public Markdown URL was created`);
    }

    res.json({
      success: true,
      filePath,
      version,
      snapshotId: snapshot.id,
      isLatest: updatedMetadata.currentSnapshotId === snapshot.id,
      totalVersions: updatedMetadata.versions.length,
      structure: updatedMetadata.structure,
      crawlRunId: crawlRun.id,
      acceptedPages: successfulPages,
      quality: snapshot.quality,
      markdownUrl,
      sitemapUpdated,
      ...(indexNow ? { indexNow } : {}),
      ...(sitemapError ? { sitemapError } : {}),
    });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ success: false, error: 'Failed to save documentation' });
  }
});
app.get('/api/docs/list/all', async (req, res) => {
  try {
    console.log('Reading storage directory:', STORAGE_PATH);
    
    // Get pagination parameters from query string
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = 5000 // Default to 10 docs per page

    if (page < 1 || limit < 1) {
      return res.status(400).json({ success: false, error: 'Invalid page or limit values' });
    }

    if (!await fs.pathExists(STORAGE_PATH)) {
      console.log('Storage directory does not exist');
      return res.json({ docs: [], urls: [], totalDocs: 0 });
    }

    const domains = await listDomainDirectories(STORAGE_PATH);
    
    const allDocs: any[] = [];
    const allUrls: any[] = [];

    for (const fullDomain of domains) {
      const domainPath = path.join(STORAGE_PATH, fullDomain);
      const metadataPath = path.join(domainPath, 'metadata.json');
      
      try {
        if (await fs.pathExists(metadataPath)) {
          const metadata = await fs.readJSON(metadataPath) as DomainMetadata;
          const approvedSnapshot = checkHasVersioning(metadata)
            ? getApprovedSnapshot(metadata)
            : undefined;
          if (!checkHasVersioning(metadata) || metadata.schemaVersion !== 3 || !approvedSnapshot) {
            continue;
          }
          allUrls.push(metadata);

          const files = await fs.readdir(domainPath);

          const docFile = approvedSnapshot?.filename || files
            .filter(f => f.startsWith('documentation_') && f.endsWith('.md'))
            .sort()
            .pop();

          if (docFile) {
            const filePath = path.join(domainPath, docFile);
            const content = await fs.readFile(filePath, 'utf-8');
            
            allDocs.push({
              content,
              domain: fullDomain,
              lastUpdated: approvedSnapshot?.capturedAt || metadata.lastScraped,
              url: approvedSnapshot?.sourceUrl || metadata.url,
              filePath,
              structure: metadata.structure || []
            });
          } else {
            const legacyPages = await mergeExistingFiles(domainPath);
            if (legacyPages.length > 0) {
              allDocs.push({
                content: generateTableOfContents(legacyPages) + mergeMarkdownContent(legacyPages),
                domain: fullDomain,
                lastUpdated: metadata.lastScraped,
                url: metadata.url,
                filePath: null,
                structure: metadata.structure || [],
              });
            }
          }
        }
      } catch (err) {
        console.error(`Error processing domain ${fullDomain}:`, err);
        continue;
      }
    }

    // Apply pagination to the results
    const totalDocs = allDocs.length;
    const totalUrls = allUrls.length;

    const paginatedDocs = allDocs.slice((page - 1) * limit, page * limit);
    const paginatedUrls = allUrls.slice((page - 1) * limit, page * limit);

    console.log(`Returning ${paginatedDocs.length} documents for page ${page}`);

    await refreshPublicSitemap(true);
    res.json({ 
      docs: paginatedDocs,
      urls: paginatedUrls,
      totalDocs, 
      totalUrls,
      page, 
      limit,
      totalPages: Math.ceil(totalDocs / limit) 
    });
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ success: false, error: 'Failed to list documentation' });
  }
});


app.get('/api/docs/list', async (req, res) => {
  try {
    // Get pagination parameters from query string
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string) || 10; // Default to 10 docs per page
    const sortBy = (req.query.sortBy as string) || 'newest'; // Default to newest first

    if (page < 1 || limit < 1) {
      return res.status(400).json({ success: false, error: 'Invalid page or limit values' });
    }

    // Check cache for this specific query
    const cacheKey = `docs-list-${page}-${limit}-${sortBy}`;
    const cached = apiCache.get(cacheKey);
    const now = Date.now();
    
    if (cached && now - cached.cachedAt < API_CACHE_TTL) {
      res.setHeader('X-Cache', 'HIT');
      res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes
      return res.json(cached.data);
    }
    
    console.log('Reading storage directory:', STORAGE_PATH);

    if (!await fs.pathExists(STORAGE_PATH)) {
      console.log('Storage directory does not exist');
      return res.json({ docs: [], urls: [], totalDocs: 0 });
    }

    const domains = await listDomainDirectories(STORAGE_PATH);
    
    const allDocs: any[] = [];
    const allUrls: any[] = [];

    for (const fullDomain of domains) {
      const domainPath = path.join(STORAGE_PATH, fullDomain);
      const metadataPath = path.join(domainPath, 'metadata.json');
      
      try {
        if (!await fs.pathExists(metadataPath)) {
          continue;
        }

        const metadata = await fs.readJSON(metadataPath) as DomainMetadata;
        const approvedSnapshot = checkHasVersioning(metadata)
          ? getApprovedSnapshot(metadata)
          : undefined;
        if (!checkHasVersioning(metadata) || metadata.schemaVersion !== 3 || !approvedSnapshot) {
          continue;
        }
        allUrls.push(metadata);

        const files = await fs.readdir(domainPath);
        const docFile = approvedSnapshot?.filename || files
          .filter(f => f.startsWith('documentation_') && f.endsWith('.md'))
          .sort()
          .pop();

        if (!docFile) {
          console.log('No documentation file found for domain:', fullDomain);
          continue;
        }

        allDocs.push({
          domain: fullDomain,
          lastUpdated: approvedSnapshot?.capturedAt || metadata.lastScraped,
          url: approvedSnapshot?.sourceUrl || metadata.url,
          filePath: path.join(domainPath, docFile),
          structure: metadata.structure || [],
          totalPages: metadata.totalPages,
          successfulPages: metadata.successfulPages,
          failedPages: metadata.failedPages || [],
          latestVersion: checkHasVersioning(metadata) ? metadata.latestVersion : undefined,
          versions: checkHasVersioning(metadata) ? metadata.versions : undefined,
        });
      } catch (err) {
        console.error(`Error processing domain ${fullDomain}:`, err);
        continue;
      }
    }

    // Now add diagnostic logging AFTER allDocs is defined
    console.log(`\n============= SORT DIAGNOSTICS ============`);
    console.log(`Requested sort parameter: "${req.query.sortBy}" (type: ${typeof req.query.sortBy})`);
    console.log(`Normalized sort parameter: "${sortBy}"`);
    
    // Also log document date information to verify what we're working with
    console.log(`\nSample document date formats:`);
    const sampleDocs = allDocs.slice(0, Math.min(3, allDocs.length));
    sampleDocs.forEach((doc, i) => {
      console.log(`Doc ${i+1} (${doc.domain}):`);
      console.log(`  - lastUpdated: ${doc.lastUpdated} (${typeof doc.lastUpdated})`);
      console.log(`  - lastScraped: ${(doc as any).lastScraped} (${typeof (doc as any).lastScraped})`);
      console.log(`  - ISO parse: ${new Date(doc.lastUpdated || (doc as any).lastScraped || 0).toISOString()}`);
    });

    // Apply sorting based on the sortBy parameter
    const sortedDocs = sortDocs(allDocs, sortBy);
    const sortedUrls = sortDocs(allUrls, sortBy);

    // Apply pagination to the results
    const totalDocs = sortedDocs.length;
    const totalUrls = sortedUrls.length;

    const paginatedDocs = sortedDocs.slice((page - 1) * limit, page * limit);
    const paginatedUrls = sortedUrls.slice((page - 1) * limit, page * limit);

    console.log(`Returning ${paginatedDocs.length} documents for page ${page} sorted by ${sortBy}`);
    
    const responseData = { 
      docs: paginatedDocs,
      urls: paginatedUrls,
      totalDocs, 
      totalUrls,
      page, 
      limit,
      totalPages: Math.ceil(totalDocs / limit) 
    };
    
    // Cache the response
    apiCache.set(cacheKey, { data: responseData, cachedAt: now });
    
    // Set cache headers
    res.setHeader('X-Cache', 'MISS');
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes
    
    res.json(responseData);
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.get('/api/docs/fullsearch', async (req, res) => {
  try {
    // @ts-ignore
    const query = req.query.q?.toLowerCase();
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    // When searching, default to name_asc for better search experience
    const sortBy = (req.query.sortBy as string) || 'name_asc';

    if (!query) {
      return res.status(400).json({ success: false, error: 'Missing search query parameter `q`' });
    }

    console.log('Full search query:', query);

    if (!await fs.pathExists(STORAGE_PATH)) {
      console.log('Storage directory does not exist.');
      return res.json({ 
        docs: [],
        urls: [],
        totalDocs: 0,
        totalUrls: 0,
        page,
        limit,
        totalPages: 0
      });
    }

    const domains = await listDomainDirectories(STORAGE_PATH);
    const exactMatches = [];
    const prefixMatches = [];
    const otherMatches = [];
    const allUrls = [];

    for (const fullDomain of domains) {
      try {
        const domainPath = path.join(STORAGE_PATH, fullDomain);
        const files = await fs.readdir(domainPath);
        
        // Read metadata
        const metadataPath = path.join(domainPath, 'metadata.json');
        if (!await fs.pathExists(metadataPath)) continue;
        
        const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf-8')) as DomainMetadata;
        const approvedSnapshot = checkHasVersioning(metadata)
          ? getApprovedSnapshot(metadata)
          : undefined;
        if (!checkHasVersioning(metadata) || metadata.schemaVersion !== 3 || !approvedSnapshot) {
          continue;
        }
        
        // Check if domain name matches search query
        const domainLower = fullDomain.toLowerCase();
        const domainParts = domainLower.split(/[.\-_]/);
        const isPrefixStart = domainLower.startsWith(query);
        // Check if query is at the start of any domain part (e.g., "on" at start of "onchain" in "example.onchain.xyz")
        const isPartPrefix = !isPrefixStart && domainParts.some(part => part.startsWith(query));
        
        // Prepare document data
        const docFile = approvedSnapshot?.filename || files
          .filter(f => f.startsWith('documentation_') && f.endsWith('.md'))
          .sort()
          .pop();

        if (docFile && domainLower.includes(query)) {
          const filePath = path.join(domainPath, docFile);
          const content = await fs.readFile(filePath, 'utf-8');
          
          const docEntry = {
            content,
            domain: fullDomain,
            lastUpdated: approvedSnapshot?.capturedAt || metadata.lastScraped,
            url: approvedSnapshot?.sourceUrl || metadata.url,
            filePath,
            structure: metadata.structure || [],
            matchType: 'other' // Default match type
          };
          
          // Categorize matches by relevance
          if (domainLower === query) {
            // Exact match
            docEntry.matchType = 'exact';
            exactMatches.push(docEntry);
            console.log(`Exact match: ${fullDomain}`);
          } else if (isPrefixStart) {
            // Prefix match at the beginning (e.g., "on" matches "onchain.xyz")
            docEntry.matchType = 'prefix_start';
            prefixMatches.push(docEntry);
            console.log(`Prefix match (start): ${fullDomain}`);
          } else if (isPartPrefix) {
            // Prefix match at the start of a domain part (e.g., "on" matches "example.onchain")
            docEntry.matchType = 'prefix_part';
            prefixMatches.push(docEntry);
            console.log(`Prefix match (part): ${fullDomain}`);
          } else {
            // Contains match (e.g., "on" is somewhere in the domain)
            docEntry.matchType = 'other';
            otherMatches.push(docEntry);
            console.log(`Other match: ${fullDomain}`);
          }
          
          allUrls.push(metadata.url);
        }
      } catch (err) {
        console.error(`Error processing domain ${fullDomain}:`, err);
        continue;
      }
    }

    // Log the results for debugging
    console.log(`Found matches - Exact: ${exactMatches.length}, Prefix: ${prefixMatches.length}, Other: ${otherMatches.length}`);
    
    // Add diagnostic logging for search
    console.log(`\n============= SEARCH SORT DIAGNOSTICS ============`);
    console.log(`Requested sort parameter: "${req.query.sortBy}" (type: ${typeof req.query.sortBy})`);
    console.log(`Normalized sort parameter: "${sortBy}"`);
    
    // Also log search result sample date information
    const allResults = [...exactMatches, ...prefixMatches, ...otherMatches];
    console.log(`\nSample search result date formats (before sorting):`);
    const sampleResults = allResults.slice(0, Math.min(3, allResults.length));
    sampleResults.forEach((doc, i) => {
      console.log(`Result ${i+1} (${doc.domain}):`);
      console.log(`  - lastUpdated: ${doc.lastUpdated} (${typeof doc.lastUpdated})`);
      console.log(`  - lastScraped: ${(doc as any).lastScraped} (${typeof (doc as any).lastScraped})`);
      console.log(`  - matchType: ${doc.matchType}`);
    });
    
    // Sort each category separately
    const sortedExactMatches = sortDocs(exactMatches, sortBy);
    const sortedPrefixMatches = sortDocs(prefixMatches, sortBy);
    const sortedOtherMatches = sortDocs(otherMatches, sortBy);
    
    // Maintain the categorization (exact > prefix > other) regardless of sort
    const sortedDocs = [...sortedExactMatches, ...sortedPrefixMatches, ...sortedOtherMatches];
    const sortedUrls = sortDocs(allUrls, sortBy);
    
    // Log the sorted matches
    console.log(`Sorted results by ${sortBy} with priority: Exact (${sortedExactMatches.length}) > Prefix (${sortedPrefixMatches.length}) > Other (${sortedOtherMatches.length})`);
    console.log(`Returning ${sortedDocs.length} documents for search query "${query}" on page ${page} sorted by ${sortBy}`);

    // Apply pagination to the results
    const totalDocs = sortedDocs.length;
    const totalUrls = sortedUrls.length;

    const paginatedDocs = sortedDocs.slice((page - 1) * limit, page * limit);
    const paginatedUrls = sortedUrls.slice((page - 1) * limit, page * limit);

    res.json({
      docs: paginatedDocs,
      urls: paginatedUrls,
      totalDocs,
      totalUrls,
      page,
      limit,
      totalPages: Math.ceil(totalDocs / limit)
    });
  } catch (error) {
    console.error('Full search error:', error);
    res.status(500).json({ success: false, error: 'Failed to perform full search' });
  }
});


app.get('/api/docs/search', async (req, res) => {
  try {
    // @ts-ignore
    const query = req.query.q?.toLowerCase(); // Extract the search query
    if (!query) {
      return res.status(400).json({ success: false, error: 'Missing search query parameter `q`' });
    }

    console.log('Search query:', query);

    if (!await fs.pathExists(STORAGE_PATH)) {
      console.log('Storage directory does not exist.');
      return res.json({ matches: [], totalMatches: 0 });
    }

    const domains = await listDomainDirectories(STORAGE_PATH);

    const matches: string[] = [];
    for (const domain of domains) {
      if (!domain.toLowerCase().includes(query)) continue;
      const metadataPath = path.join(STORAGE_PATH, domain, 'metadata.json');
      if (!await fs.pathExists(metadataPath)) continue;
      const metadata = await fs.readJSON(metadataPath) as DomainMetadata;
      const approvedSnapshot = checkHasVersioning(metadata)
        ? getApprovedSnapshot(metadata)
        : undefined;
      if (!checkHasVersioning(metadata) || metadata.schemaVersion !== 3 || !approvedSnapshot) continue;
      matches.push(domain);
    }

    console.log(`Found ${matches.length} matches for query: "${query}"`);

    res.json({ matches, totalMatches: matches.length });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ success: false, error: 'Failed to perform search' });
  }
});

// Public, bot-friendly Markdown for the latest stored version of a domain.
app.get('/api/docs/markdown/:domain', async (req, res) => {
  try {
    const document = await loadPublicMarkdown(STORAGE_PATH, req.params.domain);
    if (!document) {
      return res.status(404).json({ error: 'Documentation not found' });
    }

    const headers = getMarkdownResponseHeaders(document, PUBLIC_BASE_URL);
    for (const [name, value] of Object.entries(headers)) {
      res.setHeader(name, value);
    }

    if (req.headers['if-none-match'] === document.etag) {
      return res.status(304).end();
    }

    const ifModifiedSince = req.headers['if-modified-since'];
    if (ifModifiedSince) {
      const clientMtime = new Date(ifModifiedSince).getTime();
      if (Number.isFinite(clientMtime) && clientMtime >= Math.floor(document.mtimeMs / 1000) * 1000) {
        return res.status(304).end();
      }
    }

    res.send(document.content);
  } catch (error) {
    console.error('Public Markdown delivery error:', error);
    res.status(500).json({ error: 'Failed to read documentation' });
  }
});


// Get file content (optimized)
app.get('/api/docs/content', async (req, res) => {
  try {
    const filePath = req.query.path as string | undefined;
    if (!filePath) return res.status(400).json({ success: false, error: 'No file path provided' });
    if (!await fs.pathExists(filePath)) return res.status(404).json({ success: false, error: 'File not found' });
    const ip = req.ip;
    const safePath = filePath as string;
     // @ts-ignore
    if (checkRateLimit(ip, safePath)) return res.status(429).json({ success: false, error: 'Rate limit exceeded' });

    const stat = await fs.stat(safePath);
    const now = Date.now();

    // Try Redis cache first (survives restarts, scales across instances)
    if (isRedisAvailable()) {
      const redisCached = await getCachedDoc(safePath);
      if (redisCached) {
        res.setHeader('ETag', redisCached.etag);
        res.setHeader('Last-Modified', new Date(stat.mtimeMs).toUTCString());
        res.setHeader('X-Cache', 'HIT-REDIS');
        if (req.headers['if-none-match'] === redisCached.etag) return res.status(304).end();
        return res.send(redisCached.content);
      }
    }

    // Fallback to in-memory cache
    let cached = mdCache.get(safePath);
    if (!cached || cached.mtime !== stat.mtimeMs || now - cached.cachedAt > CACHE_TTL) {
      const content = await fs.readFile(safePath, 'utf-8');
      const etag = crypto.createHash('md5').update(content).digest('hex');
      cached = { content, etag, mtime: stat.mtimeMs, cachedAt: now };
      mdCache.set(safePath, cached);

      // Also cache in Redis for persistence and scaling
      if (isRedisAvailable()) {
        cacheDocContent(safePath, content, etag).catch(err =>
          console.error('[Redis] Failed to cache doc:', err)
        );
      }
    }

    // ETag/Last-Modified support
    res.setHeader('ETag', cached.etag);
    res.setHeader('Last-Modified', new Date(cached.mtime).toUTCString());
    res.setHeader('X-Cache', 'HIT-MEMORY');
    if (req.headers['if-none-match'] === cached.etag) return res.status(304).end();
    if (req.headers['if-modified-since'] && new Date(req.headers['if-modified-since']).getTime() >= cached.mtime) return res.status(304).end();
    res.send(cached.content);
  } catch (error) {
    console.error('Content error:', error);
    res.status(500).json({ success: false, error: 'Failed to read file content' });
  }
});

// Download file (streamed, optimized)
app.get('/api/docs/download', async (req, res) => {
  try {
    const filePath = req.query.path as string | undefined;
    if (!filePath) return res.status(400).json({ success: false, error: 'No file path provided' });
    if (!await fs.pathExists(filePath)) return res.status(404).json({ success: false, error: 'File not found' });
    const ip = req.ip;
    const safePath = filePath as string;
    // @ts-ignore
    if (checkRateLimit(ip, safePath)) return res.status(429).json({ success: false, error: 'Rate limit exceeded' });
    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Content-Disposition', `attachment; filename="${path.basename(safePath)}"`);
    const stat = await fs.stat(safePath);
    res.setHeader('Last-Modified', new Date(stat.mtimeMs).toUTCString());
    const stream = fs.createReadStream(safePath);
    stream.pipe(res);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ success: false, error: 'Failed to download file' });
  }
});

// Web Vitals analytics endpoint
app.post('/api/analytics/web-vitals', async (req, res) => {
  try {
    const { name, value, delta, id, rating, page, url, userAgent, connection, timestamp } = req.body;
    
    // Log Web Vitals metrics (you can extend this to store in database)
    console.log(`[Web Vitals] ${name}: ${value}${name === 'CLS' ? '' : 'ms'} (${rating}) - ${page}`);
    
    // Store in a simple file or extend to database
    // For now, just acknowledge
    res.json({ 
      success: true, 
      message: 'Web Vitals metric recorded',
      metric: { name, value, rating }
    });
  } catch (error) {
    console.error('Web Vitals error:', error);
    res.status(500).json({ success: false, error: 'Failed to record metric' });
  }
});

// Helper function to find domain path
function findDomainPath(domain: string): { foundDomain: string | null; docsPath: string | null } {
  const possibleDomains = [
    domain,
    `docs.${domain}.ai`,
    `docs.${domain}`,
    domain.replace(/^docs\./, ''),
    domain.replace(/\.ai$/, ''),
    domain.replace(/^docs\./, '').replace(/\.ai$/, ''),
    `${domain}.ai`,
    domain.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    domain.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, ''),
  ].filter((d, i, arr) => arr.indexOf(d) === i);

  for (const d of possibleDomains) {
    const testPath = path.join(STORAGE_PATH, d);
    if (fs.existsSync(testPath)) {
      return { foundDomain: d, docsPath: testPath };
    }
  }

  return { foundDomain: null, docsPath: null };
}

function parseBoundedInt(value: unknown, fallback: number, max: number): number {
  if (typeof value !== 'string') return fallback;

  const parsed = parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;

  return Math.min(parsed, max);
}

function truncateMarkdownToTokens(content: string, maxTokens: number): string {
  const maxChars = maxTokens * 4;

  if (content.length <= maxChars) {
    return content;
  }

  let truncated = content.slice(0, maxChars);
  const lastParagraph = truncated.lastIndexOf('\n\n');
  const lastSentence = truncated.lastIndexOf('. ');

  if (lastParagraph > maxChars * 0.8) {
    truncated = truncated.slice(0, lastParagraph);
  } else if (lastSentence > maxChars * 0.8) {
    truncated = truncated.slice(0, lastSentence + 1);
  }

  return `${truncated}\n\n[Content truncated to fit token limit]`;
}

function filterMarkdownByTopic(content: string, topic: string): string {
  const topicLower = topic.toLowerCase();
  const lines = content.split('\n');
  const relevantSections: string[] = [];
  let inRelevantSection = false;
  let currentSection: string[] = [];
  let currentHeadingLevel = 0;

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);

    if (!headingMatch) {
      if (inRelevantSection) currentSection.push(line);
      continue;
    }

    const level = headingMatch[1].length;
    const heading = headingMatch[2].toLowerCase();

    if (inRelevantSection && currentSection.length > 0) {
      relevantSections.push(currentSection.join('\n'));
      currentSection = [];
    }

    if (heading.includes(topicLower)) {
      inRelevantSection = true;
      currentHeadingLevel = level;
      currentSection.push(line);
    } else if (inRelevantSection && level <= currentHeadingLevel) {
      inRelevantSection = false;
    } else if (inRelevantSection) {
      currentSection.push(line);
    }
  }

  if (currentSection.length > 0) {
    relevantSections.push(currentSection.join('\n'));
  }

  if (relevantSections.length > 0) {
    return relevantSections.join('\n\n---\n\n');
  }

  return `No sections specifically about "${topic}" found. Try a different topic or omit the topic parameter to get full documentation.`;
}

// Get list of versions for a domain
app.get('/api/docs/domain/:domain/versions', async (req, res) => {
  try {
    const { domain } = req.params;
    const { foundDomain, docsPath } = findDomainPath(domain);

    if (!docsPath || !foundDomain) {
      return res.status(404).json({ error: 'Documentation not found' });
    }

    const metadataPath = path.join(docsPath, 'metadata.json');
    if (!fs.existsSync(metadataPath)) {
      return res.status(404).json({ error: 'Documentation metadata not found' });
    }

    const rawMetadata = await fs.readJSON(metadataPath) as DomainMetadata;

    const metadata: VersionedDomainMetadata = checkHasVersioning(rawMetadata)
      ? rawMetadata
      : await createLegacyCompatibilityView(rawMetadata as DomainMetadataV1, docsPath);

    const response: VersionsListResponse = metadata.schemaVersion === 3
      ? {
        domain: foundDomain,
        latestVersion: metadata.currentSnapshotId || metadata.latestVersion,
        currentSnapshotId: metadata.currentSnapshotId,
        versions: [...metadata.snapshots]
          .sort((a, b) => b.capturedAt.localeCompare(a.capturedAt) || b.id.localeCompare(a.id))
          .map((snapshot) => ({
            version: snapshot.id,
            label: snapshot.upstreamChannel,
            timestamp: snapshot.capturedAt,
            isLatest: snapshot.id === metadata.currentSnapshotId,
            totalPages: snapshot.totalPages,
            snapshotId: snapshot.id,
            upstreamVersion: snapshot.upstreamVersion,
            upstreamChannel: snapshot.upstreamChannel,
            quality: snapshot.quality,
          })),
      }
      : {
        domain: foundDomain,
        latestVersion: metadata.latestVersion,
        versions: sortDocVersions(metadata.versions).map((version) => ({
          version: version.version,
          label: version.label,
          timestamp: version.timestamp,
          isLatest: version.isLatest,
          totalPages: version.totalPages,
          snapshotId: version.snapshotId,
          upstreamVersion: version.upstreamVersion,
          upstreamChannel: version.upstreamChannel,
        })),
      };

    res.json(response);
  } catch (err) {
    console.error('Error fetching versions:', err);
    res.status(500).json({ error: 'Failed to fetch versions' });
  }
});

// Get documentation by domain with optional version parameter
app.get('/api/docs/domain/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    const requestedVersion = req.query.version as string | undefined;
    const requestedSnapshotId = req.query.snapshotId as string | undefined;
    const topic = typeof req.query.topic === 'string' ? req.query.topic.trim() : '';
    const maxTokens = parseBoundedInt(req.query.maxTokens, 0, 50000);

    const { foundDomain, docsPath } = findDomainPath(domain);

    if (!docsPath || !foundDomain) {
      console.log('No matching domain found for:', domain);
      return res.status(404).json({ error: 'Documentation not found' });
    }

    // Read the metadata file
    const metadataPath = path.join(docsPath, 'metadata.json');
    if (!fs.existsSync(metadataPath)) {
      console.log('Metadata file not found at:', metadataPath);
      return res.status(404).json({ error: 'Documentation metadata not found' });
    }

    const rawMetadata = await fs.readJSON(metadataPath) as DomainMetadata;

    // Handle versioned metadata
    let metadata: VersionedDomainMetadata;
    let docFile: string | undefined;
    let currentVersion: DocVersion | null = null;
    let approvedSnapshot: ReturnType<typeof getApprovedSnapshot>;

    if (checkHasVersioning(rawMetadata)) {
      metadata = rawMetadata;
      approvedSnapshot = getApprovedSnapshot(metadata);
      if (metadata.schemaVersion === 3 && !approvedSnapshot) {
        return res.status(404).json({ error: 'No approved documentation snapshot is available for this domain' });
      }
      if (metadata.schemaVersion !== 3 && !requestedVersion) {
        return res.status(404).json({
          error: 'No provenance-safe snapshot is available. Run the corpus integrity audit or request an explicit legacy version.',
        });
      }
      if (requestedSnapshotId && metadata.schemaVersion !== 3) {
        return res.status(400).json({
          error: 'snapshotId is available only for snapshot-backed documentation. Use the legacy version selector instead.',
        });
      }

      if (metadata.schemaVersion === 3 && (requestedSnapshotId || requestedVersion)) {
        const selectedSnapshot = resolveSnapshotSelector(metadata, {
          snapshotId: requestedSnapshotId,
          version: requestedVersion,
        });
        if (!selectedSnapshot) {
          return res.status(404).json({
            error: requestedSnapshotId
              ? `Snapshot ${requestedSnapshotId} not found`
              : `Version ${requestedVersion} not found`,
            availableSnapshots: metadata.snapshots.map((snapshot) => snapshot.id),
          });
        }
        if (selectedSnapshot.quality.status !== 'approved') {
          return res.status(404).json({
            error: 'The selected snapshot is not approved for public retrieval',
            snapshotId: selectedSnapshot.id,
            quality: selectedSnapshot.quality,
          });
        }
        approvedSnapshot = selectedSnapshot;
        docFile = selectedSnapshot.filename;
        currentVersion = metadata.versions.find(
          (version) => version.snapshotId === selectedSnapshot.id || version.filename === selectedSnapshot.filename
        ) || null;
      } else if (requestedVersion) {
        // V1/V2 compatibility selector. V3 callers should use snapshotId for
        // immutable selection, though version remains accepted above.
        const normalizedRequested = normalizeVersion(requestedVersion);
        currentVersion = metadata.versions.find(
          v => v.version === requestedVersion || (
            v.version !== 'legacy' && normalizeVersion(v.version) === normalizedRequested
          )
        ) || null;

        if (!currentVersion) {
          return res.status(404).json({
            error: `Version ${requestedVersion} not found`,
            availableVersions: metadata.versions.map(v => v.version),
          });
        }
        docFile = currentVersion.filename;
      } else {
        currentVersion = metadata.schemaVersion === 3 && approvedSnapshot
          ? metadata.versions.find((version) => version.filename === approvedSnapshot?.filename) || null
          : getLatestVersion(metadata);
        docFile = approvedSnapshot?.filename || currentVersion?.filename;
      }
    } else {
      metadata = await createLegacyCompatibilityView(rawMetadata as DomainMetadataV1, docsPath);
      if (!requestedVersion || requestedVersion !== 'legacy') {
        return res.status(404).json({
          error: 'No provenance-safe snapshot is available. Run the corpus integrity audit or request version=legacy explicitly.',
          availableVersions: ['legacy'],
        });
      }
      currentVersion = getLatestVersion(metadata);
      docFile = currentVersion?.filename;
    }

    // Fallback to finding latest file if no version tracking
    if (!docFile) {
      const files = await fs.readdir(docsPath);
      const docFiles = files.filter(f => f.startsWith('documentation_') && f.endsWith('.md'));
      docFile = docFiles.sort().pop();
    }

    if (!docFile) {
      console.log('No documentation file found in:', docsPath);
      return res.status(404).json({ error: 'Documentation content not found' });
    }

    const markdownPath = path.join(docsPath, docFile);
    console.log('Reading documentation from:', markdownPath);

    if (!fs.existsSync(markdownPath)) {
      return res.status(404).json({ error: 'Documentation file not found' });
    }

    let content = await fs.readFile(markdownPath, 'utf-8');

    if (topic) {
      content = filterMarkdownByTopic(content, topic);
    }

    if (maxTokens > 0) {
      content = truncateMarkdownToTokens(content, maxTokens);
    }

    // Build available versions list (sorted newest first)
    const snapshotMetadata = metadata.schemaVersion === 3 ? metadata : undefined;
    const availableVersions = snapshotMetadata
      ? [...snapshotMetadata.snapshots]
        .sort((a, b) => b.capturedAt.localeCompare(a.capturedAt) || b.id.localeCompare(a.id))
        .map((snapshot) => ({
          version: snapshot.id,
          label: snapshot.upstreamChannel,
          isLatest: snapshot.id === snapshotMetadata.currentSnapshotId,
          snapshotId: snapshot.id,
          upstreamVersion: snapshot.upstreamVersion,
        }))
      : sortDocVersions(metadata.versions).map((version) => ({
        version: version.version,
        label: version.label,
        isLatest: version.isLatest,
        snapshotId: version.snapshotId,
        upstreamVersion: version.upstreamVersion,
      }));

    const response: DocWithVersionResponse = {
      domain: foundDomain,
      content,
      lastUpdated: approvedSnapshot?.capturedAt || currentVersion?.timestamp || metadata.lastScraped,
      url: approvedSnapshot?.sourceUrl || currentVersion?.url || metadata.url,
      filePath: markdownPath,
      structure: approvedSnapshot ? (approvedSnapshot.structure || []) : (metadata.structure || []),
      version: approvedSnapshot?.id || currentVersion?.version || metadata.latestVersion,
      isLatest: metadata.schemaVersion === 3
        ? approvedSnapshot?.id === metadata.currentSnapshotId
        : (currentVersion?.isLatest ?? true),
      availableVersions,
      snapshot: approvedSnapshot ? {
        id: approvedSnapshot.id,
        contentHash: approvedSnapshot.contentHash,
        sourceUrl: approvedSnapshot.sourceUrl,
        capturedAt: approvedSnapshot.capturedAt,
        quality: approvedSnapshot.quality,
        upstreamVersion: approvedSnapshot.upstreamVersion,
        upstreamChannel: approvedSnapshot.upstreamChannel,
      } : undefined,
    };

    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
    res.json(response);
  } catch (err) {
    console.error('Error fetching documentation by domain:', err);
    res.status(500).json({ error: 'Failed to fetch documentation' });
  }
});

// Lightweight duplicate-check contract used by the crawl form.
app.get('/api/docs/check-domain/:domain', async (req, res) => {
  try {
    const requestedDomain = canonicalDomain(req.params.domain);
    const { foundDomain, docsPath } = findDomainPath(requestedDomain);
    if (!foundDomain || !docsPath) return res.json({ found: false });

    const metadataPath = path.join(docsPath, 'metadata.json');
    if (!fs.existsSync(metadataPath)) return res.json({ found: false });

    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8')) as DomainMetadata;
    const approvedSnapshot = checkHasVersioning(metadata)
      ? getApprovedSnapshot(metadata)
      : undefined;
    if (!checkHasVersioning(metadata) || metadata.schemaVersion !== 3 || !approvedSnapshot) {
      return res.json({ found: false, reason: 'no-approved-snapshot' });
    }
    res.json({
      found: true,
      domain: foundDomain,
      lastUpdated: approvedSnapshot?.capturedAt || metadata.lastScraped,
      url: approvedSnapshot?.sourceUrl || metadata.url,
      snapshotId: approvedSnapshot?.id,
      quality: approvedSnapshot?.quality,
    });
  } catch (err) {
    console.error('Error checking documentation domain:', err);
    res.status(500).json({ error: 'Failed to check documentation domain' });
  }
});

// ============================================================================
// REDIS-POWERED FAST SEARCH ENDPOINTS
// ============================================================================

/**
 * Autocomplete endpoint - Lightning fast prefix search
 * GET /api/docs/autocomplete?q=react&limit=8
 */
app.get('/api/docs/autocomplete', async (req, res) => {
  const startTime = Date.now();

  try {
    const query = (req.query.q as string || '').trim();
    const limit = Math.min(parseInt(req.query.limit as string) || 8, 20);

    if (!query || query.length < 2) {
      return res.json({
        suggestions: [],
        query,
        timing: Date.now() - startTime,
        source: 'none',
      });
    }

    // Try Redis first
    if (isRedisAvailable()) {
      const candidates = await autocompleteSearch(query, limit * 3);
      const suggestions = [];
      for (const candidate of candidates) {
        if (await isEligibleForPublicRead(candidate.domain)) {
          suggestions.push(candidate);
        }
        if (suggestions.length >= limit) break;
      }

      // Track the search for analytics
      trackSearch(query);

      return res.json({
        suggestions: suggestions.map(s => ({
          domain: s.domain,
          title: s.title,
          snippet: s.snippet,
          url: s.url,
          matchType: s.domain.toLowerCase().startsWith(query.toLowerCase()) ? 'prefix' : 'contains',
        })),
        query,
        timing: Date.now() - startTime,
        source: 'redis',
        totalMatches: suggestions.length,
      });
    }

    // Fallback to filesystem search
    console.log('[Autocomplete] Redis unavailable, falling back to filesystem');
    const domains = await listDomainDirectories(STORAGE_PATH);
    const queryLower = query.toLowerCase();

    const matches = [];
    for (const domain of domains) {
      if (!domain.toLowerCase().includes(queryLower)) continue;
      if (!await isEligibleForPublicRead(domain)) continue;
      matches.push({
        domain,
        title: domain.replace(/^docs\./, '').replace(/\.(com|org|io|dev|ai)$/, ''),
        snippet: '',
        url: `https://${domain}`,
        matchType: domain.toLowerCase().startsWith(queryLower) ? 'prefix' : 'contains',
      });
      if (matches.length >= limit) break;
    }

    return res.json({
      suggestions: matches,
      query,
      timing: Date.now() - startTime,
      source: 'filesystem',
      totalMatches: matches.length,
    });
  } catch (error) {
    console.error('Autocomplete error:', error);
    res.status(500).json({
      suggestions: [],
      query: req.query.q,
      timing: Date.now() - startTime,
      error: 'Search failed',
    });
  }
});

/**
 * Fast full-text search endpoint
 * GET /api/docs/fast-search?q=hooks&limit=10
 */
app.get('/api/docs/fast-search', async (req, res) => {
  const startTime = Date.now();

  try {
    const query = (req.query.q as string || '').trim();
    const limit = Math.min(parseInt(req.query.limit as string) || 10, 50);

    if (!query) {
      return res.status(400).json({ error: 'Missing search query' });
    }

    // Try Redis first
    if (isRedisAvailable()) {
      const { domains, timing } = await fullTextSearch(query, limit);
      const eligibleDomains = [];
      for (const domain of domains) {
        if (await isEligibleForPublicRead(domain.domain)) {
          eligibleDomains.push(domain);
        }
      }

      trackSearch(query);

      return res.json({
        results: eligibleDomains,
        query,
        timing,
        source: 'redis',
        totalMatches: eligibleDomains.length,
      });
    }

    // Fallback to existing fullsearch logic (slower)
    return res.redirect(`/api/docs/fullsearch?q=${encodeURIComponent(query)}&limit=${limit}`);
  } catch (error) {
    console.error('Fast search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

/**
 * Approved current-snapshot section search. This is deliberately lexical and
 * deterministic; it does not claim vector or semantic ranking.
 */
app.get('/api/docs/sections/search', async (req, res) => {
  try {
    const query = (req.query.q as string || '').trim();
    const limit = parseBoundedInt(req.query.limit, 10, 50);
    const maxChars = parseBoundedInt(req.query.maxChars, 1600, 4000);
    if (!query) return res.status(400).json({ error: 'Missing search query' });
    if (!await fs.pathExists(STORAGE_PATH)) {
      return res.json({ results: [], query, ranking: 'deterministic-lexical', selection: 'approved-current-snapshot' });
    }

    const documents: ApprovedDocumentForSearch[] = [];
    for (const domain of await listDomainDirectories(STORAGE_PATH)) {
      const metadataPath = path.join(STORAGE_PATH, domain, 'metadata.json');
      if (!await fs.pathExists(metadataPath)) continue;

      try {
        const metadata = await fs.readJSON(metadataPath) as DomainMetadata;
        // Legacy/V2 records lack an immutable snapshot and quality verdict, so
        // they are intentionally not eligible for provenance-safe retrieval.
        if (!checkHasVersioning(metadata) || metadata.schemaVersion !== 3) continue;
        const snapshot = getApprovedSnapshot(metadata);
        if (!snapshot) continue;
        const contentPath = path.join(STORAGE_PATH, domain, snapshot.filename);
        if (!await fs.pathExists(contentPath)) continue;
        documents.push({
          domain,
          snapshot,
          content: await fs.readFile(contentPath, 'utf-8'),
        });
      } catch (error) {
        console.error(`Section search skipped unreadable domain ${domain}:`, error);
      }
    }

    res.json({
      results: searchApprovedSections(documents, query, limit, maxChars),
      query,
      ranking: 'deterministic-lexical',
      selection: 'approved-current-snapshot',
    });
  } catch (error) {
    console.error('Section search error:', error);
    res.status(500).json({ error: 'Section search failed' });
  }
});

/**
 * Popular searches endpoint
 * GET /api/docs/popular
 */
app.get('/api/docs/popular', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 10, 20);

    if (isRedisAvailable()) {
      const popular = await getPopularSearches(limit);
      return res.json({ searches: popular, source: 'redis' });
    }

    // No fallback for popular searches - requires Redis
    return res.json({ searches: [], source: 'none' });
  } catch (error) {
    console.error('Popular searches error:', error);
    res.status(500).json({ searches: [], error: 'Failed to get popular searches' });
  }
});

/**
 * Index stats endpoint (admin)
 * GET /api/admin/index/stats
 */
app.get('/api/admin/index/stats', async (req, res) => {
  try {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    const stats = await getIndexStats();

    // Always use filesystem count for totalDomains (source of truth for docs indexed)
    try {
      if (await fs.pathExists(STORAGE_PATH)) {
        const domains = await listDomainDirectories(STORAGE_PATH);
        const validDomains = domains.filter(d => !d.startsWith('.'));
        stats.totalDomains = validDomains.length;
      }
    } catch (fsError) {
      console.error('Filesystem count error:', fsError);
    }

    res.json(stats);
  } catch (error) {
    console.error('Index stats error:', error);
    res.status(500).json({ error: 'Failed to get index stats' });
  }
});

/**
 * Cache stats endpoint (admin)
 * GET /api/admin/cache/stats
 */
app.get('/api/admin/cache/stats', async (req, res) => {
  try {
    const redisStats = await getCacheStats();
    const memoryStats = {
      docsInMemory: mdCache.size,
      apiCacheSize: apiCache.size,
    };

    res.json({
      redis: redisStats,
      memory: memoryStats,
      redisAvailable: isRedisAvailable(),
    });
  } catch (error) {
    console.error('Cache stats error:', error);
    res.status(500).json({ error: 'Failed to get cache stats' });
  }
});

// ============================================================================
// CRAWL PROXY ENDPOINTS
// ============================================================================

/**
 * POST /api/crawl/start
 * Start a crawl job via Firecrawl.
 * Returns { success, id } matching the Firecrawl-shaped frontend contract.
 */
app.post('/api/crawl/start', async (req, res) => {
  try {
    pruneExpiredCrawlJobs();
    if (!isFirecrawlConfigured()) {
      res.status(503).json({
        success: false,
        error: 'Crawl service not configured. Set FIRECRAWL_API_KEY (hosted) or FIRECRAWL_API_URL (self-hosted), then restart the backend.',
      });
      return;
    }

    const body: CrawlStartRequest = req.body;

    if (!body.url) {
      res.status(400).json({ success: false, error: 'Missing required field: url' });
      return;
    }

    console.log(`[crawl-proxy] Starting firecrawl crawl for: ${body.url}`);
    const result = await startFirecrawlCrawl(body);

    if (result.success && result.id) {
      crawlJobs.set(result.id, {
        provider: 'firecrawl',
        request: body,
        startedAt: new Date().toISOString(),
      });
      res.json({ success: true, id: result.id });
    } else {
      res.status(502).json({ success: false, error: result.error });
    }
  } catch (error: any) {
    console.error('[crawl-proxy] Start error:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal server error' });
  }
});

/**
 * GET /api/crawl/status/:id
 * Poll crawl status. Returns the same shape as Firecrawl's GET /crawl/:id:
 * { status, completed, total, data: [{ markdown, metadata: { sourceURL, title } }] }
 */
app.get('/api/crawl/status/:id', async (req, res) => {
  try {
    pruneExpiredCrawlJobs();
    const { id } = req.params;

    if (!id || !isValidFirecrawlCrawlId(id)) {
      res.status(400).json({ status: 'failed', error: 'Invalid or missing crawl ID' });
      return;
    }

    const status = await getFirecrawlCrawlStatus(id);
    const crawlJob = crawlJobs.get(id);
    if (crawlJob) {
      crawlJob.latestStatus = status;
    }
    console.log(`[crawl-proxy] Status [${id}]: ${status.status} ${status.completed}/${status.total}${status.error ? ' error=' + status.error : ''}${status.status === 'completed' ? ' pages=' + status.data.length : ''}`);
    res.json(status);
  } catch (error: any) {
    console.error('[crawl-proxy] Status error:', error);
    res.status(500).json({ status: 'failed', error: error.message || 'Internal server error' });
  }
});

/**
 * GET /api/crawl/health
 * Check if the crawl backend is configured.
 */
app.get('/api/crawl/health', async (_req, res) => {
  res.json({
    configured: isFirecrawlConfigured(),
    provider: 'firecrawl',
  });
});

// ============================================================================
// SERVER INITIALIZATION
// ============================================================================

process.on('uncaughtException', (err) => {
  console.error(`[${process.pid}] Uncaught Exception:`, err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error(`[${process.pid}] Unhandled Rejection:`, reason);
});

// Initialize Redis connection (non-blocking)
initRedis().then(connected => {
  if (connected) {
    console.log(`[${process.pid}] Redis connected - fast search enabled`);
  } else {
    console.log(`[${process.pid}] Redis not available - using filesystem fallback`);
  }
});

console.log(`[${process.pid}] Starting ${process.env.NODE_ENV} - ${process.env.PORT || ''}`);
app.listen(PORT, () => {
  console.log(`[${process.pid}] Server running on port ${PORT}`);
});
