import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

// API configuration
const FIRECRAWL_API = 'v1';
//const FIRECRAWL_API = process.env.NEXT_PUBLIC_FIRECRAWL_API || 'http://docingest.com:3002'
const API_URL = '/api';

interface DocPreview {
  content: string;
  type: string;
  lastUpdated: string;
  url?: string;
  domain: string;
  filePath?: string;
}

interface SavedUrl {
  url: string;
  domain: string;
  lastScraped: string;
  totalPages: number;
  successfulPages: number;
  failedPages: string[];
}

interface Metrics {
  totalPages: number;
  completedPages: number;
  inProgress: boolean;
  failedPages: string[];
}

interface CrawlStatusResponse {
  status: string;
  completed: number;
  total: number;
  data: Array<{
    markdown?: string;
    metadata?: {
      sourceURL?: string;
      title?: string;
    };
  }>;
}

interface FirecrawlResponse {
  success: boolean;
  data?: {
    markdown?: string;
    html?: string;
    metadata?: {
      title?: string;
      description?: string;
      sourceURL?: string;
      statusCode?: number;
    };
  }[];
  id?: string;
  url?: string;
  status?: string;
}

interface ScrapingMetrics {
  totalPages: number;
  completedPages: number;
  failedPages: string[];
  inProgress: boolean;
}

const HomePage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlId, setCrawlId] = useState<string | null>(null);
  const [savedDocs, setSavedDocs] = useState<DocPreview[]>([]);
  const [savedUrls, setSavedUrls] = useState<SavedUrl[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocPreview | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [metrics, setMetrics] = useState<ScrapingMetrics>({
    totalPages: 0,
    completedPages: 0,
    failedPages: [],
    inProgress: false
  });

  const logAndUpdateDebug = (message: string) => {
    console.log(message);
    setDebugInfo(prev => `${prev ? prev + '\n' : ''}${message}`);
  };

  // Extract domain from URL
  const getDomain = (urlString: string) => {
    try {
      const url = new URL(urlString);
      return url.hostname;
    } catch {
      return 'unknown-domain';
    }
  };

  const checkUrlStatus = (urlToCheck: string): SavedUrl | null => {
    const savedUrl = savedUrls.find(u => u.url === urlToCheck);
    if (!savedUrl) return null;

    const lastScrapedDate = new Date(savedUrl.lastScraped);
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

    return lastScrapedDate > tenDaysAgo ? savedUrl : null;
  };

  const handleCrawlAndDownload = async () => {
    setIsLoading(true);
    setError(null);
    setDebugInfo(null);
    setShowPreview(false);
    setSelectedDoc(null);
    setMetrics({
      totalPages: 0,
      completedPages: 0,
      failedPages: [],
      inProgress: true
    });

    // Check if URL was recently scraped
    const existingUrl = checkUrlStatus(url);
    if (existingUrl) {
      const existingDocs = savedDocs.filter(doc => doc.domain === existingUrl.domain);
      if (existingDocs.length > 0) {
        logAndUpdateDebug('Using cached documentation (scraped within last 10 days)');
        setSelectedDoc(existingDocs[0]);
        setShowPreview(true);
        setMetrics({
          totalPages: existingUrl.totalPages,
          completedPages: existingUrl.successfulPages,
          failedPages: existingUrl.failedPages,
          inProgress: false
        });
        setIsLoading(false);
        return;
      }
    }

    setIsCrawling(true);
    setCrawlId(null);

    try {
      const domain = getDomain(url);
      logAndUpdateDebug(`Starting documentation download for: ${domain}`);

      const response = await fetch(`${FIRECRAWL_API}/crawl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          limit: 100,
          maxDepth: 5,
          allowBackwardLinks: true,
          scrapeOptions: {
            formats: ['markdown', 'html'],
            onlyMainContent: true
          }
        })
      });

      const data: FirecrawlResponse = await response.json();
      logAndUpdateDebug(`Response status: ${response.status}`);

      if (!data.success || !data.id) {
        throw new Error('Failed to start download');
      }

      setCrawlId(data.id);
      logAndUpdateDebug(`Download started successfully. ID: ${data.id}`);
      
      pollCrawlStatus(data.id, domain);
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to start download. Please try again.');
      logAndUpdateDebug(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setIsCrawling(false);
      setMetrics(prev => ({ ...prev, inProgress: false }));
    } finally {
      setIsLoading(false);
    }
  };

  const pollCrawlStatus = async (id: string, domain: string) => {
    try {
      const response = await fetch(`${FIRECRAWL_API}/crawl/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      logAndUpdateDebug(`Download status: ${data.status} - Completed: ${data.completed}/${data.total}`);

      // Update metrics
      setMetrics(prev => ({
        ...prev,
        totalPages: data.total || 0,
        completedPages: data.completed || 0,
        inProgress: data.status !== 'completed' && data.status !== 'failed'
      }));

      if (data.status === 'completed') {
        setIsCrawling(false);
        if (data.data && data.data.length > 0) {
          const timestamp = new Date().toISOString();
          const failedPages: string[] = [];
          
          const pages: DocPreview[] = data.data.map((item: CrawlStatusResponse['data'][0]) => {
            if (!item.markdown) {
              failedPages.push(item.metadata?.sourceURL || 'Unknown URL');
              return {
                content: 'No content available',
                type: item.metadata?.title || 'Unknown',
                lastUpdated: timestamp,
                url: item.metadata?.sourceURL,
                domain
              };
            }
            return {
              content: item.markdown,
              type: item.metadata?.title || 'Unknown',
              lastUpdated: timestamp,
              url: item.metadata?.sourceURL,
              domain
            };
          }).filter((page: DocPreview) => page.content !== 'No content available');

          if (pages.length > 0) {
            // Save URL status
            const urlStatus: SavedUrl = {
              url,
              domain,
              lastScraped: timestamp,
              totalPages: data.total,
              successfulPages: pages.length,
              failedPages
            };
            
            setSavedUrls(prev => [...prev.filter(u => u.url !== url), urlStatus]);
            
            // Save docs to server
            try {
              const saveResponse = await fetch(`${API_URL}/docs/save`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  domain,
                  timestamp,
                  pages
                })
              });

              if (!saveResponse.ok) {
                throw new Error('Failed to save documentation to server');
              }

              const savedData = await saveResponse.json();
              if (!savedData.success) {
                throw new Error(savedData.error || 'Failed to save documentation');
              }

              const docsWithPaths = pages.map((page, index) => ({
                ...page,
                filePath: savedData.filePath
              }));
              
              // Update state with file paths
              setSavedDocs(prev => [...prev.filter(d => d.domain !== domain), ...docsWithPaths]);
              
              // Set preview of first successful page
              setSelectedDoc(docsWithPaths[0]);
              setShowPreview(true);
              
              // Update final metrics
              setMetrics(prev => ({
                ...prev,
                failedPages,
                inProgress: false,
                completedPages: pages.length,
                totalPages: data.total
              }));
              
              logAndUpdateDebug(`Download completed. Successfully saved ${pages.length} pages. Failed: ${failedPages.length}`);
            } catch (err) {
              console.error('Save error:', err);
              setError('Failed to save documentation to server');
              setMetrics(prev => ({ ...prev, inProgress: false }));
            }
          } else {
            setError('No valid content found in the scraped pages');
            setMetrics(prev => ({ ...prev, inProgress: false }));
          }
        } else {
          setError('No data received from the scraping process');
          setMetrics(prev => ({ ...prev, inProgress: false }));
        }
      } else if (data.status === 'failed') {
        setError('Download failed. Please try again.');
        setIsCrawling(false);
        setMetrics(prev => ({ ...prev, inProgress: false }));
      } else {
        // Continue polling
        setTimeout(() => pollCrawlStatus(id, domain), 5000);
      }
    } catch (err) {
      console.error('Poll error:', err);
      setError('Failed to check download status. Please try again.');
      setIsCrawling(false);
      setMetrics(prev => ({ ...prev, inProgress: false }));
    }
  };

  const downloadFile = async (filePath: string, filename: string) => {
    try {
      const response = await fetch(`${API_URL}/docs/download?path=${encodeURIComponent(filePath)}`);
      if (!response.ok) throw new Error('Failed to download file');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${filename || 'documentation'}.md`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download file. Please try again.');
    }
  };

  const handleCopy = async (filePath: string) => {
    try {
      const response = await fetch(`${API_URL}/docs/content?path=${encodeURIComponent(filePath)}`);
      if (!response.ok) throw new Error('Failed to fetch content');
      
      const content = await response.text();
      navigator.clipboard.writeText(content);
    } catch (err) {
      console.error('Copy error:', err);
      setError('Failed to copy content. Please try again.');
    }
  };

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const response = await fetch(`${API_URL}/docs/list`);
        if (!response.ok) throw new Error('Failed to load saved documentation');
        
        const data = await response.json();
        setSavedDocs(data.docs);
        setSavedUrls(data.urls);
      } catch (err) {
        console.error('Load error:', err);
        setError('Failed to load saved documentation.');
      }
    };

    loadSavedData();
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Doc<span className="text-primary">Ingest</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Download and save documentation from any URL
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/view"
            className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
          >
            View All Docs
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
        <div className="rounded-xl relative z-20 p-8 border-[3px] border-gray-900 bg-card">
          <div className="space-y-4">
            <div className="relative">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter documentation URL..."
                required
                className="w-full p-4 border-[3px] border-gray-900 rounded relative z-10"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative inline-block w-full">
                <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                <button
                  onClick={handleCrawlAndDownload}
                  disabled={isLoading || isCrawling}
                  className="w-full px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium relative z-10 hover:-translate-y-0.5 transition-transform"
                >
                  {isCrawling ? 'Downloading...' : 'Download Documentation'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {metrics.inProgress && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700">
            Scraping in progress: {metrics.completedPages}/{metrics.totalPages} pages
          </p>
          <div className="w-full bg-blue-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(metrics.completedPages / metrics.totalPages) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {showPreview && selectedDoc && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Preview</h2>
            <div className="space-x-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedDoc.content);
                  alert('Content copied to clipboard!');
                }}
                className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
              >
                Copy
              </button>
              <button
                onClick={async () => {
                  if (!selectedDoc.filePath) {
                    setError('File path not available');
                    return;
                  }
                  try {
                    const response = await fetch(`${API_URL}/docs/download?path=${encodeURIComponent(selectedDoc.filePath)}`);
                    if (!response.ok) throw new Error('Download failed');
                    
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${selectedDoc.domain}_${selectedDoc.type.toLowerCase()}.md`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                  } catch (err) {
                    console.error('Download error:', err);
                    setError('Failed to download file');
                  }
                }}
                className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
              >
                Download
              </button>
              <button
                onClick={() => {
                  setShowPreview(false);
                  setSelectedDoc(null);
                }}
                className="px-4 py-2 bg-gray-100 text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
              >
                Back to List
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 prose max-w-none border-[3px] border-gray-900">
            <ReactMarkdown>{selectedDoc.content}</ReactMarkdown>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {debugInfo && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <pre className="text-sm text-gray-700 whitespace-pre-wrap">{debugInfo}</pre>
        </div>
      )}

      {savedDocs.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Saved Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedDocs.map((doc, index) => (
              <div key={index} className="relative">
                <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
                <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{doc.type}</h3>
                    <p className="text-sm text-gray-600">Domain: {doc.domain}</p>
                    <p className="text-sm text-gray-600">
                      Saved: {new Date(doc.lastUpdated).toLocaleDateString()}
                    </p>
                    {doc.url && (
                      <a 
                        href={doc.url.startsWith('http') ? doc.url : `https://${doc.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View Source
                      </a>
                    )}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/docs/${doc.domain.replace(/^docs\./, '').replace(/\.ai$/, '')}`}
                        className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform text-center"
                      >
                        View Page
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedDoc(doc);
                          setShowPreview(true);
                        }}
                        className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                      >
                        Preview
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(doc.content);
                          alert('Content copied to clipboard!');
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                      >
                        Copy All
                      </button>
                      <button
                        onClick={() => doc.filePath && downloadFile(
                          doc.filePath,
                          `${doc.domain}_${doc.type ? doc.type.toLowerCase().replace(/\s+/g, '_') : 'documentation'}`
                        )}
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
        </div>
      )}
    </div>
  );
};

export default HomePage; 
