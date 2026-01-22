#!/usr/bin/env npx tsx
/**
 * Migration Script: Migrate legacy metadata to V2 versioning format
 *
 * Usage:
 *   npx tsx server/scripts/migrate-to-versioning.ts [options]
 *
 * Options:
 *   --dry-run    Show what would be migrated without making changes
 *   --domain     Migrate only a specific domain
 *   --verbose    Show detailed output
 *
 * Examples:
 *   npx tsx server/scripts/migrate-to-versioning.ts --dry-run
 *   npx tsx server/scripts/migrate-to-versioning.ts --domain example.com
 *   npx tsx server/scripts/migrate-to-versioning.ts --verbose
 */

import fs from 'fs-extra';
import path from 'path';
import { migrateMetadataToV2 } from '../lib/versioning';
import type { DomainMetadata, DomainMetadataV1 } from '../types/versioning';
import { hasVersioning } from '../types/versioning';

// Parse command line arguments
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const verbose = args.includes('--verbose');
const domainIndex = args.indexOf('--domain');
const specificDomain = domainIndex !== -1 ? args[domainIndex + 1] : null;

// Determine storage path
const isInServerDir = process.cwd().endsWith('/server') || process.cwd().endsWith('\\server');
const STORAGE_PATH = isInServerDir
  ? path.join(process.cwd(), 'storage', 'docs')
  : path.join(process.cwd(), 'server', 'storage', 'docs');

interface MigrationResult {
  domain: string;
  status: 'migrated' | 'skipped' | 'error' | 'already-v2';
  message: string;
  versionsCreated?: number;
}

async function migrateDomain(domainPath: string, domain: string): Promise<MigrationResult> {
  const metadataPath = path.join(domainPath, 'metadata.json');

  // Check if metadata exists
  if (!await fs.pathExists(metadataPath)) {
    return {
      domain,
      status: 'skipped',
      message: 'No metadata.json found',
    };
  }

  try {
    const rawMetadata = await fs.readJSON(metadataPath) as DomainMetadata;

    // Check if already V2
    if (hasVersioning(rawMetadata)) {
      return {
        domain,
        status: 'already-v2',
        message: `Already V2 with ${rawMetadata.versions.length} versions`,
        versionsCreated: rawMetadata.versions.length,
      };
    }

    // Migrate to V2
    const legacyMetadata = rawMetadata as DomainMetadataV1;
    const migratedMetadata = await migrateMetadataToV2(legacyMetadata, domainPath);

    if (dryRun) {
      return {
        domain,
        status: 'migrated',
        message: `Would migrate to V2 with ${migratedMetadata.versions.length} versions`,
        versionsCreated: migratedMetadata.versions.length,
      };
    }

    // Backup original metadata
    const backupPath = path.join(domainPath, 'metadata.v1.backup.json');
    if (!await fs.pathExists(backupPath)) {
      await fs.writeJSON(backupPath, rawMetadata, { spaces: 2 });
      if (verbose) {
        console.log(`  Backed up original to ${backupPath}`);
      }
    }

    // Write migrated metadata
    await fs.writeJSON(metadataPath, migratedMetadata, { spaces: 2 });

    return {
      domain,
      status: 'migrated',
      message: `Migrated to V2 with ${migratedMetadata.versions.length} versions`,
      versionsCreated: migratedMetadata.versions.length,
    };
  } catch (error) {
    return {
      domain,
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('Documentation Versioning Migration Script');
  console.log('='.repeat(60));
  console.log(`Storage path: ${STORAGE_PATH}`);
  console.log(`Mode: ${dryRun ? 'DRY RUN (no changes will be made)' : 'LIVE'}`);
  if (specificDomain) {
    console.log(`Target domain: ${specificDomain}`);
  }
  console.log('');

  // Check if storage path exists
  if (!await fs.pathExists(STORAGE_PATH)) {
    console.error(`Error: Storage path does not exist: ${STORAGE_PATH}`);
    process.exit(1);
  }

  // Get list of domains
  let domains: string[];
  if (specificDomain) {
    const domainPath = path.join(STORAGE_PATH, specificDomain);
    if (!await fs.pathExists(domainPath)) {
      console.error(`Error: Domain not found: ${specificDomain}`);
      process.exit(1);
    }
    domains = [specificDomain];
  } else {
    const allItems = await fs.readdir(STORAGE_PATH);
    domains = [];
    for (const item of allItems) {
      const itemPath = path.join(STORAGE_PATH, item);
      const stat = await fs.stat(itemPath);
      if (stat.isDirectory() && !item.startsWith('.')) {
        domains.push(item);
      }
    }
  }

  console.log(`Found ${domains.length} domain(s) to process\n`);

  // Process each domain
  const results: MigrationResult[] = [];
  let processed = 0;

  for (const domain of domains) {
    processed++;
    const domainPath = path.join(STORAGE_PATH, domain);

    if (verbose) {
      console.log(`[${processed}/${domains.length}] Processing: ${domain}`);
    }

    const result = await migrateDomain(domainPath, domain);
    results.push(result);

    if (verbose || result.status === 'error') {
      const statusIcon = {
        'migrated': '\u2713',
        'skipped': '-',
        'error': '\u2717',
        'already-v2': '\u25CB',
      }[result.status];
      console.log(`  ${statusIcon} ${result.message}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Migration Summary');
  console.log('='.repeat(60));

  const migrated = results.filter(r => r.status === 'migrated');
  const alreadyV2 = results.filter(r => r.status === 'already-v2');
  const skipped = results.filter(r => r.status === 'skipped');
  const errors = results.filter(r => r.status === 'error');

  console.log(`Total domains processed: ${results.length}`);
  console.log(`  Migrated:    ${migrated.length}`);
  console.log(`  Already V2:  ${alreadyV2.length}`);
  console.log(`  Skipped:     ${skipped.length}`);
  console.log(`  Errors:      ${errors.length}`);

  if (migrated.length > 0) {
    const totalVersions = migrated.reduce((sum, r) => sum + (r.versionsCreated || 0), 0);
    console.log(`\nTotal versions created: ${totalVersions}`);
  }

  if (errors.length > 0) {
    console.log('\nErrors:');
    for (const error of errors) {
      console.log(`  - ${error.domain}: ${error.message}`);
    }
  }

  if (dryRun) {
    console.log('\n[DRY RUN] No changes were made. Run without --dry-run to apply changes.');
  }

  console.log('');
}

main().catch(console.error);
