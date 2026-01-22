import React, { useState, useEffect, useCallback } from 'react';
import { Section, extractSections, getSectionById } from '../utils/section-extractor';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  searchQuery?: string;
  onCopySection?: (sectionId: string, content: string) => void;
}

export function TableOfContents({ content, searchQuery, onCopySection }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [matchingIds, setMatchingIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const extractedHeadings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      if (text.toLowerCase() !== 'table of contents') {
        extractedHeadings.push({ id, text, level });
      }
    }

    setHeadings(extractedHeadings.slice(0, 50));

    // Also extract sections for copy functionality
    const extractedSections = extractSections(content);
    setSections(extractedSections);
  }, [content]);

  // Update matching IDs when search query changes
  useEffect(() => {
    if (!searchQuery || searchQuery.length < 2) {
      setMatchingIds(new Set());
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const matching = new Set<string>();

    sections.forEach((section) => {
      if (
        section.title.toLowerCase().includes(lowerQuery) ||
        section.content.toLowerCase().includes(lowerQuery)
      ) {
        matching.add(section.id);
      }
    });

    setMatchingIds(matching);
  }, [searchQuery, sections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  const handleCopySection = useCallback(async (e: React.MouseEvent, headingId: string) => {
    e.stopPropagation();

    const section = getSectionById(sections, headingId);
    if (!section) {
      console.error('Section not found:', headingId);
      return;
    }

    const sectionContent = section.content;

    if (!sectionContent || sectionContent.trim() === '') {
      alert('Section is empty');
      return;
    }

    try {
      await navigator.clipboard.writeText(sectionContent);
      setCopiedId(headingId);
      onCopySection?.(headingId, sectionContent);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy section:', error);
      alert('Failed to copy section. Please try again.');
    }
  }, [sections, onCopySection]);

  if (headings.length === 0) return null;

  const isSearchActive = searchQuery && searchQuery.length >= 2;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary text-white border-[3px] border-gray-900 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
        aria-label="Toggle Table of Contents"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed top-24 right-6 w-72 max-h-[calc(100vh-200px)] overflow-y-auto
          bg-white border-[3px] border-gray-900 rounded-xl p-6 shadow-lg z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-[400px]'}
          lg:translate-x-0
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">On This Page</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
            aria-label="Close Table of Contents"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav>
          <ul className="space-y-1">
            {headings.map(({ id, text, level }) => {
              const isMatching = !isSearchActive || matchingIds.has(id);
              const isCopied = copiedId === id;

              return (
                <li
                  key={id}
                  style={{ paddingLeft: `${(level - 1) * 0.75}rem` }}
                  className="group relative"
                >
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => scrollToHeading(id)}
                      className={`
                        flex-1 text-left text-sm py-1.5 px-2 rounded transition-all
                        ${
                          activeId === id
                            ? 'text-primary font-semibold bg-gray-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }
                        ${!isMatching ? 'opacity-30' : ''}
                      `}
                    >
                      {text}
                    </button>

                    {/* Copy button - visible on hover or always on mobile */}
                    <button
                      onClick={(e) => handleCopySection(e, id)}
                      className={`
                        flex-shrink-0 p-1.5 rounded transition-all
                        ${isCopied
                          ? 'bg-green-100 text-green-600'
                          : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100 opacity-0 group-hover:opacity-100 lg:opacity-0 lg:group-hover:opacity-100'
                        }
                      `}
                      title={isCopied ? 'Copied!' : 'Copy section'}
                    >
                      {isCopied ? (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Search hint when search is active */}
        {isSearchActive && matchingIds.size > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              {matchingIds.size} section{matchingIds.size !== 1 ? 's' : ''} match "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </>
  );
}
