import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

const API_URL = '/api';

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

export default function NewHomePage() {
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
  const [stats, setStats] = useState({ totalDomains: 773, redisConnected: true });

  // Popular docs
  const [popularDocs, setPopularDocs] = useState<DocPreview[]>([]);

  const debouncedQuery = useDebounce(query, 150);

  // Fetch stats on mount
  useEffect(() => {
    fetch(`${API_URL}/admin/index/stats`)
      .then(r => r.json())
      .then(data => setStats(data))
      .catch(() => {});

    // Fetch some docs for the grid
    fetch(`${API_URL}/docs/list?page=1&limit=12&sortBy=newest`)
      .then(r => r.json())
      .then(data => setPopularDocs(data.docs || []))
      .catch(() => {});
  }, []);

  // Keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setShowDropdown(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showDropdown || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          navigate(`/docs/${results[selectedIndex].domain}`);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        break;
    }
  }, [showDropdown, results, selectedIndex, navigate]);

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
        <title>DocIngest - Instant Documentation Search for Developers</title>
        <meta name="description" content="Search 700+ documentation sources instantly. Used by developers with AI coding tools like Cursor, Claude, and Windsurf." />
      </Helmet>

      <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
        {/* Gradient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
        </div>

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight">DocIngest</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your/docingest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <button
              onClick={() => navigate('/add')}
              className="px-4 py-2 text-sm font-medium bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
            >
              Add Docs
            </button>
          </div>
        </nav>

        {/* Hero */}
        <main className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-16">
          {/* Tagline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Documentation,<br />instantly searchable
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Search {stats.totalDomains}+ documentation sources in milliseconds.
              <br />Built for developers using AI coding tools.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative mb-8" ref={dropdownRef}>
            <div className={`
              relative bg-zinc-900/80 backdrop-blur-xl border rounded-2xl
              transition-all duration-200
              ${showDropdown && results.length > 0
                ? 'border-cyan-500/50 shadow-[0_0_40px_rgba(0,217,255,0.15)] rounded-b-none'
                : 'border-zinc-800 hover:border-zinc-700'}
            `}>
              {/* Search icon */}
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500">
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
                placeholder="Search documentation..."
                className="w-full bg-transparent text-white text-lg pl-14 pr-24 py-5 outline-none placeholder:text-zinc-600"
                autoComplete="off"
                spellCheck={false}
              />

              {/* Keyboard shortcut hint */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {searchTime !== null && query.length >= 2 && (
                  <span className="text-xs text-zinc-600 font-mono">{searchTime}ms</span>
                )}
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-zinc-500 bg-zinc-800 rounded border border-zinc-700">
                  <span className="text-[10px]">⌘</span>K
                </kbd>
              </div>
            </div>

            {/* Dropdown */}
            {showDropdown && results.length > 0 && (
              <div className="absolute w-full bg-zinc-900/95 backdrop-blur-xl border border-t-0 border-cyan-500/50 rounded-b-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                {results.map((result, index) => (
                  <button
                    key={result.domain}
                    onClick={() => navigate(`/docs/${result.domain}`)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`
                      w-full px-5 py-4 flex items-start gap-4 text-left transition-colors
                      ${index === selectedIndex ? 'bg-zinc-800/80' : 'hover:bg-zinc-800/50'}
                      ${index !== results.length - 1 ? 'border-b border-zinc-800/50' : ''}
                    `}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-zinc-300">
                        {result.domain.charAt(0).toUpperCase()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-white truncate">
                          {result.title || formatDomain(result.domain)}
                        </span>
                        {result.matchType === 'prefix' && (
                          <span className="px-1.5 py-0.5 text-[10px] font-medium bg-cyan-500/20 text-cyan-400 rounded">
                            EXACT
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500 truncate">{result.domain}</p>
                    </div>

                    {/* Arrow indicator */}
                    {index === selectedIndex && (
                      <div className="text-zinc-500 self-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}

                {/* Footer hint */}
                <div className="px-5 py-3 bg-zinc-900 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500">
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px]">↑↓</kbd>
                    {' '}to navigate
                    {' '}
                    <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px]">↵</kbd>
                    {' '}to select
                  </span>
                  <span>{results.length} results</span>
                </div>
              </div>
            )}

            {/* No results */}
            {showDropdown && query.length >= 2 && results.length === 0 && !isLoading && (
              <div className="absolute w-full bg-zinc-900/95 backdrop-blur-xl border border-t-0 border-zinc-700 rounded-b-2xl p-8 text-center">
                <p className="text-zinc-400 mb-2">No documentation found for "{query}"</p>
                <button
                  onClick={() => navigate('/add')}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  + Add this documentation
                </button>
              </div>
            )}
          </div>

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 mb-16">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${stats.redisConnected ? 'bg-emerald-500' : 'bg-red-500'}`} />
              <span>{stats.totalDomains}+ docs indexed</span>
            </div>
            <div className="w-px h-4 bg-zinc-800" />
            <span>1,000+ developers/month</span>
            <div className="w-px h-4 bg-zinc-800" />
            <span>{"<"}50ms search</span>
          </div>

          {/* Integration badges */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className="text-xs text-zinc-600 uppercase tracking-wider">Works with</span>
            <div className="flex items-center gap-2">
              {['Claude', 'Cursor', 'Windsurf', 'VS Code'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-medium bg-zinc-800/50 text-zinc-400 rounded-full border border-zinc-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Popular docs grid */}
          <div className="mb-16">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
              Recently Updated
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {popularDocs.slice(0, 8).map((doc) => (
                <button
                  key={doc.domain}
                  onClick={() => navigate(`/docs/${doc.domain}`)}
                  className="group p-4 bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 rounded-xl text-left transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <span className="text-sm font-bold text-zinc-300">
                      {doc.domain.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="font-medium text-sm text-white truncate mb-1">
                    {formatDomain(doc.domain)}
                  </p>
                  <p className="text-xs text-zinc-600 truncate">{doc.domain}</p>
                </button>
              ))}
            </div>
          </div>

          {/* MCP CTA */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              MCP Server Available
            </div>
            <h3 className="text-xl font-semibold mb-2">Use with AI Coding Tools</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
              Add DocIngest to Claude Code, Cursor, or any MCP-compatible tool for instant documentation access in your prompts.
            </p>
            <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm text-left max-w-lg mx-auto border border-zinc-800">
              <span className="text-zinc-500">$</span>
              <span className="text-cyan-400"> claude mcp add</span>
              <span className="text-white"> docingest</span>
              <span className="text-zinc-500"> -- npx @docingest/mcp-server</span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-zinc-900 py-8">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-zinc-600">
            <span>Built for developers who ship fast</span>
            <div className="flex items-center gap-6">
              <a href="/view" className="hover:text-zinc-400 transition-colors">Browse All</a>
              <a href="/add" className="hover:text-zinc-400 transition-colors">Add Docs</a>
              <a href="https://github.com" className="hover:text-zinc-400 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
