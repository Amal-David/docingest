import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8001;
const MAX_PAYLOAD_SIZE = process.env.MAX_PAYLOAD_SIZE || '100mb';

// Increase payload size limit
app.use(express.json({ limit: MAX_PAYLOAD_SIZE }));
app.use(express.urlencoded({ limit: MAX_PAYLOAD_SIZE, extended: true }));
app.use(cors());

interface DocumentMetadata {
  domain: string;
  timestamp: number;
  url: string;
  type: string;
  title?: string;
  size?: number;
}

const DOCS_DIR = path.join(__dirname, 'storage', 'docs');
const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;

// Helper function to get primary domain
const getPrimaryDomain = (domain: string): string => {
  return domain.replace(/^docs\./, '').replace(/\.ai$/, '');
};

// Helper function to check if documentation exists and is recent
const checkExistingDocumentation = async (domain: string): Promise<{ exists: boolean; isRecent: boolean; metadata?: DocumentMetadata }> => {
  try {
    const metadataPath = path.join(DOCS_DIR, domain, 'metadata.json');
    const metadataContent = await fs.readFile(metadataPath, 'utf-8');
    const metadata: DocumentMetadata = JSON.parse(metadataContent);
    
    const now = Date.now();
    const isRecent = (now - metadata.timestamp) < TEN_DAYS_MS;
    
    return { exists: true, isRecent, metadata };
  } catch (error) {
    return { exists: false, isRecent: false };
  }
};

// Save documentation with metadata
const saveDocumentation = async (domain: string, content: string, metadata: DocumentMetadata) => {
  const domainDir = path.join(DOCS_DIR, domain);
  await fs.mkdir(domainDir, { recursive: true });
  
  // Calculate content size
  const contentSize = Buffer.byteLength(content, 'utf8');
  
  // Save metadata with timestamp and size
  await fs.writeFile(
    path.join(domainDir, 'metadata.json'),
    JSON.stringify({ 
      ...metadata, 
      timestamp: Date.now(),
      size: contentSize 
    }, null, 2)
  );
  
  // Save content
  await fs.writeFile(path.join(domainDir, 'documentation.md'), content);
};

app.post('/api/docs/save', async (req, res) => {
  try {
    const { domain, content, url, type, title } = req.body;
    if (!domain || !content) {
      return res.status(400).json({ error: 'Domain and content are required' });
    }

    await saveDocumentation(domain, content, { domain, timestamp: Date.now(), url, type, title });
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving documentation:', error);
    res.status(500).json({ error: 'Failed to save documentation' });
  }
});

app.get('/api/docs/check/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    const result = await checkExistingDocumentation(domain);
    res.json(result);
  } catch (error) {
    console.error('Error checking documentation:', error);
    res.status(500).json({ error: 'Failed to check documentation' });
  }
});

// List only metadata
app.get('/api/docs/list', async (req, res) => {
  try {
    const domains = await fs.readdir(DOCS_DIR);
    const docsPromises = domains.map(async (domain) => {
      try {
        const metadataPath = path.join(DOCS_DIR, domain, 'metadata.json');
        const metadataContent = await fs.readFile(metadataPath, 'utf-8');
        return JSON.parse(metadataContent);
      } catch (error) {
        return null;
      }
    });

    const docs = (await Promise.all(docsPromises)).filter(Boolean);
    res.json(docs);
  } catch (error) {
    console.error('Error listing documentation:', error);
    res.status(500).json({ error: 'Failed to list documentation' });
  }
});

// Get content by domain
app.get('/api/docs/content/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    const formattedDomain = `docs.${getPrimaryDomain(domain)}.ai`;
    const docPath = path.join(DOCS_DIR, formattedDomain, 'documentation.md');

    const content = await fs.readFile(docPath, 'utf-8');
    res.json({ content });
  } catch (error) {
    console.error('Error retrieving content:', error);
    res.status(404).json({ error: 'Documentation content not found' });
  }
});

// Get metadata and content by domain
app.get('/api/docs/domain/:domain', async (req, res) => {
  try {
    const { domain } = req.params;
    const formattedDomain = `docs.${getPrimaryDomain(domain)}.ai`;
    const docPath = path.join(DOCS_DIR, formattedDomain, 'documentation.md');
    const metadataPath = path.join(DOCS_DIR, formattedDomain, 'metadata.json');

    try {
      const content = await fs.readFile(docPath, 'utf-8');
      const metadataContent = await fs.readFile(metadataPath, 'utf-8');
      const metadata = JSON.parse(metadataContent);
      
      res.json({ content, metadata });
    } catch (error) {
      res.status(404).json({ error: 'Documentation not found' });
    }
  } catch (error) {
    console.error('Error retrieving documentation:', error);
    res.status(500).json({ error: 'Failed to retrieve documentation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 