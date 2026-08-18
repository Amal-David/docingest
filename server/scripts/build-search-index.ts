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
  removeDomainFromIndex,
  type DomainMeta,
} from '../lib/redis';
import { listDomainDirectories, readApprovedDomain } from '../lib/corpus';

const STORAGE_PATH = path.join(process.cwd(), 'storage', 'docs');

interface IndexStats {
  total: number;
  indexed: number;
  failed: number;
  skipped: number;
  /** Domains dropped from the index because they are no longer servable. */
  removed: number;
  startTime: number;
}

const stats: IndexStats = {
  total: 0,
  indexed: 0,
  failed: 0,
  skipped: 0,
  removed: 0,
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

async function indexSingleDomain(domainName: string): Promise<boolean> {
  try {
    // The API only serves domains with an approved snapshot, and only that
    // snapshot's content. Indexing anything else puts results in search that
    // /docs/:domain then refuses, or indexes text the reader never sees.
    const approved = await readApprovedDomain(STORAGE_PATH, domainName);
    if (!approved) {
      // A rebuild has to reconcile removals too. A domain that was indexed
      // before it lost approval would otherwise stay searchable forever.
      const removed = await removeDomainFromIndex(domainName);
      if (removed) {
        log(`  [DROP] ${domainName} is no longer servable, removed from index`);
        stats.removed++;
      } else {
        log(`  [SKIP] ${domainName} has no approved snapshot to serve`);
        stats.skipped++;
      }
      return false;
    }

    const content = await fs.readFile(approved.contentPath, 'utf-8');
    const domainMeta: DomainMeta = {
      domain: domainName,
      url: approved.snapshot.sourceUrl || approved.metadata.url || `https://${domainName}`,
      title: extractTitle(content, domainName),
      snippet: extractSnippet(content),
      lastScraped: approved.snapshot.capturedAt,
      totalPages: approved.snapshot.totalPages || 0,
      successfulPages: approved.snapshot.successfulPages || 0,
    };

    await indexDomain(domainMeta);
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
  const domains = await listDomainDirectories(STORAGE_PATH);
  stats.total = domains.length;
  console.log(`  Found ${stats.total} domains to index\n`);

  // Process domains sequentially to avoid overwhelming Redis
  // Use smaller batches processed sequentially with delays
  const BATCH_SIZE = 10;
  for (let i = 0; i < domains.length; i += BATCH_SIZE) {
    const batch = domains.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(domains.length / BATCH_SIZE);

    if (!verbose) {
      process.stdout.write(`  Processing batch ${batchNum}/${totalBatches}... `);
    }

    // Process batch sequentially (not in parallel) to reduce Redis load
    for (const domain of batch) {
      try {
        await indexSingleDomain(domain);
        // Small delay between domains
        await new Promise(resolve => setTimeout(resolve, 50));
      } catch (err) {
        console.error(`\n  Error indexing ${domain}:`, err);
      }
    }

    // Delay between batches to prevent connection overload
    if (i + BATCH_SIZE < domains.length) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }

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
  console.log(`  Removed:           ${stats.removed}`);
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
