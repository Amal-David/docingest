import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 8001;
const MAX_PAYLOAD_SIZE = process.env.MAX_PAYLOAD_SIZE || '500mb';

// Increase payload size limit
app.use(express.json({ limit: MAX_PAYLOAD_SIZE }));
app.use(express.urlencoded({ limit: MAX_PAYLOAD_SIZE, extended: true }));
app.use(cors());

// Storage path - using absolute path from project root
const STORAGE_PATH = path.join(process.cwd(), 'storage', 'docs');
const DOCS_DIR = STORAGE_PATH;
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

// List saved documentation
app.get('/api/docs/list', async (req, res) => {
  try {
    console.log('Reading storage directory:', STORAGE_PATH);
    
    if (!await fs.pathExists(STORAGE_PATH)) {
      console.log('Storage directory does not exist, creating it');
      await fs.ensureDir(STORAGE_PATH);
      return res.json({ docs: [], urls: [] });
    }

    const domains = await fs.readdir(STORAGE_PATH);
    console.log('Found domains:', domains);
    
    const docs: any[] = [];
    const urls: any[] = [];

    for (const fullDomain of domains) {
      if (fullDomain === '.gitkeep') continue;
      
      const domainPath = path.join(STORAGE_PATH, fullDomain);
      const stats = await fs.stat(domainPath);
      if (!stats.isDirectory()) continue;
      
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
          
          docs.push({
            content: fullContent,
            domain: fullDomain,
            lastUpdated: timestamp,
            url: fullDomain,
            filePath,
            structure: metadata.structure
          });
          
          urls.push(metadata);
          continue;
        }
        
        // Handle already merged documentation
        if (await fs.pathExists(metadataPath)) {
          console.log('Reading metadata:', metadataPath);
          const metadata = await fs.readJSON(metadataPath);
          urls.push(metadata);

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
            
            docs.push({
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

    console.log(`Found ${docs.length} documents and ${urls.length} URLs`);
    res.json({ docs, urls });
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ success: false, error: 'Failed to list documentation' });
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
      `${domain}.ai`                            // With ai suffix
    ].filter((d, i, arr) => arr.indexOf(d) === i); // Remove duplicates

    let foundDomain = null;
    let docsPath = null;

    // Try each possible domain format
    for (const d of possibleDomains) {
      const testPath = path.join(STORAGE_PATH, d);
      console.log('Trying path:', testPath);
      if (await fs.pathExists(testPath)) {
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
    if (!await fs.pathExists(metadataPath)) {
      console.log('Metadata file not found at:', metadataPath);
      return res.status(404).json({ error: 'Documentation metadata not found' });
    }

    const metadata = await fs.readJSON(metadataPath);
    
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
    const content = await fs.readFile(markdownPath, 'utf-8');

    res.json({
      domain: foundDomain,
      content,
      lastUpdated: metadata.lastScraped,
      url: metadata.url,
      filePath: markdownPath,
      structure: metadata.structure || [],
      totalPages: metadata.totalPages,
      successfulPages: metadata.successfulPages
    });
  } catch (err) {
    console.error('Error fetching documentation by domain:', err);
    res.status(500).json({ error: 'Failed to fetch documentation' });
  }
});

// Get file content
app.get('/api/docs/content', async (req, res) => {
  try {
    const filePath = req.query.path as string;
    if (!filePath) {
      return res.status(400).json({ success: false, error: 'No file path provided' });
    }

    if (!await fs.pathExists(filePath)) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    const content = await fs.readFile(filePath, 'utf-8');
    res.send(content);
  } catch (error) {
    console.error('Content error:', error);
    res.status(500).json({ success: false, error: 'Failed to read file content' });
  }
});

// Download file
app.get('/api/docs/download', async (req, res) => {
  try {
    const filePath = req.query.path as string;
    if (!filePath) {
      return res.status(400).json({ success: false, error: 'No file path provided' });
    }

    if (!await fs.pathExists(filePath)) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    res.download(filePath);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ success: false, error: 'Failed to download file' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Storage directory:', STORAGE_PATH);
}); 