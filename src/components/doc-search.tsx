import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SearchMatch {
  index: number;
  text: string;
  lineNumber: number;
}

interface DocSearchProps {
  content: string;
  onMatchChange?: (matchIndex: number, totalMatches: number) => void;
  onSearchChange?: (query: string) => void;
}

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

// Escape special regex characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function DocSearch({ content, onMatchChange, onSearchChange }: DocSearchProps) {
  const [query, setQuery] = useState('');
  const [matches, setMatches] = useState<SearchMatch[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query, 200);

  // Define callbacks first (before useEffects that use them)
  const clearHighlights = useCallback(() => {
    document.querySelectorAll('.doc-search-highlight').forEach((mark) => {
      const parent = mark.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
        parent.normalize();
      }
    });
  }, []);

  const scrollToMatch = useCallback((index: number) => {
    const highlights = document.querySelectorAll('.doc-search-highlight');
    if (highlights.length === 0) return;

    // Remove current highlight from all
    highlights.forEach((h) => {
      h.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
    });

    // Add current highlight
    const currentHighlight = highlights[index];
    if (currentHighlight) {
      currentHighlight.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
      currentHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const highlightMatches = useCallback((searchQuery: string) => {
    // Remove existing highlights first
    clearHighlights();

    if (!searchQuery.trim()) return;

    const escapedQuery = escapeRegex(searchQuery);
    const proseElement = document.querySelector('.prose');
    if (!proseElement) return;

    const walker = document.createTreeWalker(
      proseElement,
      NodeFilter.SHOW_TEXT,
      null
    );

    const textNodes: Text[] = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node as Text);
    }

    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    textNodes.forEach((textNode) => {
      const text = textNode.textContent || '';
      if (!regex.test(text)) return;

      // Reset lastIndex for each node
      regex.lastIndex = 0;

      const parts = text.split(regex);
      if (parts.length <= 1) return;

      const fragment = document.createDocumentFragment();
      parts.forEach((part) => {
        if (regex.test(part)) {
          regex.lastIndex = 0;
          const mark = document.createElement('mark');
          mark.className = 'bg-yellow-200 text-gray-900 rounded px-0.5 doc-search-highlight';
          mark.textContent = part;
          fragment.appendChild(mark);
        } else {
          fragment.appendChild(document.createTextNode(part));
        }
      });

      textNode.parentNode?.replaceChild(fragment, textNode);
    });
  }, [clearHighlights]);

  const goToNextMatch = useCallback(() => {
    if (matches.length === 0) return;
    const nextIndex = (currentMatchIndex + 1) % matches.length;
    setCurrentMatchIndex(nextIndex);
    scrollToMatch(nextIndex);
  }, [matches.length, currentMatchIndex, scrollToMatch]);

  const goToPrevMatch = useCallback(() => {
    if (matches.length === 0) return;
    const prevIndex = (currentMatchIndex - 1 + matches.length) % matches.length;
    setCurrentMatchIndex(prevIndex);
    scrollToMatch(prevIndex);
  }, [matches.length, currentMatchIndex, scrollToMatch]);

  const handleClear = useCallback(() => {
    setQuery('');
    setMatches([]);
    setCurrentMatchIndex(0);
    clearHighlights();
    inputRef.current?.focus();
  }, [clearHighlights]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) {
        goToPrevMatch();
      } else {
        goToNextMatch();
      }
    }
    if (e.key === 'Escape') {
      handleClear();
    }
  }, [goToNextMatch, goToPrevMatch, handleClear]);

  // Find all matches when query changes
  useEffect(() => {
    if (!debouncedQuery.trim() || debouncedQuery.length < 2) {
      setMatches([]);
      setCurrentMatchIndex(0);
      clearHighlights();
      return;
    }

    const escapedQuery = escapeRegex(debouncedQuery);
    const regex = new RegExp(escapedQuery, 'gi');
    const foundMatches: SearchMatch[] = [];

    let match;
    while ((match = regex.exec(content)) !== null) {
      // Calculate line number
      const beforeMatch = content.slice(0, match.index);
      const lineNumber = (beforeMatch.match(/\n/g) || []).length + 1;

      foundMatches.push({
        index: match.index,
        text: match[0],
        lineNumber
      });
    }

    setMatches(foundMatches);
    setCurrentMatchIndex(0);

    if (foundMatches.length > 0) {
      highlightMatches(debouncedQuery);
      scrollToMatch(0);
    } else {
      clearHighlights();
    }
  }, [debouncedQuery, content, highlightMatches, scrollToMatch, clearHighlights]);

  // Notify parent of match changes
  useEffect(() => {
    onMatchChange?.(currentMatchIndex, matches.length);
  }, [currentMatchIndex, matches.length, onMatchChange]);

  // Notify parent of search query changes
  useEffect(() => {
    onSearchChange?.(debouncedQuery);
  }, [debouncedQuery, onSearchChange]);

  // Keyboard shortcut to focus search
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Cleanup highlights on unmount
  useEffect(() => {
    return () => {
      clearHighlights();
    };
  }, [clearHighlights]);

  return (
    <div className="relative">
      <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-lg translate-y-1 translate-x-1"></div>
      <div className="relative z-10 bg-white border-[3px] border-gray-900 rounded-lg p-3">
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="flex-1 relative flex items-center">
            <svg
              className="absolute left-3 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search in document... (⌘F)"
              className="w-full pl-9 pr-8 py-2 bg-gray-50 border-2 border-gray-200 rounded-lg text-sm outline-none focus:border-primary focus:bg-white transition-colors"
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button
                onClick={handleClear}
                className="absolute right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Match Count & Navigation */}
          {query.length >= 2 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 whitespace-nowrap min-w-[100px]">
                {matches.length === 0 ? (
                  <span className="text-red-500">No matches</span>
                ) : (
                  `${currentMatchIndex + 1} of ${matches.length}`
                )}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={goToPrevMatch}
                  disabled={matches.length === 0}
                  className="p-1.5 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  title="Previous match (Shift+Enter)"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={goToNextMatch}
                  disabled={matches.length === 0}
                  className="p-1.5 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  title="Next match (Enter)"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
