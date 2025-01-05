import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

interface DocStructure {
  type: string;
  url?: string;
}

interface DocPreview {
  content: string;
  domain: string;
  lastUpdated: string;
  url?: string;
  filePath?: string;
  structure: DocStructure[];
}

interface SavedUrl {
  url: string;
  domain: string;
  lastScraped: string;
  totalPages: number;
  successfulPages: number;
  failedPages: string[];
  structure: DocStructure[];
}

const API_URL = '/api';

// Helper function to get primary domain name
const getPrimaryDomain = (domain: string) => {
  const cleanDomain = domain.replace(/^docs\./, '').replace(/\.ai$/, '');
  return cleanDomain.charAt(0).toUpperCase() + cleanDomain.slice(1);
};

const ViewPage: React.FC = () => {
  const [docs, setDocs] = useState<DocPreview[]>([]);
  const [urls, setUrls] = useState<SavedUrl[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocPreview | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [page, setPage] = useState(1); // Track the current page
  const [hasMore, setHasMore] = useState(true); // Track if more pages are available

  useEffect(() => {
    const fetchDocs = async (pageNumber: number) => {
      try {
        const response = await fetch(`${API_URL}/docs/list?page=${pageNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch documentation');
        }
        const data = await response.json();
        console.log('Fetched data:', data);

        // Append new docs to the existing list
        setDocs((prevDocs) => {
          const existingDocs = new Set(prevDocs.map((doc) => JSON.stringify(doc))); // Serialize existing docs
          const newDocs = data.docs.filter((doc: any) => !existingDocs.has(JSON.stringify(doc))); // Filter out duplicates
          return [...prevDocs, ...newDocs];
        });
        // Check if more pages are available
        if (data.docs.length === 0) {
          setHasMore(false);
        }

        // Update URLs
        if (pageNumber === 1) {
          setUrls(data.urls);
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load documentation');
      } finally {
        setIsLoading(false);
        setIsFetchingMore(false);
      }
    };

    fetchDocs(page);
  }, [page]);

  const filteredDocs = docs.filter((doc) => {
    const cleanDomain = doc.domain.replace(/^docs\./, '').replace(/\.ai$/, '').toLowerCase();
    const cleanSearch = searchTerm.toLowerCase();
    return cleanDomain.includes(cleanSearch);
  });

  const handleLoadMore = () => {
    if (hasMore) {
      setIsFetchingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleCopy = async (doc: DocPreview) => {
    try {
      if (!doc.filePath) {
        throw new Error('File path not available');
      }
      const response = await fetch(`${API_URL}/docs/content?path=${encodeURIComponent(doc.filePath)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      const content = await response.text();
      await navigator.clipboard.writeText(content);
      alert('Content copied to clipboard!');
    } catch (err) {
      console.error('Copy error:', err);
      setError('Failed to copy content');
    }
  };

  const handleDownload = async (doc: DocPreview) => {
    try {
      if (!doc.filePath) {
        throw new Error('File path not available');
      }
      const response = await fetch(`${API_URL}/docs/download?path=${encodeURIComponent(doc.filePath)}`);
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${doc.domain}_documentation.md`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download file');
    }
  };

  if (isLoading && page === 1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-8 border-[3px] border-gray-900 bg-card">
            <div className="text-xl font-bold mb-4">Loading documentation...</div>
            <div className="w-48 h-2 bg-blue-200 rounded-full">
              <div className="w-24 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>View Doc Docs | DocIngest</title>
        <meta name="description" content="View All Docs  - Download and save documentation from any URL" />
        <meta name="keywords" content="View All Docs  - documentation, download, save, URL" />
        <meta property="og:title" content="View All Docs | DocIngest" />
        <meta property="og:description" content="View All Docs  - documentation, download, save, URL" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docingest.com/view" />
      </Helmet>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Saved <span className="text-primary">Documentation</span>
          </h1>
          <p className="text-3xl mt-7 sm:text-2xl font-semibold tracking-tight">
            View all <span className="text-primary">saved documentation</span> that are indexed by us or other users
          </p>
        </div>

        <div className="relative">
          <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border-[3px] border-gray-900 rounded relative z-10"
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-medium">{error}</p>
          </div>
        )}

        <div className={showPreview ? 'hidden' : ''}>
          {filteredDocs.length === 0 ? (
            <div className="text-center text-gray-600">No documentation found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map((doc, index) => (
                <div key={index} className="relative">
                  <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
                  <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{getPrimaryDomain(doc.domain)}</h3>
                      <p className="text-sm text-gray-600">
                        Sections: {doc.structure.length}
                      </p>
                      <p className="text-sm text-gray-600">
                        Saved: {new Date(doc.lastUpdated).toLocaleDateString()}
                      </p>
                      {doc.url && (
                        <a
                          href={doc.url.startsWith('http') ? doc.url : `https://${doc.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline block"
                        >
                          View Source
                        </a>
                      )}
                    </div>
                    <div className="mt-4 space-y-2">
                      <button
                        onClick={() => {
                          window.location.href = `/docs/${doc.domain}`;
                        }}
                        className="w-full px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                      >
                        Preview
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleCopy(doc)}
                          className="px-4 py-2 bg-gray-100 text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                        >
                          Copy All
                        </button>
                        <button
                          onClick={() => handleDownload(doc)}
                          className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && !isLoading && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
            >
              {isFetchingMore ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewPage;
