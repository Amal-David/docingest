import { totalmem } from 'os';
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import ReactGA from "react-ga4";
import { Helmet } from 'react-helmet-async';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { isLikelyBlockedPage } from '../utils/scrape-filter';

// API configuration - crawl goes through server proxy (Cloudflare Browser Rendering)
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

interface CrawlResponse {
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [url, setUrl] = useState('');
  const [includePattern, setIncludePattern] = useState('');
  const [autoStartTriggered, setAutoStartTriggered] = useState(false);
  const [excludePattern, setExcludePattern] = useState('');
  const [maxPages, setMaxPages] = useState(250);
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const [newDataLoading, setnewDataLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchedDomains, setFetchedDomains] = useState<Set<string>>(new Set());
  const [noMoreData, setNoMoreData] = useState<boolean>(false);
  const footerRef = useRef(null);
  const pageref = useRef(1);
  const totalDocsRef = useRef(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const debugLogRef = useRef<HTMLDivElement>(null);

  // Auto-scroll debug log to bottom when new content is added
  useEffect(() => {
    if (debugLogRef.current) {
      debugLogRef.current.scrollTop = debugLogRef.current.scrollHeight;
    }
  }, [debugInfo]);

  // Handle URL parameter from homepage redirect - auto-fill and optionally auto-start
  const handleCrawlRef = useRef<(() => Promise<void>) | null>(null);
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlId, setCrawlId] = useState<string | null>(null);
  const [savedDocs, setSavedDocs] = useState<DocPreview[]>([]);
  const [savedUrls, setSavedUrls] = useState<SavedUrl[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocPreview | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [addedPage, setAddedPage] = useState<number>(1);
  const[previewContent, setPreviewContent] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<ScrapingMetrics>({
    totalPages: 0,
    completedPages: 0,
    failedPages: [],
    inProgress: false
  });
  const [urlError, setUrlError] = useState<string | null>(null);
  const [includePatternError, setIncludePatternError] = useState<string | null>(null);
  const [excludePatternError, setExcludePatternError] = useState<string | null>(null);

  // Polling control refs
  const pollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pollAttemptsRef = useRef(0);
  const maxPollAttempts = 300; // ~25 minutes with 5s intervals

  // Cleanup polling on unmount
  useEffect(() => {
    const timeoutRef = pollTimeoutRef;
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const logAndUpdateDebug = (message: string) => {
    console.log(message);
    setDebugInfo(prev => `${prev ? prev + '\n' : ''}${message}`);
  };
  const logCustomEvent = (category: string, action: string, label?: string, value?: number) => {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
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
  useEffect(() => {
    loadSavedData(5)
  }, [])
  

  

  const getDomainFromUrl = (url: string): string => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname;
    } catch {
      return 'unknown-domain';

    }
  };
  
  // Validation functions
  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      setUrlError(null);
      return true;
    } catch {
      setUrlError('Please enter a valid URL (e.g., https://example.com)');
      return false;
    }
  };

  const validatePattern = (pattern: string, type: 'include' | 'exclude'): boolean => {
    if (!pattern) {
      if (type === 'include') {
        setIncludePatternError(null);
      } else {
        setExcludePatternError(null);
      }
      return true;
    }

    try {
      new RegExp(pattern.replace(/\*/g, '.*'));
      if (type === 'include') {
        setIncludePatternError(null);
      } else {
        setExcludePatternError(null);
      }
      return true;
    } catch {
      const error = 'Invalid pattern. Use * for wildcards (e.g., /api*, */docs/*)';
      if (type === 'include') {
        setIncludePatternError(error);
      } else {
        setExcludePatternError(error);
      }
      return false;
    }
  };

  // Add this function to detect and suggest include pattern
  const suggestIncludePattern = (url: string): string => {
    try {
      const urlObj = new URL(url);
      const path = urlObj.pathname;

      // Only suggest pattern for /docs paths
      if (path.includes('/docs')) {
        const docsIndex = path.indexOf('/docs');
        return path.slice(0, docsIndex) + '/docs/*';
      }
      
      // For API paths, only if it's explicitly /api
      if (path === '/api' || path.startsWith('/api/')) {
        return '/api/*';
      }

      // Don't suggest patterns for other paths
      return '';
    } catch {
      return '';
    }
  };

  // Modify the URL input handler to include logging
  const handleUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setError('');

    if (!newUrl) return;

    try {
      // Log URL to analytics
      ReactGA.event({
        category: 'URL Input',
        action: 'URL Entered',
        label: newUrl
      });

      // Log URL to server
      await fetch('/api/logs/url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: newUrl,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        })
      });

      // Check if URL is valid
      const urlObj = new URL(newUrl);

      // Suggest include pattern based on URL
      const suggestedPattern = suggestIncludePattern(newUrl);
      if (suggestedPattern && !includePattern) {
        setIncludePattern(suggestedPattern);
      }
    } catch (err) {
      if (err instanceof Error) {
        setUrlError(err.message);
      } else {
        setUrlError('Invalid URL');
      }
    }
  };

  const handleIncludePatternChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = e.target.value;
    setIncludePattern(pattern);
    validatePattern(pattern, 'include');
  };

  const handleExcludePatternChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = e.target.value;
    setExcludePattern(pattern);
    validatePattern(pattern, 'exclude');
  };

  const handleCrawlAndDownload = async () => {
    try {
      // Validate all inputs before proceeding
      if (!validateUrl(url) || 
          !validatePattern(includePattern, 'include') || 
          !validatePattern(excludePattern, 'exclude')) {
        return;
      }

      setIsLoading(true);
      setError(null);
      setDebugInfo(null);
      setShowPreview(false);
      setSelectedDoc(null);

      const domain = getDomain(url);
      logAndUpdateDebug(`Starting documentation download for: ${domain}`);
      logCustomEvent("User Interaction", "Button Click", `Crawl and Download - ${url}`);

      // Check if domain already exists
      try {
        const encodedUrl = encodeURIComponent(url);
        const checkResponse = await fetch(`${API_URL}/docs/check-domain/${encodedUrl}`);
        
        if (checkResponse.ok) {
          const checkData = await checkResponse.json();
          if (checkData.found) {
            // Check if the documentation was crawled within the last 10 days
            const lastCrawled = new Date(checkData.lastUpdated);
            const tenDaysAgo = new Date();
            tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

            if (lastCrawled > tenDaysAgo) {
              logAndUpdateDebug(`Recent documentation found for: ${domain} (last updated: ${lastCrawled.toLocaleDateString()})`);
              navigate(`/docs/${checkData.domain}`);
              return;
            } else {
              logAndUpdateDebug(`Documentation found but outdated (last updated: ${lastCrawled.toLocaleDateString()}). Starting new crawl...`);
            }
          }
        }
      } catch (error) {
        console.error('Error checking domain:', error);
        // Continue with crawl even if check fails
      }

      // If no existing docs found, start crawling
      logAndUpdateDebug(`No existing documentation found for: ${domain}. Starting crawl...`);
      setMetrics({
        totalPages: 0,
        completedPages: 0,
        failedPages: [],
        inProgress: true
      });

      // Prepare the crawl request (proxied through server to Cloudflare)
      const requestBody = {
        url,
        limit: maxPages,
        maxDepth: 5,
        allowBackwardLinks: true,
        ignoreQueryParameters: true,
        ...(includePattern && { includePaths: [includePattern] }),
        ...(excludePattern && { excludePaths: [excludePattern] }),
        scrapeOptions: {
          formats: ['markdown', 'html'],
          onlyMainContent: true,
          removeBase64Images: true,
          blockAds: true,
          timeout: 60000,
          waitFor: 2000,
          maxAge: 3600000
        }
      };

      // Validate patterns to avoid conflicts
      if (includePattern && excludePattern) {
        const includePatterns = includePattern.split(',').map(p => p.trim());
        const excludePatterns = excludePattern.split(',').map(p => p.trim());

        const conflicts = includePatterns.filter(inc =>
          excludePatterns.some(exc => inc === exc || inc.startsWith(exc) || exc.startsWith(inc))
        );

        if (conflicts.length > 0) {
          throw new Error(`Pattern conflict detected: ${conflicts.join(', ')} appears in both include and exclude patterns`);
        }
      }

      // Log crawl start (simplified for user)
      logAndUpdateDebug(`🚀 Starting crawl: ${url}`);
      logAndUpdateDebug(`   Max pages: ${maxPages}, Include: ${includePattern || 'All'}, Exclude: ${excludePattern || 'None'}`);

      // Detailed log to console only
      console.log('Crawl request:', requestBody);

      const response = await fetch(`${API_URL}/crawl/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Log response status (keep in console only, not in user-visible debug)
      console.log(`Response: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        logAndUpdateDebug(`❌ CRAWL REQUEST FAILED: ${response.status} - ${errorText}`);
        throw new Error(`Failed to start download: ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      logAndUpdateDebug(`✅ Crawl started successfully`);
      console.log('Crawl response:', data);
      
      if (!data.success || !data.id) {
        throw new Error(data.error || 'Failed to start download: No crawl ID received');
      }

      setCrawlId(data.id);
      setIsCrawling(true);
      
      pollCrawlStatus(data.id, domain);
    } catch (err) {
      console.error('Download error:', err);
      setError(err instanceof Error ? err.message : 'Failed to start download. Please try again.');
      logAndUpdateDebug(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setIsCrawling(false);
      setMetrics(prev => ({ ...prev, inProgress: false }));
    } finally {
      setIsLoading(false);
    }
  };

  // Store handleCrawlAndDownload in ref for auto-start effect
  handleCrawlRef.current = handleCrawlAndDownload;

  // Handle URL parameter from homepage - auto-fill URL
  useEffect(() => {
    const urlParam = searchParams.get('url');
    if (urlParam && !url) {
      setUrl(urlParam);
      // Suggest include pattern based on URL
      const suggestedPattern = suggestIncludePattern(urlParam);
      if (suggestedPattern) {
        setIncludePattern(suggestedPattern);
      }
    }
  }, [searchParams, url]);

  // Auto-start crawling when URL is set from params
  useEffect(() => {
    const urlParam = searchParams.get('url');
    const autoStart = searchParams.get('autoStart') === 'true';

    // Only trigger if URL matches param, autoStart is true, and we haven't triggered yet
    if (urlParam && url === urlParam && autoStart && !autoStartTriggered && !isLoading && !isCrawling) {
      setAutoStartTriggered(true);
      // Trigger crawl
      if (handleCrawlRef.current) {
        handleCrawlRef.current();
      }
    }
  }, [url, searchParams, autoStartTriggered, isLoading, isCrawling]);

  const pollCrawlStatus = async (id: string, domain: string, retryCount = 0) => {
    pollAttemptsRef.current++;

    // Check max attempts to prevent infinite polling
    if (pollAttemptsRef.current > maxPollAttempts) {
      logAndUpdateDebug(`⏰ TIMEOUT: Crawl exceeded maximum polling time (~25 minutes)`);
      setError('Crawl timed out. The process is taking too long. Please try again with fewer pages.');
      setIsCrawling(false);
      setMetrics(prev => ({ ...prev, inProgress: false }));
      return;
    }

    try {
      const response = await fetch(`${API_URL}/crawl/status/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Handle HTTP errors before parsing JSON
      if (!response.ok) {
        if (response.status === 429) {
          // Rate limited - wait longer before retry
          logAndUpdateDebug(`⚠️ Rate limited. Waiting 15 seconds before retry...`);
          pollTimeoutRef.current = setTimeout(() => pollCrawlStatus(id, domain, 0), 15000);
          return;
        }
        if (retryCount < 3) {
          // Retry on other HTTP errors
          logAndUpdateDebug(`⚠️ HTTP error ${response.status}, retry ${retryCount + 1}/3...`);
          pollTimeoutRef.current = setTimeout(() => pollCrawlStatus(id, domain, retryCount + 1), 5000);
          return;
        }
        throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Simple user-visible progress update
      const progressPercent = data.completed && data.total
        ? Math.round((data.completed / data.total) * 100)
        : 0;

      if (data.status === 'scraping') {
        logAndUpdateDebug(`📊 Progress: ${data.completed || 0}/${data.total || 0} pages (${progressPercent}%)`);
      }

      // Detailed logging to console only for debugging
      console.log('Crawl status:', {
        status: data.status,
        completed: data.completed,
        total: data.total,
        dataLength: data.data?.length
      });

      // Update metrics with enhanced data
      setMetrics(prev => ({
        ...prev,
        totalPages: data.total || 0,
        completedPages: data.completed || 0,
        failedPages: data.data 
          ? data.data.filter((item: any) => {
              const blocked = isLikelyBlockedPage(
                item.metadata?.title,
                item.markdown,
                item.metadata?.sourceURL
              );
              return blocked || !item.markdown || item.markdown.length <= 100;
            }).map((item: any) => item.metadata?.sourceURL || 'Unknown URL')
          : [],
        inProgress: data.status !== 'completed' && data.status !== 'failed'
      }));

      if (data.status === 'completed') {
        setIsCrawling(false);
        if (data.data && data.data.length > 0) {
          const timestamp = new Date().toISOString();
          const failedPages: string[] = [];
          
          const pages: DocPreview[] = data.data.map((item: CrawlStatusResponse['data'][0]) => {
            const blocked = isLikelyBlockedPage(
              item.metadata?.title,
              item.markdown,
              item.metadata?.sourceURL
            );
            if (blocked) {
              failedPages.push(`${item.metadata?.sourceURL || 'Unknown URL'} (Blocked by anti-bot protection)`);
              return null as unknown as DocPreview;
            }
            if (!item.markdown || item.markdown.length <= 100) {
              const failureReason = !item.markdown 
                ? 'No markdown content' 
                : 'Content too short';
              failedPages.push(`${item.metadata?.sourceURL || 'Unknown URL'} (${failureReason})`);
              return null as unknown as DocPreview;
            }
            return {
              content: item.markdown,
              type: item.metadata?.title || 'Unknown',
              lastUpdated: timestamp,
              url: item.metadata?.sourceURL,
              domain
            };
          }).filter((page: DocPreview | null) => page !== null) as DocPreview[];

          logAndUpdateDebug(`🎯 FINAL RESULTS: ${pages.length} valid pages out of ${data.data.length} total pages processed`);

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
              // Compute request size
              const requestData = {
                domain,
                timestamp,
                pages
              };
              const requestSize = new Blob([JSON.stringify(requestData)]).size;
              const requestSizeMB = (requestSize / (1024 * 1024)).toFixed(2);
              
              logAndUpdateDebug(`💾 Saving documentation: ${requestSizeMB} MB, ${pages.length} pages`);

              const saveResponse = await fetch(`${API_URL}/docs/save`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
              });

              if (!saveResponse.ok) {
                if (saveResponse.status === 413) {
                  // Try to get the actual server limit from response headers if available
                  const serverLimit = saveResponse.headers.get('x-max-content-length');
                  const serverLimitMB = serverLimit ? (parseInt(serverLimit) / (1024 * 1024)).toFixed(2) : null;
                  
                  throw new Error(
                    `Documentation size (${requestSizeMB} MB) exceeds server limit` +
                    `${serverLimitMB ? ` of ${serverLimitMB} MB` : ''}. ` +
                    `Please try one of the following:\n` +
                    `1. Reduce the number of pages using the Max Pages slider\n` +
                    `2. Use the exclude pattern to skip unnecessary content\n` +
                    `3. Contact support if you need to process larger documentation`
                  );
                }
                const errorData = await saveResponse.json().catch(() => null);
                throw new Error(
                  errorData?.error || 
                  `Failed to save documentation: ${saveResponse.status} ${saveResponse.statusText}`
                );
              }

              const savedData = await saveResponse.json();
              if (!savedData.success) {
                throw new Error(savedData.error || 'Failed to save documentation');
              }

              // Ensure filePath exists in the response
              if (!savedData.filePath) {
                throw new Error('Server response missing filePath');
              }

              logAndUpdateDebug(`✅ Successfully saved documentation to: ${savedData.filePath}`);

              const docsWithPaths = pages.map(page => ({
                ...page,
                filePath: savedData.filePath
              }));
              
              // Update state with file paths
              setSavedDocs(prev => [...prev.filter(d => d.domain !== domain), ...docsWithPaths]);

              // Show success message and navigate
              setShowPreview(true);
              setSelectedDoc(docsWithPaths[0]);
              logAndUpdateDebug(`🎉 Documentation successfully downloaded! Navigating to results...`);
              setTimeout(() => navigate(`/docs/${domain}`), 2000);
              
            } catch (saveError) {
              console.error('Save error:', saveError);
              logAndUpdateDebug(`❌ Failed to save documentation: ${saveError instanceof Error ? saveError.message : 'Unknown error'}`);
              setError(saveError instanceof Error ? saveError.message : 'Failed to save documentation');
            }
          } else {
            logAndUpdateDebug(`❌ No valid content found. All ${data.data.length} pages failed to provide usable content.`);
            setError(`No valid content found in the scraped pages. Processed ${data.data.length} pages but none contained sufficient content.`);
          }
        } else {
          logAndUpdateDebug(`❌ Crawl completed but no data received`);
          setError('No data received from the scraping process');
          setMetrics(prev => ({ ...prev, inProgress: false }));
        }
      } else if (data.status === 'failed') {
        logAndUpdateDebug(`❌ CRAWL FAILED: ${data.error || 'Unknown error'}`);
        setError(`Download failed: ${data.error || 'Unknown error'}. Please try again.`);
        setIsCrawling(false);
        setMetrics(prev => ({ ...prev, inProgress: false }));
      } else {
        // Continue polling with time estimate
        const remaining = (data.total || 0) - (data.completed || 0);
        const estimatedTimeRemaining = remaining * 3; // Rough estimate: 3 seconds per page
        logAndUpdateDebug(`⏳ Still processing... ETA: ~${estimatedTimeRemaining}s (${remaining} pages remaining)`);
        pollTimeoutRef.current = setTimeout(() => pollCrawlStatus(id, domain, 0), 5000);
      }
    } catch (err) {
      console.error('Poll error:', err);

      // Retry on network errors (up to 3 times)
      if (retryCount < 3) {
        logAndUpdateDebug(`⚠️ Network error, retry ${retryCount + 1}/3: ${err instanceof Error ? err.message : 'Unknown error'}`);
        pollTimeoutRef.current = setTimeout(() => pollCrawlStatus(id, domain, retryCount + 1), 5000);
        return;
      }

      logAndUpdateDebug(`❌ Failed to check download status after ${retryCount} retries: ${err instanceof Error ? err.message : 'Unknown error'}`);
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

  // Function to handle navigation to doc pages with GA tracking
  const navigateToDoc = (domain: string) => {
    // Track the doc page view
    ReactGA.send({
      hitType: "pageview",
      page: `/docs/${domain}`,
      title: `Documentation - ${domain}`
    });
    
    // Navigate to the doc page
    navigate(`/docs/${domain}`);
  };

  // Modified loadSavedData to generate sitemap
  const loadSavedData = async (limit: number) => {
    try {
      setnewDataLoading(true);
      console.log('Loading saved data...', `${pageref.current}`);
      const response = await fetch(`${API_URL}/docs/list?page=${pageref.current}&limit=${limit}`);
      pageref.current = pageref.current + 1;
      
      if (!response.ok) throw new Error('Failed to load saved documentation');
      const data = await response.json();
      if(data.docs.length === 0) {
        setNoMoreData(true);
      }

      // Update saved docs state
      setSavedDocs((prevDocs) => {
        const existingDomains = new Set(prevDocs.map((doc) => doc.domain + doc.filePath));
        const newDocs = data.docs.filter(
          (doc: DocPreview) => !existingDomains.has(doc.domain + doc.filePath)
        );
        const finaldoc = [...prevDocs, ...newDocs];
        
        // Generate sitemap with all domains
        const allDomains = finaldoc.map(doc => doc.domain);
        // generateSitemap(window.location.origin, allDomains);

        return finaldoc;
      });

      // Filter out duplicate URLs
      setSavedUrls((prevUrls) => {
        const existingUrls = new Set(prevUrls.map((url) => url.url));
        const newUrls = data.urls.filter(
          (url: SavedUrl) => !existingUrls.has(url.url)
        );
        return [...prevUrls, ...newUrls];
      });
      setnewDataLoading(false);

     // Set the total pages from the response
    } catch (err) {
      console.error('Load error:', err);
      setError('Failed to load saved documentation.');
    }
  };
  

  return (
    <>
    <Helmet prioritizeSeoTags={true}>
        <title>Index Docs | DocIngest</title>
        <meta name="description" content="Ingest a documentation site into DocIngest's searchable, MCP-accessible corpus." />
        <meta name="keywords" content="docs ingestion, MCP, documentation indexing, framework docs, API docs" />
        <meta property="og:title" content="Index Docs | DocIngest" />
        <meta property="og:description" content="Ingest a documentation site into DocIngest's searchable, MCP-accessible corpus." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docingest.com" />
      </Helmet>
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Doc<span className="text-primary">Ingest</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Ingest a docs site into your searchable, MCP-accessible corpus
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link
            to="/view"
            className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
          >
            Browse Indexed Docs
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
        <div className="rounded-xl relative z-20 p-8 border-[3px] border-gray-900 bg-card">
          <div className="space-y-6">
            <div className="relative">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <input
                type="url"
                value={url}
                onChange={handleUrlChange}
                placeholder="https://docs.cartesia.ai/get-started/overview"
                required
                className={`w-full p-4 border-[3px] ${urlError ? 'border-red-500' : 'border-gray-900'} rounded relative z-10 bg-white`}
              />
              {urlError && (
                <p className="mt-1 text-red-500 text-sm">{urlError}</p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Include files under: <span className="text-gray-500">(e.g., /docs/*)</span>
                </label>
                <div className="relative">
                  <div className="w-full h-full rounded bg-gray-900 translate-y-[2px] translate-x-[2px] absolute inset-0"></div>
                  <input
                    type="text"
                    value={includePattern}
                    onChange={handleIncludePatternChange}
                    placeholder="/docs/*"
                    className={`w-full p-2 text-sm border-2 ${includePatternError ? 'border-red-500' : 'border-gray-900'} rounded relative z-10 bg-white`}
                  />
                </div>
                <div className="text-xs text-gray-500 pl-1">
                  Only crawl URLs starting with this path
                </div>
                {includePatternError && (
                  <p className="text-red-500 text-xs pl-1">{includePatternError}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Exclude files under: <span className="text-gray-500">(e.g., /api/*)</span>
                </label>
                <div className="relative">
                  <div className="w-full h-full rounded bg-gray-900 translate-y-[2px] translate-x-[2px] absolute inset-0"></div>
                  <input
                    type="text"
                    value={excludePattern}
                    onChange={handleExcludePatternChange}
                    placeholder="/api/*, /internal/*"
                    className={`w-full p-2 text-sm border-2 ${excludePatternError ? 'border-red-500' : 'border-gray-900'} rounded relative z-10 bg-white`}
                  />
                </div>
                <div className="text-xs text-gray-500 pl-1">
                  Skip URLs matching these patterns
                </div>
                {excludePatternError && (
                  <p className="text-red-500 text-xs pl-1">{excludePatternError}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Max Pages: {maxPages}
                </label>
                <div className="relative pt-1">
                  <div className="relative h-2">
                    <div className="h-2 bg-gray-200 rounded-none"></div>
                    <div 
                      className="absolute top-0 left-0 h-2 bg-primary rounded-none"
                      style={{ width: `${(maxPages / 1000) * 100}%` }}
                    ></div>
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-900 rounded-none cursor-pointer"
                      style={{ left: `calc(${(maxPages / 1000) * 100}% - 8px)` }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="25"
                      value={maxPages}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        // Ensure the value is a multiple of 25
                        const roundedValue = Math.round(value / 25) * 25;
                        setMaxPages(roundedValue);
                      }}
                      className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer z-10"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs font-semibold text-gray-600">0</span>
                    <span className="text-xs font-semibold text-gray-600">500</span>
                    <span className="text-xs font-semibold text-gray-600">1000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-6">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <button
                onClick={handleCrawlAndDownload}
                disabled={isLoading || isCrawling}
                className="w-full px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium relative z-10 hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCrawling ? 'Indexing...' : 'Start Indexing'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {metrics.inProgress && (
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-1 translate-x-1"></div>
          <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-blue-50">
            <div className="space-y-3">
              <p className="text-blue-700 font-semibold">
                Indexing in progress: {metrics.completedPages}/{metrics.totalPages} pages
              </p>
              <div className="relative h-2">
                {/* Background track */}
                <div className="h-2 bg-gray-200 rounded-none"></div>
                {/* Progress bar */}
                <div 
                  className="absolute top-0 left-0 h-2 bg-primary rounded-none"
                  style={{ width: `${(metrics.completedPages / metrics.totalPages) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

     

      {error && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {debugInfo && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Processing Log</span>
            <button
              onClick={() => setDebugInfo(null)}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Clear
            </button>
          </div>
          <div ref={debugLogRef} className="h-48 overflow-y-auto bg-white rounded border border-gray-100 p-2">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">{debugInfo}</pre>
          </div>
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
                      <button
                        onClick={() => navigateToDoc(doc.domain)}
                        className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                      >
                        Preview
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
    {/* if newdataloadsing show beautiful loader spinner */}
    {newDataLoading && (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
        </div>
        )}
         {!newDataLoading && !noMoreData && (
        <div className="text-center mt-8">
          <button
            onClick={() => {
              loadSavedData(5);
            }}
            className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
          >
            {newDataLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
      </div>
     </>
  );
};

export default HomePage; 
