import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';

// API Configuration
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL || 'http://localhost:8001/api';

interface Doc {
  domain: string;
  timestamp: number;
  title?: string;
  description?: string;
  content?: string;
  type: string;
  size?: number;
  url: string;
}

interface DocContent {
  content: string;
  isLoading: boolean;
}

const ViewPage: React.FC = () => {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [contentMap, setContentMap] = useState<Record<string, DocContent>>({});

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/docs/list`);
      const data: Doc[] = await response.json();

      // Remove duplicates based on domain
      const uniqueDocs = Array.from(new Map(data.map((doc: Doc) => [doc.domain, doc])).values());

      // Sort by timestamp, most recent first
      setDocs(uniqueDocs as Doc[]);
      uniqueDocs.sort((a: Doc, b: Doc) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error('Error fetching docs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPrimaryDomain = (domain: string): string => {
    return domain.replace(/^docs\./, '').replace(/\.ai$/, '');
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleDateString();
  };

  const formatSize = (bytes?: number): string => {
    if (!bytes) return 'Unknown size';
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  };

  const handleContentLoad = async (domain: string) => {
    if (contentMap[domain]?.content) return;

    setContentMap(prev => ({
      ...prev,
      [domain]: { content: '', isLoading: true }
    }));

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/docs/content/${domain}`);
      const data = await response.json();

      setContentMap(prev => ({
        ...prev,
        [domain]: { content: data.content, isLoading: false }
      }));
    } catch (error) {
      console.error('Error loading content:', error);
      setContentMap(prev => ({
        ...prev,
        [domain]: { content: 'Error loading content', isLoading: false }
      }));
    }
  };

  const handleCopy = async (domain: string) => {
    const primaryDomain = getPrimaryDomain(domain);
    
    // Fetch content if not already loaded
    if (!contentMap[primaryDomain]?.content) {
      await handleContentLoad(primaryDomain);
    }

    // Copy content if available
    if (contentMap[primaryDomain]?.content) {
      navigator.clipboard.writeText(contentMap[primaryDomain].content);
    }
  };

  const handleDownload = async (doc: Doc) => {
    const primaryDomain = getPrimaryDomain(doc.domain);
    
    // Fetch content if not already loaded
    if (!contentMap[primaryDomain]?.content) {
      await handleContentLoad(primaryDomain);
    }

    // Download if content is available
    if (contentMap[primaryDomain]?.content) {
      const blob = new Blob([contentMap[primaryDomain].content], { type: 'text/markdown' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${primaryDomain}_documentation.md`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  const filteredDocs = docs.filter(doc => 
    getPrimaryDomain(doc.domain).toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container max-w-4xl mx-auto p-4">
        <Card className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search documentation..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="w-full p-4 border-[3px] border-gray-900 rounded bg-background"
        />
      </div>

      <div className="grid gap-6">
        {filteredDocs.length === 0 ? (
          <Card className="p-6">
            <p className="text-center text-gray-600">
              {searchQuery ? 'No documentation found matching your search.' : 'No documentation available.'}
            </p>
          </Card>
        ) : (
          filteredDocs.map((doc, index) => {
            const primaryDomain = getPrimaryDomain(doc.domain);
            const docContent = contentMap[primaryDomain];

            return (
              <Card key={`${doc.domain}-${index}`} className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold">{doc.title || doc.type}</h2>
                    <p className="text-sm text-gray-600">Domain: {primaryDomain}</p>
                    <p className="text-sm text-gray-600">Saved: {formatDate(doc.timestamp)}</p>
                    <p className="text-sm text-gray-600">Size: {formatSize(doc.size)}</p>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Source
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/docs/${primaryDomain}`}
                      className="text-center px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                    >
                      View Page
                    </Link>
                    <Button
                      onClick={() => handleCopy(doc.domain)}
                      className="bg-secondary text-gray-900"
                      disabled={docContent?.isLoading}
                    >
                      {docContent?.isLoading ? 'Loading...' : 'Copy All'}
                    </Button>
                  </div>

                  <div className="grid grid-cols-1">
                    <Button
                      onClick={() => handleDownload(doc)}
                      className="bg-primary text-white"
                      disabled={docContent?.isLoading}
                    >
                      {docContent?.isLoading ? 'Loading...' : 'Download'}
                    </Button>
                  </div>

                  {docContent?.isLoading && (
                    <div className="mt-2">
                      <Progress value={50} className="animate-pulse" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ViewPage; 