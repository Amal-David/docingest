import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
// @ts-ignore
import compression from 'compression';
// import { LRUCache } from 'lru-cache'; // Removed for Bun compatibility
import crypto from 'crypto';

// Redis for fast search
import {
  initRedis,
  isRedisAvailable,
  autocompleteSearch,
  fullTextSearch,
  trackSearch,
  getPopularSearches,
  getIndexStats,
  indexDomain,
  type DomainMeta,
} from './lib/redis';
const app = express();
const PORT = process.env.PORT || 8001;

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

// Define SitemapUrl interface
interface SitemapUrl {
  url: string;
  changefreq?: string;
  priority?: number;
  lastmod?: string;
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

// Ensure storage directory exists
fs.ensureDirSync(STORAGE_PATH);

// Helper function to generate table of contents
const generateTableOfContents = (pages: any[]) => {
  let toc = '# Table of Contents\n\n';
  pages.forEach((page, index) => {
    const title = page.type || `Section ${index + 1}`;
    const anchor = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    toc += `- [${title}](#${anchor})\n`;
  });
  return toc + '\n---\n\n';
};

// Helper function to merge markdown content
const mergeMarkdownContent = (pages: any[]) => {
  let content = '';
  pages.forEach((page) => {
    const title = page.type || 'Untitled Section';
    // Clean the title and create an anchor
    const anchor = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    content += `# ${title}\n\n${page.content}\n\n---\n\n`;
  });
  return content;
};

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

async function generateSitemap(baseUrl: string, docDomains: any[]) {
  try {
    // Base URLs that are always present
    const staticUrls: SitemapUrl[] = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/view', changefreq: 'daily', priority: 0.8 },
    ];

    // Add doc URLs
    const docUrls: SitemapUrl[] = docDomains.map(domain => ({
      url: `/docs/${domain.domain}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }));

    // Combine all URLs
    const allUrls = [...staticUrls, ...docUrls];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: baseUrl });
    
    // Write URLs to sitemap
    const data = await streamToPromise(Readable.from(allUrls).pipe(stream));
    
    // Write the XML to file
    fs.writeFileSync('public/sitemap.xml', data);
    
    return true;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return false;
  }
}

app.get('/api/sitemap/generate', async (req, res) => {
  try {
      const baseUrl = 'https://docingest.com';
      const domains = await fs.readdir(STORAGE_PATH);
      const totalDomains = domains.length;
      let processedDomains = 0;
      
      // Static pages with high priority
      const staticPages = [
          {
              url: `${baseUrl}/`,
              changefreq: 'daily',
              priority: 1.0,
              lastmod: new Date().toISOString()
          },
          {
              url: `${baseUrl}/view`,
              changefreq: 'daily',
              priority: 0.9,
              lastmod: new Date().toISOString()
          }
      ];

      const sitemapUrls: Array<{
          url: string;
          changefreq: string;
          priority: number;
          lastmod?: string;
      }> = [...staticPages];

      // Process domains in batches
      for (let i = 0; i < totalDomains; i += BATCH_SIZE) {
          const batch = domains.slice(i, i + BATCH_SIZE);
          
          for (const domain of batch) {
              const domainPath = path.join(STORAGE_PATH, domain);
              const metadataPath = path.join(domainPath, 'metadata.json');
              
              if (await fs.pathExists(metadataPath)) {
                  const metadata = await fs.readJSON(metadataPath);
                  const lastScraped = metadata.lastScraped || metadata.lastUpdated;
                  const lastmod = lastScraped ? new Date(lastScraped).toISOString() : undefined;
                  
                  // Calculate priority based on:
                  // - Total pages (more pages = higher priority)
                  // - Recency (recently updated = higher priority)
                  let priority = 0.7; // Base priority
                  
                  if (metadata.totalPages) {
                      if (metadata.totalPages > 100) priority = 0.9;
                      else if (metadata.totalPages > 50) priority = 0.8;
                      else if (metadata.totalPages > 20) priority = 0.75;
                  }
                  
                  // Boost priority for recently updated docs
                  if (lastmod) {
                      const daysSinceUpdate = (Date.now() - new Date(lastmod).getTime()) / (1000 * 60 * 60 * 24);
                      if (daysSinceUpdate < 7) priority += 0.1;
                      else if (daysSinceUpdate < 30) priority += 0.05;
                  }
                  
                  // Cap priority at 0.9 (keep homepage at 1.0)
                  priority = Math.min(0.9, priority);
                  
                  // Determine changefreq based on update recency
                  let changefreq = 'monthly';
                  if (lastmod) {
                      const daysSinceUpdate = (Date.now() - new Date(lastmod).getTime()) / (1000 * 60 * 60 * 24);
                      if (daysSinceUpdate < 7) changefreq = 'daily';
                      else if (daysSinceUpdate < 30) changefreq = 'weekly';
                      else if (daysSinceUpdate < 90) changefreq = 'monthly';
                  }
                  
                  sitemapUrls.push({
                      url: `${baseUrl}/docs/${domain}`,
                      changefreq,
                      priority: Math.round(priority * 10) / 10, // Round to 1 decimal
                      lastmod
                  });
              }
              processedDomains++;
          }
      }

      // Sort by priority (descending) for better SEO
      sitemapUrls.sort((a, b) => (b.priority || 0) - (a.priority || 0));

      // Generate sitemap XML
      const sitemapContent = generateSitemapXML(sitemapUrls);
      const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
      await fs.writeFile(sitemapPath, sitemapContent);

      res.json({
          success: true,
          processedDomains,
          totalDomains,
          totalUrls: sitemapUrls.length,
          sitemapUrl: 'https://docingest.com/sitemap.xml'
      });
  } catch (error) {
      console.error('Sitemap generation error:', error);
      res.status(500).json({ 
          success: false, 
          error: 'Failed to generate sitemap' 
      });
  }
});

app.get("/api/see", (req, res) => {
  return res.json({
    'Success': "It works"
  })
})
// Save documentation
app.post('/api/docs/save', async (req, res) => {
  try {
    const { domain, timestamp, pages } = req.body;
    if (!domain || !timestamp || !Array.isArray(pages)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid request body. Required: domain, timestamp, and pages array' 
      });
    }

    const domainPath = path.join(STORAGE_PATH, domain);
    await fs.ensureDir(domainPath);
    console.log('Saving to domain path:', domainPath);

    // Generate table of contents
    const toc = generateTableOfContents(pages);
    
    // Merge all markdown content
    const mergedContent = mergeMarkdownContent(pages);
    
    // Combine TOC and content
    const fullContent = toc + mergedContent;

    // Save as a single file
    const fileName = `documentation_${timestamp}.md`;
    const filePath = path.join(domainPath, fileName);
    await fs.writeFile(filePath, fullContent);
    console.log('Saved merged documentation to:', filePath);

    // Save metadata
    const metadataPath = path.join(domainPath, 'metadata.json');
    const metadata = {
      url: pages[0].url,
      domain,
      lastScraped: timestamp,
      totalPages: pages.length,
      successfulPages: pages.filter((p: any) => p.content !== 'No content available').length,
      failedPages: pages
        .filter((p: any) => p.content === 'No content available')
        .map((p: any) => p.url),
      structure: pages.map(p => ({
        type: p.type,
        url: p.url
      }))
    };
    
    console.log('Saving metadata:', metadata);
    await fs.writeJSON(metadataPath, metadata);

    // Clean up old individual files
    const existingFiles = await fs.readdir(domainPath);
    for (const file of existingFiles) {
      if (file.endsWith('.md') && !file.startsWith('documentation_')) {
        await fs.remove(path.join(domainPath, file));
      }
    }

    res.json({ 
      success: true, 
      filePath,
      structure: metadata.structure
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
      console.log('Storage directory does not exist, creating it');
      await fs.ensureDir(STORAGE_PATH);
      return res.json({ docs: [], urls: [], totalDocs: 0 });
    }

    const domains = await fs.readdir(STORAGE_PATH);
    console.log('Found domains:', domains);
    
    const allDocs: any[] = [];
    const allUrls: any[] = [];

    for (const fullDomain of domains) {
      const domainPath = path.join(STORAGE_PATH, fullDomain);
      const metadataPath = path.join(domainPath, 'metadata.json');
      
      try {
        // Check for existing individual files that need to be merged
        const existingPages = await mergeExistingFiles(domainPath);
        if (existingPages.length > 0) {
          console.log('Found existing files to merge:', existingPages.length);
          const timestamp = new Date().toISOString();
          
          // Generate and save merged content
          const toc = generateTableOfContents(existingPages);
          const mergedContent = mergeMarkdownContent(existingPages);
          const fullContent = toc + mergedContent;
          
          const fileName = `documentation_${timestamp}.md`;
          const filePath = path.join(domainPath, fileName);
          await fs.writeFile(filePath, fullContent);
          
          // Update metadata
          const metadata = {
            url: fullDomain,
            domain: fullDomain,
            lastScraped: timestamp,
            totalPages: existingPages.length,
            successfulPages: existingPages.length,
            failedPages: [],
            structure: existingPages.map(p => ({
              type: p.type,
              url: null
            }))
          };
          await fs.writeJSON(metadataPath, metadata);
          
          // Clean up old files
          const files = await fs.readdir(domainPath);
          for (const file of files) {
            if (file.endsWith('.md') && !file.startsWith('documentation_')) {
              await fs.remove(path.join(domainPath, file));
            }
          }
          
          allDocs.push({
            content: fullContent,
            domain: fullDomain,
            lastUpdated: timestamp,
            url: fullDomain,
            filePath,
            structure: metadata.structure
          });
          
          allUrls.push(metadata);
          continue;
        }
        
        // Handle already merged documentation
        if (await fs.pathExists(metadataPath)) {
          console.log('Reading metadata:', metadataPath);
          const metadata = await fs.readJSON(metadataPath);
          allUrls.push(metadata);

          const files = await fs.readdir(domainPath);
          console.log('Found files in domain:', files);

          const docFile = files
            .filter(f => f.startsWith('documentation_') && f.endsWith('.md'))
            .sort()
            .pop();

          if (docFile) {
            const filePath = path.join(domainPath, docFile);
            console.log('Reading documentation file:', filePath);
            const content = await fs.readFile(filePath, 'utf-8');
            
            allDocs.push({
              content,
              domain: fullDomain,
              lastUpdated: metadata.lastScraped,
              url: metadata.url,
              filePath,
              structure: metadata.structure || []
            });
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

   await generateSitemap("https:docingest.com", allUrls);
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


const BATCH_SIZE = 100; // Process 100 domains at a time



function generateSitemapXML(urls: Array<{
    url: string;
    changefreq: string;
    priority: number;
    lastmod?: string;
}>): string {
    const urlElements = urls.map(entry => {
        const lastmod = entry.lastmod ? `\n            <lastmod>${entry.lastmod}</lastmod>` : '';
        return `
        <url>
            <loc>${entry.url}</loc>
            <changefreq>${entry.changefreq}</changefreq>
            <priority>${entry.priority}</priority>${lastmod}
        </url>`;
    }).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlElements}
</urlset>`;
}



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
      console.log('Storage directory does not exist, creating it');
      await fs.ensureDir(STORAGE_PATH);
      return res.json({ docs: [], urls: [], totalDocs: 0 });
    }

    const domains = await fs.readdir(STORAGE_PATH);
    console.log('Found domains:', domains);
    
    const allDocs: any[] = [];
    const allUrls: any[] = [];

    for (const fullDomain of domains) {
      const domainPath = path.join(STORAGE_PATH, fullDomain);
      const metadataPath = path.join(domainPath, 'metadata.json');
      
      try {
        // Check for existing individual files that need to be merged
        const existingPages = await mergeExistingFiles(domainPath);
        if (existingPages.length > 0) {
          console.log('Found existing files to merge:', existingPages.length);
          const timestamp = new Date().toISOString();
          
          // Generate and save merged content
          const toc = generateTableOfContents(existingPages);
          const mergedContent = mergeMarkdownContent(existingPages);
          const fullContent = toc + mergedContent;
          
          const fileName = `documentation_${timestamp}.md`;
          const filePath = path.join(domainPath, fileName);
          await fs.writeFile(filePath, fullContent);
          
          // Update metadata
          const metadata = {
            url: fullDomain,
            domain: fullDomain,
            lastScraped: timestamp,
            totalPages: existingPages.length,
            successfulPages: existingPages.length,
            failedPages: [],
            structure: existingPages.map(p => ({
              type: p.type,
              url: null
            }))
          };
          await fs.writeJSON(metadataPath, metadata);
          
          // Clean up old files
          const files = await fs.readdir(domainPath);
          for (const file of files) {
            if (file.endsWith('.md') && !file.startsWith('documentation_')) {
              await fs.remove(path.join(domainPath, file));
            }
          }
          
          allDocs.push({
            content: fullContent,
            domain: fullDomain,
            lastUpdated: timestamp,
            url: fullDomain,
            filePath,
            structure: metadata.structure
          });
          
          allUrls.push(metadata);
          continue;
        }
        
        // Handle already merged documentation
        if (await fs.pathExists(metadataPath)) {
          console.log('Reading metadata:', metadataPath);
          const metadata = await fs.readJSON(metadataPath);
          allUrls.push(metadata);

          const files = await fs.readdir(domainPath);
          console.log('Found files in domain:', files);

          const docFile = files
            .filter(f => f.startsWith('documentation_') && f.endsWith('.md'))
            .sort()
            .pop();

          if (docFile) {
            const filePath = path.join(domainPath, docFile);
            console.log('Reading documentation file:', filePath);
            const content = await fs.readFile(filePath, 'utf-8');
            
            allDocs.push({
              content,
              domain: fullDomain,
              lastUpdated: metadata.lastScraped,
              url: metadata.url,
              filePath,
              structure: metadata.structure || []
            });
          }
        }
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
      console.log(`  - lastScraped: ${(doc.lastScraped)} (${typeof doc.lastScraped})`);
      console.log(`  - ISO parse: ${new Date(doc.lastUpdated || doc.lastScraped || 0).toISOString()}`);
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

    const domains = await fs.readdir(STORAGE_PATH);
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
        
        const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf-8'));
        
        // Check if domain name matches search query
        const domainLower = fullDomain.toLowerCase();
        const domainParts = domainLower.split(/[.\-_]/);
        const isPrefixStart = domainLower.startsWith(query);
        // Check if query is at the start of any domain part (e.g., "on" at start of "onchain" in "example.onchain.xyz")
        const isPartPrefix = !isPrefixStart && domainParts.some(part => part.startsWith(query));
        
        // Prepare document data
        const docFile = files
          .filter(f => f.startsWith('documentation_') && f.endsWith('.md'))
          .sort()
          .pop();

        if (docFile && domainLower.includes(query)) {
          const filePath = path.join(domainPath, docFile);
          const content = await fs.readFile(filePath, 'utf-8');
          
          const docEntry = {
            content,
            domain: fullDomain,
            lastUpdated: metadata.lastScraped,
            url: metadata.url,
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

    const domains = await fs.readdir(STORAGE_PATH);
    console.log('Found domains:', domains);

    // Filter domains based on the search query
    const matches = domains.filter(domain => domain.toLowerCase().includes(query));

    console.log(`Found ${matches.length} matches for query: "${query}"`);

    res.json({ matches, totalMatches: matches.length });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ success: false, error: 'Failed to perform search' });
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
    // Check cache
    let cached = mdCache.get(safePath);
    let stat = await fs.stat(safePath);
    const now = Date.now();
    if (!cached || cached.mtime !== stat.mtimeMs || now - cached.cachedAt > CACHE_TTL) {
      const content = await fs.readFile(safePath, 'utf-8');
      const etag = crypto.createHash('md5').update(content).digest('hex');
      cached = { content, etag, mtime: stat.mtimeMs, cachedAt: now };
      mdCache.set(safePath, cached);
    }
    // ETag/Last-Modified support
    res.setHeader('ETag', cached.etag);
    res.setHeader('Last-Modified', new Date(cached.mtime).toUTCString());
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

// Get documentation by domain
app.get('/api/docs/domain/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    
    // Try different domain formats
    const possibleDomains = [
      domain,                                    // As provided
      `docs.${domain}.ai`,                      // Full storage format
      `docs.${domain}`,                         // Partial storage format
      domain.replace(/^docs\./, ''),            // Without docs prefix
      domain.replace(/\.ai$/, ''),              // Without ai suffix
      domain.replace(/^docs\./, '').replace(/\.ai$/, ''), // Clean domain
      `${domain}.ai`,                            // With ai suffix
      domain.replace(/^https?:\/\//, '').replace(/\/$/, ''),
      // only link without https and / and www
      domain.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, ''),
    ].filter((d, i, arr) => arr.indexOf(d) === i); // Remove duplicates

    let foundDomain = null;
    let docsPath = null;

    // Try each possible domain format
    for (const d of possibleDomains) {
      const testPath = path.join(STORAGE_PATH, d);
      console.log('Trying path:', testPath);
      if (fs.existsSync(testPath)) {
        foundDomain = d;
        docsPath = testPath;
        console.log('Found matching domain:', d);
        break;
      }
    }

    if (!docsPath) {
      console.log('No matching domain found for:', domain);
      console.log('Tried formats:', possibleDomains);
      return res.status(404).json({ error: 'Documentation not found' });
    }

    // Read the metadata file
    const metadataPath = path.join(docsPath, 'metadata.json');
    if (!fs.existsSync(metadataPath)) {
      console.log('Metadata file not found at:', metadataPath);
      return res.status(404).json({ error: 'Documentation metadata not found' });
    }

    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    
    // Find the latest documentation file
    const files = await fs.readdir(docsPath);
    const docFiles = files.filter(f => f.startsWith('documentation_'));
    console.log('Found documentation files:', docFiles);
    
    const docFile = docFiles.sort().pop();

    if (!docFile) {
      console.log('No documentation file found in:', docsPath);
      return res.status(404).json({ error: 'Documentation content not found' });
    }

    const markdownPath = path.join(docsPath, docFile);
    console.log('Reading documentation from:', markdownPath);
    const content = fs.readFileSync(markdownPath, 'utf-8');

    res.json({
      domain: foundDomain,
      content,
      lastUpdated: metadata.lastScraped,
      url: metadata.url,
      filePath: markdownPath,
      structure: metadata.structure || []
    });
  } catch (err) {
    console.error('Error fetching documentation by domain:', err);
    res.status(500).json({ error: 'Failed to fetch documentation' });
  }
});

// search api by domain or something oin content.. should match any word 


// check if domain already exixts and no need to scrap
app.get('/api/docs/check-domain/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    
    // Try different domain formats
    const possibleDomains = [
      domain,                                    // As provided
      `docs.${domain}.ai`                       // Full storage format
    ].filter((d, i, arr) => arr.indexOf(d) === i); // Remove duplicates

    let foundDomain = null;
    let docsPath = null;

    // Try each possible domain format
    for (const d of possibleDomains) {
      const testPath = path.join(STORAGE_PATH, d);
      console.log('Trying path:', testPath);
      if (fs.existsSync(testPath)) {
        foundDomain = d;
        docsPath = testPath;
        console.log('Found matching domain:', d);
        break;
      }
    }

    if (!docsPath) {
      console.log('No matching domain found for:', domain);
      console.log('Tried formats:', possibleDomains);
      return res.status(404).json({ error: 'Documentation not found' });
    }

    // Read the metadata file
    const metadataPath = path.join(docsPath, 'metadata.json');
    if (!fs.existsSync(metadataPath)) {
      console.log('Metadata file not found at:', metadataPath);
      return res.status(404).json({ error: 'Documentation metadata not found' });
    }

    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    
    // Find the latest documentation file
    const files = await fs.readdir(docsPath);
    const docFiles = files.filter(f => f.startsWith('documentation_'));
    console.log('Found documentation files:', docFiles);
    
    const docFile = docFiles.sort().pop();

    if (!docFile) {
      console.log('No documentation file found in:', docsPath);
      return res.status(404).json({ error: 'Documentation content not found' });
    }

    const markdownPath = path.join(docsPath, docFile);
    console.log('Reading documentation from:', markdownPath);
    const content = fs.readFileSync(markdownPath, 'utf-8');

    res.json({
      domain: foundDomain,
      content,
      lastUpdated: metadata.lastScraped,
      url: metadata.url,
      filePath: markdownPath,
      structure: metadata.structure || []
    });
  } catch (err) {
    console.error('Error fetching documentation by domain:', err);
    res.status(500).json({ error: 'Failed to fetch documentation' });
  }
});

// search api by domain or something oin content.. should match any word 


// check if domain already exixts and no need to scrap
app.get('/api/docs/check-domain/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    
    // Try different domain formats
    const possibleDomains = [
      domain,                                    // As provided
      `docs.${domain}.ai`,                      // Full storage format
    ].filter((d, i, arr) => arr.indexOf(d) === i); // Remove duplicates

    let foundDomain = null;
    let docsPath = null;

    // Try each possible domain format
    for (const d of possibleDomains) {
      const testPath = path.join(STORAGE_PATH, d);
      console.log('Trying path:', testPath);
      if (fs.existsSync(testPath)) {
        foundDomain = d;
        docsPath = testPath;
        console.log('Found matching domain:', d);
        break;
      }
    }

    if (!docsPath) {
      console.log('No matching domain found for:', domain);
      console.log('Tried formats:', possibleDomains);
      return res.status(404).json({ error: 'Documentation not found' });
    }

    // Read the metadata file
    const metadataPath = path.join(docsPath, 'metadata.json');
    if (!fs.existsSync(metadataPath)) {
      console.log('Metadata file not found at:', metadataPath);
      return res.status(404).json({ error: 'Documentation metadata not found' });
    }

    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    
    // Find the latest documentation file
    const files = await fs.readdir(docsPath);
    const docFiles = files.filter(f => f.startsWith('documentation_'));
    console.log('Found documentation files:', docFiles);
    
    const docFile = docFiles.sort().pop();

    if (!docFile) {
      console.log('No documentation file found in:', docsPath);
      return res.status(404).json({ error: 'Documentation content not found' });
    }

    const markdownPath = path.join(docsPath, docFile);
    console.log('Reading documentation from:', markdownPath);
    const content = fs.readFileSync(markdownPath, 'utf-8');

    res.json({
      domain: foundDomain,
      content,
      lastUpdated: metadata.lastScraped,
      url: metadata.url,
      filePath: markdownPath,
      structure: metadata.structure || []
    });
  } catch (err) {
    console.error('Error fetching documentation by domain:', err);
    res.status(500).json({ error: 'Failed to fetch documentation' });
  }
});

// search api by domain or something oin content.. should match any word

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
      const suggestions = await autocompleteSearch(query, limit);

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
    const domains = await fs.readdir(STORAGE_PATH);
    const queryLower = query.toLowerCase();

    const matches = domains
      .filter(d => d.toLowerCase().includes(queryLower))
      .slice(0, limit)
      .map(domain => ({
        domain,
        title: domain.replace(/^docs\./, '').replace(/\.(com|org|io|dev|ai)$/, ''),
        snippet: '',
        url: `https://${domain}`,
        matchType: domain.toLowerCase().startsWith(queryLower) ? 'prefix' : 'contains',
      }));

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

      trackSearch(query);

      return res.json({
        results: domains,
        query,
        timing,
        source: 'redis',
        totalMatches: domains.length,
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
    const stats = await getIndexStats();

    // If Redis is not connected, count domains from filesystem
    if (!stats.redisConnected || stats.totalDomains === 0) {
      try {
        if (await fs.pathExists(STORAGE_PATH)) {
          const domains = await fs.readdir(STORAGE_PATH);
          // Filter out hidden files/folders
          const validDomains = domains.filter(d => !d.startsWith('.'));
          stats.totalDomains = validDomains.length;
        }
      } catch (fsError) {
        console.error('Filesystem count error:', fsError);
      }
    }

    res.json(stats);
  } catch (error) {
    console.error('Index stats error:', error);
    res.status(500).json({ error: 'Failed to get index stats' });
  }
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