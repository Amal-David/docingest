import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { isLikelyBlockedPage } from '../utils/scrape-filter';

// Types
interface SearchResult {
  domain: string;
  title: string;
  snippet: string;
  url: string;
  matchType: 'prefix' | 'contains';
}

interface AutocompleteResponse {
  suggestions: SearchResult[];
  query: string;
  timing: number;
  source: string;
  totalMatches: number;
}

interface DocPreview {
  domain: string;
  url: string;
  lastUpdated: string;
  totalPages: number;
}

interface FastSearchResponse {
  results: SearchResult[];
  query: string;
  timing: number;
  total: number;
}

const API_URL = process.env.REACT_APP_API_URL || '/api';

// Debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default function HomePage() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Search state
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchTime, setSearchTime] = useState<number | null>(null);

  // Stats state
  const [stats, setStats] = useState({ totalDomains: 0, redisConnected: true });

  // Popular docs
  const [popularDocs, setPopularDocs] = useState<DocPreview[]>([]);

  // Resync state
  const [syncingDomain, setSyncingDomain] = useState<string | null>(null);
  const [syncProgress, setSyncProgress] = useState<{ completed: number; total: number } | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);
  const pollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxPollAttempts = 200; // ~10 minutes with 3s intervals
  const pollAttemptsRef = useRef(0);

  const debouncedQuery = useDebounce(query, 150);

  // Cleanup polling on unmount
  useEffect(() => {
    const timeoutRef = pollTimeoutRef;
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Function to refresh stats
  const refreshStats = useCallback(() => {
    fetch(`${API_URL}/admin/index/stats`)
      .then(r => r.json())
      .then(data => setStats(data))
      .catch(() => {});
  }, []);

  // Fetch stats on mount
  useEffect(() => {
    refreshStats();

    // Fetch top 10 recently added docs
    fetch(`${API_URL}/docs/list?page=1&limit=10&sortBy=newest`)
      .then(r => r.json())
      .then(data => setPopularDocs(data.docs || []))
      .catch(() => {});
  }, [refreshStats]);

  // Keyboard shortcut to focus search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setShowDropdown(false);
        inputRef.current?.blur();
      }
    };

    // Use capture phase to intercept before browser handles it
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  // Fetch autocomplete results
  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    setIsLoading(true);
    fetch(`${API_URL}/docs/autocomplete?q=${encodeURIComponent(debouncedQuery)}&limit=8`)
      .then(r => r.json())
      .then((data: AutocompleteResponse) => {
        setResults(data.suggestions || []);
        setSearchTime(data.timing);
        setShowDropdown(true);
        setSelectedIndex(0);
      })
      .catch(() => {
        setResults([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [debouncedQuery]);

  // Fast search function - fetches more results
  const performFastSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/docs/fast-search?q=${encodeURIComponent(searchQuery)}&limit=12`);
      const data: FastSearchResponse = await response.json();
      if (data.results && data.results.length > 0) {
        setResults(data.results);
        setSearchTime(data.timing);
        setShowDropdown(true);
        setSelectedIndex(0);
      }
    } catch {
      // Keep existing results on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Resync documentation - re-crawl and update existing docs
  const handleResync = useCallback(async (domain: string, url: string) => {
    if (syncingDomain) return; // Already syncing

    setSyncingDomain(domain);
    setSyncProgress(null);
    setSyncError(null);
    pollAttemptsRef.current = 0;

    // Clear any existing poll timeout
    if (pollTimeoutRef.current) {
      clearTimeout(pollTimeoutRef.current);
    }

    try {
      // Start crawl via server proxy (Cloudflare Browser Rendering)
      const requestBody = {
        url: url.startsWith('http') ? url : `https://${url}`,
        limit: 250,
        maxDepth: 5,
        allowBackwardLinks: true,
        ignoreQueryParameters: true,
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

      const response = await fetch(`${API_URL}/crawl/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        if (response.status === 429) {
          throw new Error('Rate limited. Please wait a few minutes and try again.');
        }
        throw new Error(`Failed to start resync: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      if (!data.success || !data.id) {
        throw new Error(data.error || 'Failed to start resync: No crawl ID received');
      }

      // Poll for completion with retry logic
      const pollStatus = async (crawlId: string, retryCount = 0) => {
        pollAttemptsRef.current++;

        // Check max attempts
        if (pollAttemptsRef.current > maxPollAttempts) {
          setSyncError('Resync timed out. The crawl is taking too long.');
          setSyncingDomain(null);
          setSyncProgress(null);
          return;
        }

        try {
          const statusResponse = await fetch(`${API_URL}/crawl/status/${crawlId}`);

          // Handle HTTP errors
          if (!statusResponse.ok) {
            if (statusResponse.status === 429) {
              // Rate limited - wait longer before retry
              console.log('Rate limited, waiting 10s before retry...');
              pollTimeoutRef.current = setTimeout(() => pollStatus(crawlId, 0), 10000);
              return;
            }
            if (retryCount < 3) {
              // Retry on other errors
              console.log(`Poll error ${statusResponse.status}, retry ${retryCount + 1}/3`);
              pollTimeoutRef.current = setTimeout(() => pollStatus(crawlId, retryCount + 1), 5000);
              return;
            }
            throw new Error(`Failed to check status: ${statusResponse.status}`);
          }

          const statusData = await statusResponse.json();

          setSyncProgress({
            completed: statusData.completed || 0,
            total: statusData.total || 0
          });

          if (statusData.status === 'completed') {
            // Save the updated documentation
            if (statusData.data && statusData.data.length > 0) {
              const timestamp = new Date().toISOString();
              const pages = statusData.data
                .filter((item: any) => {
                  const blocked = isLikelyBlockedPage(
                    item.metadata?.title,
                    item.markdown,
                    item.metadata?.sourceURL
                  );
                  return !blocked && item.markdown && item.markdown.length > 100;
                })
                .map((item: any) => ({
                  content: item.markdown,
                  type: item.metadata?.title || 'Unknown',
                  lastUpdated: timestamp,
                  url: item.metadata?.sourceURL,
                  domain
                }));

              if (pages.length > 0) {
                const saveResponse = await fetch(`${API_URL}/docs/save`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ domain, timestamp, pages })
                });

                if (!saveResponse.ok) {
                  const saveError = await saveResponse.text();
                  throw new Error(`Failed to save: ${saveError}`);
                }

                // Refresh the docs list and stats
                const refreshResponse = await fetch(`${API_URL}/docs/list?page=1&limit=10&sortBy=newest`);
                const refreshData = await refreshResponse.json();
                setPopularDocs(refreshData.docs || []);
                refreshStats();
              } else {
                setSyncError('No valid content found in crawled pages.');
              }
            } else {
              setSyncError('Crawl completed but no data received.');
            }
            setSyncingDomain(null);
            setSyncProgress(null);
          } else if (statusData.status === 'failed') {
            throw new Error(statusData.error || 'Crawl failed');
          } else {
            // Continue polling
            pollTimeoutRef.current = setTimeout(() => pollStatus(crawlId, 0), 3000);
          }
        } catch (pollError) {
          console.error('Poll error:', pollError);
          if (retryCount < 3) {
            pollTimeoutRef.current = setTimeout(() => pollStatus(crawlId, retryCount + 1), 5000);
          } else {
            throw pollError;
          }
        }
      };

      pollStatus(data.id);
    } catch (error) {
      console.error('Resync error:', error);
      setSyncError(error instanceof Error ? error.message : 'Resync failed. Please try again.');
      setSyncingDomain(null);
      setSyncProgress(null);
    }
  }, [syncingDomain, refreshStats]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        if (showDropdown && results.length > 0) {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
        }
        break;
      case 'ArrowUp':
        if (showDropdown && results.length > 0) {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (showDropdown && results.length > 0 && results[selectedIndex]) {
          navigate(`/docs/${results[selectedIndex].domain}`);
        } else if (query.length >= 2) {
          // Use fast-search for more results
          performFastSearch(query);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        break;
    }
  }, [showDropdown, results, selectedIndex, navigate, query, performFastSearch]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDomain = (domain: string) => {
    return domain.replace(/^docs\./, '').replace(/\.(com|org|io|dev|ai)$/, '');
  };

  return (
    <>
      <Helmet>
        <title>DocIngest is Open Source 🎉 | MCP-Ready Docs Engine</title>
        <meta name="description" content="DocIngest is now open source: turn documentation sites into searchable, MCP-accessible context for humans and coding agents." />
        <meta property="og:title" content="DocIngest is open source 🎉" />
        <meta property="og:description" content="Build, self-host, and extend the docs ingestion engine behind docingest.com." />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-5">
          <div>
            <span className="inline-flex items-center rounded-full border-[3px] border-gray-900 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Open-Source Docs Engine
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Searchable docs context for humans and coding agents
          </h1>
          <div className="group relative inline-flex items-center overflow-hidden rounded-lg border-[3px] border-gray-900 bg-pink-300 px-5 py-2 text-sm font-black uppercase tracking-[0.16em] text-gray-900 shadow-[5px_5px_0_#111827]">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-pink-400 opacity-70 transition-all group-hover:h-full"></span>
            <span className="relative z-10 inline-flex flex-wrap items-center justify-center gap-2">
              <span>
                DocIngest is{' '}
                <a
                  href="https://github.com/Amal-David/docingest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-900 decoration-2 underline-offset-4 hover:text-white"
                >
                  open source
                  <span aria-hidden="true" className="ml-1 inline-block -translate-y-0.5">↗</span>
                </a>{' '}
                now 🎉
              </span>
            </span>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            DocIngest turns documentation sites into a shared corpus you can browse in the UI, search across domains, and expose to MCP-compatible tools.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/add"
              className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
            >
              Add New Docs
            </Link>
            <Link
              to="/view"
              className="px-4 py-2 bg-white text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
            >
              Browse All
            </Link>
            <a
              href="https://github.com/Amal-David/docingest"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="rounded-full bg-white border-2 border-gray-900 px-3 py-1">Markdown-backed</span>
            <span className="rounded-full bg-white border-2 border-gray-900 px-3 py-1">Self-hostable</span>
            <span className="rounded-full bg-white border-2 border-gray-900 px-3 py-1">MCP-ready</span>
          </div>
        </div>

        {/* Search Box */}
        <div className="relative" ref={dropdownRef}>
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
            <div className="mb-4 space-y-1">
              <h2 className="text-xl font-bold">Search the indexed corpus</h2>
              <p className="text-sm text-gray-600">
                Search a library, framework, or API. Paste a docs URL here or use Add New Docs to index something new.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <div className="relative z-10 flex items-center bg-white border-[3px] border-gray-900 rounded">
                {/* Search icon */}
                <div className="pl-4 text-gray-400">
                  {isLoading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>

                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => results.length > 0 && setShowDropdown(true)}
                  placeholder="Search docs... (e.g. react, nextjs, tailwind, stripe)"
                  className="w-full p-4 bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                  autoComplete="off"
                  spellCheck={false}
                />

                {/* Keyboard shortcut hint */}
                <div className="pr-4">
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded border border-gray-300">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>

            {/* Dropdown */}
            {showDropdown && results.length > 0 && (
              <div className="mt-4 border-[3px] border-gray-900 rounded bg-white overflow-hidden">
                {results.map((result, index) => (
                  <button
                    key={result.domain}
                    onClick={() => navigate(`/docs/${result.domain}`)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`
                      w-full px-4 py-3 flex items-center gap-3 text-left transition-colors
                      ${index === selectedIndex ? 'bg-gray-100' : 'hover:bg-gray-50'}
                      ${index !== results.length - 1 ? 'border-b-2 border-gray-200' : ''}
                    `}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">
                        {result.domain.charAt(0).toUpperCase()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 truncate">
                          {result.title || formatDomain(result.domain)}
                        </span>
                        {result.matchType === 'prefix' && (
                          <span className="px-2 py-0.5 text-xs font-bold bg-green-100 text-green-700 rounded">
                            EXACT
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 truncate">{result.domain}</p>
                    </div>

                    {/* Arrow indicator */}
                    {index === selectedIndex && (
                      <div className="text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}

                {/* Footer hint */}
                <div className="px-4 py-2 bg-gray-50 border-t-2 border-gray-200 flex items-center justify-between text-xs text-gray-500">
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[10px]">↑↓</kbd>
                    {' '}to navigate
                    {' '}
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[10px]">↵</kbd>
                    {' '}to select
                  </span>
                  <span>{results.length} results</span>
                </div>
              </div>
            )}

            {/* No results */}
            {showDropdown && query.length >= 2 && results.length === 0 && !isLoading && (
              <div className="mt-4 p-6 border-[3px] border-gray-900 rounded bg-white text-center">
                <p className="text-gray-600 mb-2">No documentation found for "{query}"</p>
                <button
                  onClick={() => {
                    // Check if query looks like a URL
                    const isUrl = query.startsWith('http://') || query.startsWith('https://') || query.includes('.');
                    if (isUrl) {
                      // Pass URL and auto-start flag
                      const urlToPass = query.startsWith('http') ? query : `https://${query}`;
                      navigate(`/add?url=${encodeURIComponent(urlToPass)}&autoStart=true`);
                    } else {
                      navigate('/add');
                    }
                  }}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  + Index this docs site
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <span>{stats.totalDomains > 0 ? `${stats.totalDomains}+` : '...'} docs indexed</span>
          <span>•</span>
          <span>One corpus for humans, Claude Code, Cursor, Windsurf, Codex, and other MCP clients</span>
        </div>

        {/* MCP CTA */}
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-8 border-[3px] border-gray-900 bg-blue-50 text-center">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
              One Corpus, Many Interfaces
            </span>
            <h3 className="text-xl font-bold mb-2">Use the Same Docs Corpus Everywhere</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
              Index docs once, then search them in the web app or expose them to Claude Code, Cursor, Windsurf, Codex, and other MCP-compatible tools.
            </p>
            <div className="relative inline-block mb-4">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <code className="relative z-10 block bg-white px-4 py-3 rounded border-[3px] border-gray-900 font-mono text-sm text-left">
                <span className="text-gray-500">$</span>
                <span className="text-primary"> claude mcp add</span>
                <span className="text-gray-900"> docingest -- npx -y @docingest/mcp-server</span>
              </code>
            </div>
            <div>
              <Link
                to="/mcp-guide"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
              >
                Open MCP Setup Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Sync Error Message */}
        {syncError && (
          <div className="relative">
            <div className="w-full h-full absolute inset-0 bg-red-900 rounded-xl translate-y-1 translate-x-1"></div>
            <div className="rounded-xl relative z-20 p-4 border-[3px] border-red-900 bg-red-50 flex items-center justify-between">
              <p className="text-red-700 text-sm">{syncError}</p>
              <button
                onClick={() => setSyncError(null)}
                className="text-red-700 hover:text-red-900 font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Recently Updated Docs */}
        {popularDocs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Explore Recently Indexed Docs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularDocs.slice(0, 10).map((doc) => (
                <div key={doc.domain} className="relative">
                  <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
                  <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{formatDomain(doc.domain)}</h3>
                      <p className="text-sm text-gray-600">Domain: {doc.domain}</p>
                      <p className="text-sm text-gray-600">
                        Updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                      </p>
                      <a
                        href={`https://${doc.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View Source
                      </a>
                    </div>

                    {/* Sync progress indicator */}
                    {syncingDomain === doc.domain && syncProgress && (
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Syncing...</span>
                          <span>{syncProgress.completed}/{syncProgress.total} pages</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded">
                          <div
                            className="h-2 bg-primary rounded transition-all"
                            style={{ width: `${syncProgress.total ? (syncProgress.completed / syncProgress.total) * 100 : 0}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Syncing but no progress yet */}
                    {syncingDomain === doc.domain && !syncProgress && (
                      <div className="mt-3">
                        <p className="text-xs text-blue-600">Starting crawl...</p>
                      </div>
                    )}

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => navigate(`/docs/${doc.domain}`)}
                        className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                      >
                        Open Docs
                      </button>
                      <button
                        onClick={() => handleResync(doc.domain, doc.url || doc.domain)}
                        disabled={syncingDomain !== null}
                        title="Re-index this documentation source with the latest content"
                        className={`px-4 py-2 border-[3px] border-gray-900 rounded transition-transform ${
                          syncingDomain === doc.domain
                            ? 'bg-blue-100 text-blue-700 cursor-wait'
                            : syncingDomain
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-secondary text-gray-900 hover:-translate-y-0.5'
                        }`}
                      >
                        {syncingDomain === doc.domain ? 'Indexing...' : 'Re-index'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
