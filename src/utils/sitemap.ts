import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

interface SitemapUrl {
  url: string;
  changefreq: string;
  priority: number;
  lastmod?: string;
}

export async function generateSitemap(baseUrl: string, docDomains: string[]) {
  try {
    // Base URLs that are always present
    const staticUrls: SitemapUrl[] = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/view', changefreq: 'daily', priority: 0.8 },
    ];

    // Add doc URLs
    const docUrls: SitemapUrl[] = docDomains.map(domain => ({
      url: `/docs/${domain}`,
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
    fs.writeFileSync('./public/sitemap.xml', data);
    
    return true;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return false;
  }
} 