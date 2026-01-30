import React, { useState, useEffect, useMemo, Suspense, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import TurndownService from 'turndown';
import type { Node as TurndownNode } from 'turndown';
import DOMPurify from 'dompurify';
import { ErrorBoundary } from '../components/error-boundary';
import { DocSearch } from '../components/doc-search';
import { VersionSelector, OlderVersionBanner, type VersionInfo } from '../components/version-selector';

// Lazy load SyntaxHighlighter - it's a heavy library (~500KB)
const SyntaxHighlighterLazy = React.lazy(() => 
  Promise.all([
    import('react-syntax-highlighter'),
    import('react-syntax-highlighter/dist/esm/styles/prism')
  ]).then(([module, styles]) => ({
    default: ({ children, language }: { children: string; language: string }) => {
      const { Prism } = module;
      return (
        <Prism
          language={language}
          style={styles.oneDark}
          showLineNumbers={true}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.7',
            background: 'transparent'
          }}
          lineNumberStyle={{
            minWidth: '2.5em',
            paddingRight: '1em',
            color: '#666',
            marginRight: '1em',
            userSelect: 'none',
            background: 'transparent'
          }}
          wrapLongLines={false}
          preserveWhitespace={true}
        >
          {children}
        </Prism>
      );
    }
  }))
);

const API_URL = '/api';

interface DocContent {
  content: string;
  html?: string;
  domain: string;
  lastUpdated: string;
  url?: string;
  filePath?: string;
  version?: string;
  isLatest?: boolean;
  availableVersions?: VersionInfo[];
}

interface MarkdownComponentProps {
  children?: React.ReactNode;
  node?: any;
  ordered?: boolean;
  className?: string;
  href?: string;
  inline?: boolean;
  src?: string;
  alt?: string;
}

const DocPage: React.FC = () => {
  const { domain } = useParams<{ domain: string }>();
  const navigate = useNavigate();
  const [doc, setDoc] = useState<DocContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayMode, setDisplayMode] = useState<'markdown' | 'html'>('markdown');
  const [processedContent, setProcessedContent] = useState<string>('');
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentVersion, setCurrentVersion] = useState<string>('');
  const [availableVersions, setAvailableVersions] = useState<VersionInfo[]>([]);

  const fetchDocWithVersion = useCallback(async (version?: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const versionParam = version ? `?version=${encodeURIComponent(version)}` : '';
      const response = await fetch(`${API_URL}/docs/domain/${domain}${versionParam}`);
      if (!response.ok) {
        throw new Error('Documentation not found');
      }

      const data = await response.json();
      setDoc(data);

      // Update version state
      if (data.version) {
        setCurrentVersion(data.version);
      }
      if (data.availableVersions && Array.isArray(data.availableVersions)) {
        setAvailableVersions(data.availableVersions);
      }

      let content = '';

      if (data.html) {
        const cleanHtml = DOMPurify.sanitize(data.html, {
          ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img', 'pre', 'code', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
          ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class']
        });

        if (!data.content || data.content.trim() === '') {
          const turndownService = new TurndownService({
            headingStyle: 'atx',
            codeBlockStyle: 'fenced',
            emDelimiter: '_',
            bulletListMarker: '-'
          });

          turndownService.addRule('codeBlocks', {
            filter: ['pre', 'code'],
            replacement: function(content: string, node: TurndownNode) {
              if (node instanceof HTMLElement) {
                const language = node.className?.replace('language-', '') || '';
                if (node.nodeName === 'PRE') {
                  return `\n\`\`\`${language}\n${content}\n\`\`\`\n`;
                }
                return `\`${content}\``;
              }
              return `\n\`\`\`\n${content}\n\`\`\`\n`;
            }
          });

          content = turndownService.turndown(cleanHtml);
        } else {
          content = data.content;
        }
      } else {
        content = data.content || '';
      }

      content = cleanMarkdownContent(content);

      setProcessedContent(content);
      setDisplayMode('markdown');
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load documentation');
    } finally {
      setIsLoading(false);
    }
  }, [domain]);

  useEffect(() => {
    if (domain) {
      fetchDocWithVersion();
    }
  }, [domain, fetchDocWithVersion]);

  const handleVersionChange = useCallback((version: string) => {
    fetchDocWithVersion(version);
  }, [fetchDocWithVersion]);

  const handleViewLatest = useCallback(() => {
    const latestVersion = availableVersions.find(v => v.isLatest);
    if (latestVersion) {
      fetchDocWithVersion(latestVersion.version);
    } else {
      fetchDocWithVersion();
    }
  }, [availableVersions, fetchDocWithVersion]);

  const cleanMarkdownContent = (content: string): string => {
    // Remove excessive newlines
    content = content.replace(/\n{4,}/g, '\n\n\n');

    // Remove escaped brackets
    content = content.replace(/\\([[\]()])/g, '$1');

    // Remove empty code blocks
    content = content.replace(/```(\w+)?\s*\n\s*```/g, '');

    // Fix heading spacing
    content = content.replace(/^(#{1,6})\s{2,}/gm, '$1 ');

    // Remove null characters
    content = content.replace(/\0/g, '');

    // Remove empty anchor links with invisible characters [​](url) or [](url)
    content = content.replace(/\[[\u200B\u200C\u200D\uFEFF]*\]\([^)]*\)/g, '');

    // Remove standalone "Copy" lines (often artifacts from doc sites)
    content = content.replace(/^Copy\s*$/gm, '');

    // Remove lines that are just dashes (decorative separators)
    content = content.replace(/^-{10,}$/gm, '');

    // Convert setext-style headings (underlines) to ATX-style
    content = content.replace(/^(.+)\n={3,}\s*$/gm, '# $1');
    content = content.replace(/^(.+)\n-{3,}\s*$/gm, '## $1');

    // Remove empty headings (### followed by nothing meaningful)
    content = content.replace(/^#{1,6}\s*$/gm, '');

    // Clean up multiple consecutive blank lines
    content = content.replace(/\n{3,}/g, '\n\n');

    return content.trim();
  };

  const handleDownload = async () => {
    if (!doc?.filePath) return;
    
    try {
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
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download documentation. Please try again.');
    }
  };

  const handleCopyAll = async () => {
    try {
      const contentToCopy = processedContent || doc?.content || '';
      await navigator.clipboard.writeText(contentToCopy);
      alert('Content copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy content:', error);
      alert('Failed to copy content. Please try again.');
    }
  };

  const handleImageError = (src: string) => {
    setImageErrors(prev => new Set(prev).add(src));
  };


  const displayDomain = (domain: string) => {
    return domain.replace(/^docs\./, '').replace(/\.ai$/, '');
  };

  const createHeadingId = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const markdownComponents: Partial<Components> = useMemo(() => ({
    a: ({ children, href }: MarkdownComponentProps) => {
      if (!href) return <span className="text-gray-900">{children}</span>;
      
      const isAnchor = href.startsWith('#');
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      
      if (isAnchor) {
        return (
          <a
            href={href}
            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-2 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(href.slice(1));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {children}
          </a>
        );
      }

      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-2 transition-colors"
        >
          {children}
          {isExternal && (
            <svg
              className="inline-block ml-1 w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </a>
      );
    },
    h1: ({ children }: MarkdownComponentProps) => {
      const text = String(children);
      const id = createHeadingId(text);
      return (
        <h1 id={id} className="text-3xl font-bold mt-8 mb-4 text-gray-900 border-b-2 pb-2 border-gray-200 scroll-mt-20">
          {children}
        </h1>
      );
    },
    h2: ({ children }: MarkdownComponentProps) => {
      const text = String(children);
      const id = createHeadingId(text);
      return (
        <h2 id={id} className="text-2xl font-bold mt-6 mb-3 text-gray-900 scroll-mt-20">
          {children}
        </h2>
      );
    },
    h3: ({ children }: MarkdownComponentProps) => {
      const text = String(children);
      const id = createHeadingId(text);
      return (
        <h3 id={id} className="text-xl font-bold mt-5 mb-2 text-gray-900 scroll-mt-20">
          {children}
        </h3>
      );
    },
    h4: ({ children }: MarkdownComponentProps) => {
      const text = String(children);
      const id = createHeadingId(text);
      return (
        <h4 id={id} className="text-lg font-bold mt-4 mb-2 text-gray-900 scroll-mt-20">
          {children}
        </h4>
      );
    },
    h5: ({ children }: MarkdownComponentProps) => {
      const text = String(children);
      const id = createHeadingId(text);
      return (
        <h5 id={id} className="text-base font-bold mt-3 mb-2 text-gray-900 scroll-mt-20">
          {children}
        </h5>
      );
    },
    h6: ({ children }: MarkdownComponentProps) => {
      const text = String(children);
      const id = createHeadingId(text);
      return (
        <h6 id={id} className="text-sm font-semibold mt-3 mb-2 text-gray-700 scroll-mt-20">
          {children}
        </h6>
      );
    },
    p: ({ children }: MarkdownComponentProps) => (
      <p className="my-4 leading-7 text-gray-900">
        {children}
      </p>
    ),
    ul: ({ children }: MarkdownComponentProps) => (
      <ul className="list-disc pl-6 my-3 space-y-2 text-gray-900 marker:text-gray-500">
        {children}
      </ul>
    ),
    ol: ({ children }: MarkdownComponentProps) => (
      <ol className="list-decimal pl-6 my-3 space-y-2 text-gray-900 marker:text-gray-500">
        {children}
      </ol>
    ),
    li: ({ children }: MarkdownComponentProps) => (
      <li className="leading-relaxed text-gray-900">
        {children}
      </li>
    ),
    code: ({ children, inline, className }: MarkdownComponentProps) => {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match ? match[1] : '';

      if (inline) {
        return (
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900 border border-gray-200">
            {children}
          </code>
        );
      }

      let cleanContent = String(children);
      
      try {
        cleanContent = cleanContent
          .replace(/\[\]\(#__codelineno-\d+-\d+\)/g, '')
          .replace(/\\n/g, '\n')
          .replace(/\n+$/, '')
          .trim();
      } catch (e) {
        console.error('Error cleaning code content:', e);
      }

      return (
        <div className="relative my-4 rounded-lg overflow-hidden group">
          {lang && (
            <div className="bg-gray-800 text-xs text-gray-400 py-1.5 px-4 font-mono flex items-center justify-between">
              <span>{lang}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(cleanContent);
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
                title="Copy code"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          )}
          <div className="bg-[#1a1a1a] rounded-b-lg overflow-x-auto">
            <ErrorBoundary fallback={
              <pre className="p-4 text-sm text-gray-300 font-mono">
                <code>{cleanContent}</code>
              </pre>
            }>
              <Suspense fallback={
                <pre className="p-4 text-sm text-gray-300 font-mono">
                  <code>{cleanContent}</code>
                </pre>
              }>
                <SyntaxHighlighterLazy language={lang || 'text'}>
                  {cleanContent}
                </SyntaxHighlighterLazy>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      );
    },
    img: ({ src, alt }: MarkdownComponentProps) => {
      if (!src) return null;
      
      if (imageErrors.has(src)) {
        return (
          <div className="my-4 p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg text-center">
            <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-gray-600">{alt || 'Image failed to load'}</p>
            {src && (
              <a href={src} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block">
                View original
              </a>
            )}
          </div>
        );
      }
      
      return (
        <div className="my-6">
          <img
            src={src}
            alt={alt || 'Documentation image'}
            className="max-w-full h-auto rounded-lg border border-gray-200 shadow-sm"
            onError={() => handleImageError(src)}
            loading="lazy"
          />
          {alt && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">{alt}</p>
          )}
        </div>
      );
    },
    blockquote: ({ children }: MarkdownComponentProps) => (
      <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-gray-700 bg-gray-50 py-3 px-4 rounded-r">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-t-2 border-gray-200" />,
    table: ({ children }: MarkdownComponentProps) => (
      <div className="overflow-x-auto my-6 rounded-lg border-[3px] border-gray-900 shadow-lg">
        <table className="min-w-full divide-y-2 divide-gray-300">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: MarkdownComponentProps) => (
      <thead className="bg-gray-100">
        {children}
      </thead>
    ),
    tbody: ({ children }: MarkdownComponentProps) => (
      <tbody className="bg-white divide-y divide-gray-200">
        {children}
      </tbody>
    ),
    tr: ({ children }: MarkdownComponentProps) => (
      <tr className="hover:bg-gray-50 transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }: MarkdownComponentProps) => (
      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }: MarkdownComponentProps) => (
      <td className="px-6 py-4 text-sm text-gray-900">
        {children}
      </td>
    ),
    del: ({ children }: MarkdownComponentProps) => (
      <del className="text-gray-500 line-through">{children}</del>
    ),
    input: ({ checked }: MarkdownComponentProps & { checked?: boolean }) => (
      <input
        type="checkbox"
        checked={checked}
        disabled
        className="mr-2 cursor-not-allowed"
      />
    ),
  }), [imageErrors]);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center h-64">
          <div className="relative w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-l-primary rounded-full animate-spin"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 font-medium">Loading documentation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="bg-red-50 border-[3px] border-gray-900 rounded-xl p-8 text-center relative z-10">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h1 className="text-2xl font-bold text-red-700 mb-4">{error}</h1>
            <p className="text-gray-600 mb-6">The documentation you're looking for doesn't exist or couldn't be loaded.</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium hover:-translate-y-0.5 transition-transform"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="bg-yellow-50 border-[3px] border-gray-900 rounded-xl p-8 text-center relative z-10">
            <svg className="w-16 h-16 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-2xl font-bold text-yellow-700 mb-4">Documentation not found</h1>
            <p className="text-gray-600 mb-6">We couldn't find any documentation for this domain.</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium hover:-translate-y-0.5 transition-transform"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet prioritizeSeoTags={true}>
        <title>{displayDomain(doc?.domain || '')} Documentation | DocIngest</title>
        <meta name="description" content={`View ${displayDomain(doc?.domain || '')} documentation - Downloaded and saved with DocIngest`} />
        <meta name="keywords" content={`documentation, ${displayDomain(doc?.domain || '')}, docingest, api docs`} />
        <meta property="og:title" content={`${displayDomain(doc?.domain || '')} Documentation | DocIngest`} />
        <meta property="og:description" content={`View ${displayDomain(doc?.domain || '')} documentation`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://docingest.com/docs/${doc?.domain}`} />
      </Helmet>

      <div className="w-full px-4 lg:px-8 py-8">
        {/* Header Section - Full Width */}
        <div className="max-w-screen-2xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{displayDomain(doc?.domain || '')}</h1>
                {availableVersions.length > 0 && (
                  <VersionSelector
                    versions={availableVersions}
                    currentVersion={currentVersion}
                    onVersionChange={handleVersionChange}
                  />
                )}
              </div>
              <p className="text-gray-600">
                Last updated: {doc?.lastUpdated ? new Date(doc.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : 'Unknown'}
              </p>
              {doc?.url && (
                <a
                  href={doc.url.startsWith('http') ? doc.url : `https://${doc.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center mt-2"
                >
                  View original source
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-white text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
              >
                ← Back
              </button>
              <button
                onClick={handleCopyAll}
                className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy All
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
              {doc?.html && (
                <button
                  onClick={() => setDisplayMode(displayMode === 'markdown' ? 'html' : 'markdown')}
                  className="px-4 py-2 bg-gray-100 text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                >
                  {displayMode === 'markdown' ? 'View HTML' : 'View Markdown'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area - Full Width */}
        <div className="max-w-5xl mx-auto">
          {/* Older version warning banner */}
          {currentVersion && !doc?.isLatest && availableVersions.length > 1 && (
            <OlderVersionBanner
              currentVersion={currentVersion}
              latestVersion={availableVersions.find(v => v.isLatest)?.version || ''}
              onViewLatest={handleViewLatest}
            />
          )}

          {/* Search Bar */}
          {processedContent && displayMode === 'markdown' && (
            <div className="mb-6">
              <DocSearch
                content={processedContent}
                onSearchChange={(query) => setSearchQuery(query)}
              />
            </div>
          )}

          <div className="relative">
            <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
            <div className="rounded-xl relative z-20 p-6 md:p-12 border-[3px] border-gray-900 bg-white">
              <ErrorBoundary>
                <div className="prose prose-lg max-w-none">
                  {displayMode === 'markdown' ? (
                    <ReactMarkdown
                      components={markdownComponents}
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    >
                      {processedContent}
                    </ReactMarkdown>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(doc?.html || '')
                      }}
                      className="markdown-body"
                    />
                  )}
                </div>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocPage;

