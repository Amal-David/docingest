import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Check domain route
router.get('/check-domain/:url', async (req, res) => {
  try {
    // Decode the URL parameter
    const decodedUrl = decodeURIComponent(req.params.url);
    
    // Extract domain from URL
    const urlObj = new URL(decodedUrl);
    const hostname = urlObj.hostname;
    const pathname = urlObj.pathname;

    // Clean up the domain for file system
    const domainKey = hostname.replace(/^www\./, '');
    
    // Check if documentation exists for this domain
    const docsPath = path.join(__dirname, '../storage/docs', domainKey);
    
    if (!fs.existsSync(docsPath)) {
      return res.json({ found: false });
    }

    // If docs exist, check metadata for the specific path
    const metadataPath = path.join(docsPath, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      
      // Check if this specific path was ingested
      const pathMatch = metadata.ingestedPaths?.some((p: string) => 
        pathname.startsWith(p) || p.startsWith(pathname)
      );

      return res.json({ 
        found: true,
        exactMatch: pathMatch || false,
        domain: domainKey
      });
    }

    res.json({ found: false });
  } catch (error) {
    console.error('Error checking domain:', error);
    res.status(500).json({ error: 'Failed to check domain' });
  }
});

// List docs route
router.get('/list', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const docsPath = path.join(__dirname, '../storage/docs');
    const domains = fs.readdirSync(docsPath);
    
    const docs = [];
    for (const domain of domains.slice(offset, offset + limit)) {
      const metadataPath = path.join(docsPath, domain, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        docs.push({
          domain,
          ...metadata
        });
      }
    }

    res.json({
      docs,
      totalDocs: domains.length,
      page,
      totalPages: Math.ceil(domains.length / limit)
    });
  } catch (error) {
    console.error('Error listing docs:', error);
    res.status(500).json({ error: 'Failed to list documentation' });
  }
});

export default router; 