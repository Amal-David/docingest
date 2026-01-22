#!/usr/bin/env ts-node

/**
 * Build Search Index Script
 *
 * Indexes all documentation from server/storage/docs into Redis for fast autocomplete.
 *
 * Usage:
 *   npx ts-node scripts/build-search-index.ts
 *
 * Options:
 *   --clear     Clear existing index before building
 *   --verbose   Show detailed progress
 */

import fs from 'fs-extra';
import path from 'path';
import {
  initRedis,
  closeRedis,
  indexDomain,
  indexContentChunks,
  clearIndex,
  getIndexStats,
  type DomainMeta,
} from '../lib/redis';

const STORAGE_PATH = path.join(process.cwd(), 'storage', 'docs');

interface MetadataFile {
  url: string;
  domain: string;
  lastScraped: string;
  totalPages: number;
  successfulPages: number;
  failedPages: string[];
  structure?: Array<{ type: string; url: string }>;
}

interface IndexStats {
  total: number;
  indexed: number;
  failed: number;
  skipped: number;
  startTime: number;
}

const stats: IndexStats = {
  total: 0,
  indexed: 0,
  failed: 0,
  skipped: 0,
  startTime: Date.now(),
};

const args = process.argv.slice(2);
const shouldClear = args.includes('--clear');
const verbose = args.includes('--verbose');

function log(message: string, force = false): void {
  if (verbose || force) {
    console.log(message);
  }
}

function extractSnippet(content: string): string {
  // Remove markdown formatting for cleaner snippet
  let snippet = content
    .replace(/^#.*$/gm, '') // Remove headers
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
    .replace(/[*_~`]/g, '') // Remove formatting chars
    .replace(/\n+/g, ' ') // Collapse newlines
    .trim();

  // Get first meaningful paragraph
  const sentences = snippet.split(/[.!?]+/).filter(s => s.trim().length > 20);
  snippet = sentences.slice(0, 3).join('. ').trim();

  return snippet.slice(0, 500) || 'Documentation available';
}

function extractTitle(content: string, domain: string): string {
  // Try to find first h1
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    return h1Match[1].trim();
  }

  // Try to find title in content
  const titleMatch = content.match(/title[:\s]+([^\n]+)/i);
  if (titleMatch) {
    return titleMatch[1].trim();
  }

  // Fallback: format domain as title
  return domain
    .replace(/^docs\./, '')
    .replace(/\.(com|org|io|dev|ai|xyz)$/, '')
    .split(/[.\-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function indexSingleDomain(domainDir: string): Promise<boolean> {
  const domainName = path.basename(domainDir);

  try {
    // Read metadata
    const metadataPath = path.join(domainDir, 'metadata.json');
    if (!await fs.pathExists(metadataPath)) {
      log(`  [SKIP] No metadata.json for ${domainName}`);
      stats.skipped++;
      return false;
    }

    const metadata: MetadataFile = await fs.readJSON(metadataPath);

    // Find latest documentation file
    const files = await fs.readdir(domainDir);
    const docFiles = files
      .filter(f => f.startsWith('documentation_') && f.endsWith('.md'))
      .sort()
      .reverse();

    if (docFiles.length === 0) {
      log(`  [SKIP] No documentation file for ${domainName}`);
      stats.skipped++;
      return false;
    }

    // Read content
    const docPath = path.join(domainDir, docFiles[0]);
    const content = await fs.readFile(docPath, 'utf-8');

    // Extract snippet and title
    const snippet = extractSnippet(content);
    const title = extractTitle(content, domainName);

    // Create domain metadata
    const domainMeta: DomainMeta = {
      domain: domainName,
      url: metadata.url || `https://${domainName}`,
      title,
      snippet,
      lastScraped: metadata.lastScraped || new Date().toISOString(),
      totalPages: metadata.totalPages || 0,
      successfulPages: metadata.successfulPages || 0,
    };

    // Index domain
    await indexDomain(domainMeta);

    // Index content chunks for full-text search
    await indexContentChunks(domainName, content);

    log(`  [OK] ${domainName} (${content.length} chars)`);
    stats.indexed++;
    return true;
  } catch (err) {
    console.error(`  [FAIL] ${domainName}:`, err instanceof Error ? err.message : err);
    stats.failed++;
    return false;
  }
}

async function buildIndex(): Promise<void> {
  console.log('='.repeat(60));
  console.log('DocIngest Search Index Builder');
  console.log('='.repeat(60));

  // Check if storage exists
  if (!await fs.pathExists(STORAGE_PATH)) {
    console.error(`Storage path not found: ${STORAGE_PATH}`);
    process.exit(1);
  }

  // Initialize Redis
  console.log('\n[1/4] Connecting to Redis...');
  const connected = await initRedis();
  if (!connected) {
    console.error('Failed to connect to Redis. Is it running?');
    console.log('Start Redis with: docker-compose up -d redis');
    process.exit(1);
  }
  console.log('  Connected to Redis');

  // Clear existing index if requested
  if (shouldClear) {
    console.log('\n[2/4] Clearing existing index...');
    await clearIndex();
    console.log('  Index cleared');
  } else {
    console.log('\n[2/4] Keeping existing index (use --clear to rebuild)');
  }

  // Get list of domains
  console.log('\n[3/4] Indexing documentation...');
  const domains = await fs.readdir(STORAGE_PATH);
  stats.total = domains.length;
  console.log(`  Found ${stats.total} domains to index\n`);

  // Process domains in batches
  const BATCH_SIZE = 50;
  for (let i = 0; i < domains.length; i += BATCH_SIZE) {
    const batch = domains.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(domains.length / BATCH_SIZE);

    if (!verbose) {
      process.stdout.write(`  Processing batch ${batchNum}/${totalBatches}... `);
    }

    await Promise.all(
      batch.map(domain =>
        indexSingleDomain(path.join(STORAGE_PATH, domain))
      )
    );

    if (!verbose) {
      console.log('done');
    }
  }

  // Show final stats
  console.log('\n[4/4] Index complete!');
  const redisStats = await getIndexStats();
  const elapsed = ((Date.now() - stats.startTime) / 1000).toFixed(2);

  console.log('\n' + '='.repeat(60));
  console.log('Summary:');
  console.log('='.repeat(60));
  console.log(`  Total domains:     ${stats.total}`);
  console.log(`  Indexed:           ${stats.indexed}`);
  console.log(`  Skipped:           ${stats.skipped}`);
  console.log(`  Failed:            ${stats.failed}`);
  console.log(`  Time elapsed:      ${elapsed}s`);
  console.log(`  Redis memory:      ${redisStats.memoryUsage}`);
  console.log(`  Domains in index:  ${redisStats.totalDomains}`);
  console.log('='.repeat(60));

  // Cleanup
  await closeRedis();
}

// Run the script
buildIndex().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
