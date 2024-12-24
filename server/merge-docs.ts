import fs from 'fs-extra';
import path from 'path';

const STORAGE_PATH = path.join(process.cwd(), 'server', 'storage', 'docs');

const generateTableOfContents = (pages: any[]) => {
  let toc = '# Table of Contents\n\n';
  pages.forEach((page) => {
    const title = page.type;
    const anchor = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    toc += `- [${title}](#${anchor})\n`;
  });
  return toc + '\n---\n\n';
};

const mergeMarkdownContent = (pages: any[]) => {
  let content = '';
  pages.forEach((page) => {
    const title = page.type;
    content += `# ${title}\n\n${page.content}\n\n---\n\n`;
  });
  return content;
};

const mergeDocs = async () => {
  try {
    const domains = await fs.readdir(STORAGE_PATH);
    console.log('Found domains:', domains);

    for (const domain of domains) {
      const domainPath = path.join(STORAGE_PATH, domain);
      const files = await fs.readdir(domainPath);
      const mdFiles = files.filter(f => f.endsWith('.md') && !f.startsWith('documentation_'));

      if (mdFiles.length > 0) {
        console.log(`Processing ${mdFiles.length} files for domain: ${domain}`);
        
        const pages = await Promise.all(mdFiles.map(async (file) => {
          const filePath = path.join(domainPath, file);
          const content = await fs.readFile(filePath, 'utf-8');
          const type = file.split('_')[0].replace(/_/g, ' ');
          return { type, content };
        }));

        const timestamp = new Date().toISOString();
        const toc = generateTableOfContents(pages);
        const mergedContent = mergeMarkdownContent(pages);
        const fullContent = toc + mergedContent;

        // Save merged content
        const fileName = `documentation_${timestamp}.md`;
        const filePath = path.join(domainPath, fileName);
        await fs.writeFile(filePath, fullContent);
        console.log('Saved merged documentation to:', filePath);

        // Update metadata
        const metadataPath = path.join(domainPath, 'metadata.json');
        const metadata = {
          url: domain,
          domain,
          lastScraped: timestamp,
          totalPages: pages.length,
          successfulPages: pages.length,
          failedPages: [],
          structure: pages.map(p => ({
            type: p.type,
            url: null
          }))
        };
        await fs.writeJSON(metadataPath, metadata);
        console.log('Updated metadata for:', domain);

        // Clean up old files
        for (const file of mdFiles) {
          await fs.remove(path.join(domainPath, file));
        }
        console.log('Cleaned up old files for:', domain);
      }
    }

    console.log('Documentation merge complete!');
  } catch (err) {
    console.error('Error merging documentation:', err);
  }
};

mergeDocs(); 