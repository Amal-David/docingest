import React, { useState, useEffect, useCallback, FormEvent } from 'react';
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

const getPrimaryDomain = (domain: string) => {
  const cleanDomain = domain.replace(/^docs\./, '').replace(/\.ai$/, '');
  return cleanDomain.charAt(0).toUpperCase() + cleanDomain.slice(1);
};

const ViewPage: React.FC = () => {
  const [docs, setDocs] = useState<DocPreview[]>([]);
  const [urls, setUrls] = useState<SavedUrl[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocPreview | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchDocs = useCallback(async () => {
    setIsLoading(true);
    try {
      const endpoint = searchQuery 
        ? `${API_URL}/docs/fullsearch?q=${encodeURIComponent(searchQuery)}&page=${page}&sortBy=${sortBy}`
        : `${API_URL}/docs/list?page=${page}&sortBy=${sortBy}`;

      const response = await fetch(endpoint);
      if (!response.ok) throw new Error('Failed to fetch documentation');
      
      const data = await response.json();
      setDocs(data.docs);
      setUrls(data.urls || []);
      setHasMore(data.docs.length > 0);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load documentation');
    } finally {
      setIsLoading(false);
      setIsSearching(false);
      setIsFetchingMore(false);
    }
  }, [searchQuery, page, sortBy]);

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setPage(1); // Reset to first page when sort changes
    setIsSearching(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchQuery(searchTerm);
    if (searchTerm && sortBy === 'newest') {
      setSortBy('name_asc');
    }
    setPage(1);
  };

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      setIsFetchingMore(true);
      setPage(prev => prev + 1);
    }
  };

  const handleCopy = async (doc: DocPreview) => {
    try {
      if (!doc.filePath) throw new Error('File path not available');
      
      const response = await fetch(`${API_URL}/docs/content?path=${encodeURIComponent(doc.filePath)}`);
      if (!response.ok) throw new Error('Failed to fetch content');
      
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
      if (!doc.filePath) throw new Error('File path not available');
      
      const response = await fetch(`${API_URL}/docs/download?path=${encodeURIComponent(doc.filePath)}`);
      if (!response.ok) throw new Error('Failed to download file');
      
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

  return (
    <>
      <Helmet prioritizeSeoTags={true}>
        <title>View Doc Docs | DocIngest</title>
        <meta name="description" content="View All Docs  - Download documentation for any Framework, Library or API" />
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 border-[3px] border-gray-900 rounded relative z-10"
              />
            </div>
            <div className="relative md:w-1/4">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="w-full p-4 border-[3px] border-gray-900 rounded relative z-10 appearance-none bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="sections">Most Sections</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <button 
                type="submit"
                disabled={isSearching}
                className="px-6 py-4 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform relative z-10 whitespace-nowrap flex items-center justify-center min-w-[100px]"
              >
                {isSearching ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </div>
                ) : 'Search'}
              </button>
            </div>
          </div>
        </form>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {isSearching && (
          <div className="flex flex-col justify-center items-center py-8">
            <div className="relative w-24 h-24">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-l-primary rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Searching documentation...</p>
            </div>
          </div>
        )}

        <div className={showPreview || isSearching ? 'hidden' : ''}>
          {isLoading && docs.length === 0 && !isSearching ? (
            <div className="text-center text-gray-600 py-8">
              <div className="inline-block w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
              <p>Loading documentation...</p>
            </div>
          ) : docs.length === 0 ? (
            <div className="text-center text-gray-600">No documentation found. Try a different search term.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {docs.map((doc, index) => (
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

        {hasMore && !isLoading && docs.length > 0 && !isSearching && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform inline-flex items-center"
            >
              {isFetchingMore ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewPage;
