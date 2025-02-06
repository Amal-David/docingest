import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TurndownService from 'turndown';
import type { Node as TurndownNode } from 'turndown';
import DOMPurify from 'dompurify';

const API_URL = '/api';

interface DocContent {
  content: string;
  html?: string;
  domain: string;
  lastUpdated: string;
  url?: string;
  filePath?: string;
}

interface MarkdownComponentProps {
  children?: React.ReactNode;
  node?: any;
  ordered?: boolean;
  className?: string;
  href?: string;
  inline?: boolean;
}

const DocPage: React.FC = () => {
  const { domain } = useParams<{ domain: string }>();
  const navigate = useNavigate();
  const [doc, setDoc] = useState<DocContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayMode, setDisplayMode] = useState<'markdown' | 'html'>('markdown');
  const [processedContent, setProcessedContent] = useState<string>('');

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/docs/domain/${domain}`);
        if (!response.ok) {
          throw new Error('Documentation not found');
        }
        const data = await response.json();
        setDoc(data);

        // Process the content
        if (data.html) {
          // Clean the HTML first
          const cleanHtml = DOMPurify.sanitize(data.html);
          
          if (!data.content || data.content.trim() === '') {
            // Convert HTML to Markdown if markdown content is missing
            const turndownService = new TurndownService({
              headingStyle: 'atx',
              codeBlockStyle: 'fenced',
              emDelimiter: '_'
            });
            
            // Custom rules for better conversion
            turndownService.addRule('codeBlocks', {
              filter: ['pre', 'code'],
              replacement: function(content: string, node: TurndownNode) {
                if (node instanceof HTMLElement) {
                  const language = node.className?.replace('language-', '') || '';
                  return `\n\`\`\`${language}\n${content}\n\`\`\`\n`;
                }
                return `\n\`\`\`\n${content}\n\`\`\`\n`;
              }
            });

            const markdown = turndownService.turndown(cleanHtml);
            setProcessedContent(markdown);
            setDisplayMode('markdown');
          } else {
            setProcessedContent(data.content);
            setDisplayMode('markdown');
          }
        } else {
          setProcessedContent(data.content);
          setDisplayMode('markdown');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to load documentation');
      } finally {
        setIsLoading(false);
      }
    };

    if (domain) {
      fetchDoc();
    }
  }, [domain]);

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
      if (doc?.content) {
        await navigator.clipboard.writeText(doc.content);
        alert('Content copied to clipboard!');
      }
    } catch (error) {
      console.error('Failed to copy content:', error);
      alert('Failed to copy content. Please try again.');
    }
  };

  const displayDomain = (domain: string) => {
    return domain.replace(/^docs\./, '').replace(/\.ai$/, '');
  };

  const markdownComponents: Partial<Components> = {
    a: ({ children, node }: MarkdownComponentProps) => {
      const line = node?.position?.start?.line;
      const parentListItem = node?.parent;
      const isInList = parentListItem?.type === 'listItem' || 
                      parentListItem?.parent?.type === 'list';
      const isInTOC = line && line < 50 && isInList;
      
      if (isInTOC) {
        return <span className="text-gray-900">{children}</span>;
      }

      return (
        <a href={node?.properties?.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 no-underline hover:text-gray-600">
          {children}
        </a>
      );
    },
    h1: ({ children }: MarkdownComponentProps) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 border-b pb-2 border-gray-200">
        {children}
      </h1>
    ),
    h2: ({ children }: MarkdownComponentProps) => (
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }: MarkdownComponentProps) => (
      <h3 className="text-xl font-bold mt-5 mb-2 text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }: MarkdownComponentProps) => (
      <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900">
        {children}
      </h4>
    ),
    h5: ({ children }: MarkdownComponentProps) => (
      <h5 className="text-base font-bold mt-3 mb-2 text-gray-900">
        {children}
      </h5>
    ),
    h6: ({ children }: MarkdownComponentProps) => (
      <h6 className="text-sm font-semibold mt-3 mb-2 text-gray-700">
        {children}
      </h6>
    ),
    p: ({ children }: MarkdownComponentProps) => (
      <p className="my-4 leading-7 text-gray-900">
        {children}
      </p>
    ),
    ul: ({ children, depth = 0 }: MarkdownComponentProps & { depth?: number }) => (
      <ul className={`list-disc pl-6 my-2 space-y-1 text-gray-900 marker:text-gray-500 ${depth > 0 ? 'ml-4' : ''}`}>
        {children}
      </ul>
    ),
    ol: ({ children, depth = 0 }: MarkdownComponentProps & { depth?: number }) => (
      <ol className={`list-decimal pl-6 my-2 space-y-1 text-gray-900 marker:text-gray-500 ${depth > 0 ? 'ml-4' : ''}`}>
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
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900">
            {children}
          </code>
        );
      }

      const cleanContent = String(children)
        .replace(/\[\]\(#__codelineno-\d+-\d+\)/g, '')
        .replace(/\\n/g, '\n')
        .replace(/\n+$/, '')
        .trim();

      return (
        <div className="relative my-4 rounded-lg overflow-hidden">
          {lang && (
            <div className="bg-gray-800 text-xs text-gray-400 py-1 px-4 absolute right-0 z-10">
              {lang}
            </div>
          )}
          <div className="bg-[#1a1a1a] rounded-lg">
            <SyntaxHighlighter
              language={lang || 'text'}
              style={oneDark}
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
                borderRight: '1px solid #404040',
                marginRight: '1em',
                userSelect: 'none'
              }}
              wrapLongLines={false}
              preserveWhitespace={true}
            >
              {cleanContent}
            </SyntaxHighlighter>
          </div>
        </div>
      );
    },
    img: ({ node, ...props }: MarkdownComponentProps & { src?: string; alt?: string }) => {
      if (!props.src) return null;
      return <img src={props.src} alt={props.alt || ''} className="max-w-full h-auto" />;
    },
    blockquote: ({ children }: MarkdownComponentProps) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-700 bg-gray-50 py-2 rounded-r">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-t border-gray-200" />,
    table: ({ children }: MarkdownComponentProps) => (
      <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          {children}
        </table>
      </div>
    ),
    th: ({ children }: MarkdownComponentProps) => (
      <th className="bg-gray-50 px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }: MarkdownComponentProps) => (
      <td className="px-6 py-4 text-sm text-gray-900 border-t border-gray-100">
        {children}
      </td>
    ),
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-red-50 border-[3px] border-gray-900 rounded-xl p-6 text-center">
          <h1 className="text-2xl font-bold text-red-700 mb-4">{error}</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium hover:-translate-y-0.5 transition-transform"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border-[3px] border-gray-900 rounded-xl p-6 text-center">
          <h1 className="text-2xl font-bold text-yellow-700 mb-4">Documentation not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium hover:-translate-y-0.5 transition-transform"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet prioritizeSeoTags={true}>
        <title>Document {displayDomain(doc?.domain || '')} | DocIngest</title>
        <meta name="description" content={`View - ${displayDomain(doc?.domain || '')} | DocIngest`} />
        <meta name="keywords" content={`documentation, ${displayDomain(doc?.domain || '')}, docingest`} />
        <meta property="og:title" content={`Document ${displayDomain(doc?.domain || '')} | DocIngest`} />
        <meta property="og:description" content={`View - ${displayDomain(doc?.domain || '')} | DocIngest`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://docingest.com/docs/${doc?.domain}`} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">{displayDomain(doc?.domain || '')}</h1>
              <p className="text-gray-600">Last updated: {doc?.lastUpdated ? new Date(doc.lastUpdated).toLocaleDateString() : ''}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-white text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
              >
                Back to Home
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
              >
                Download
              </button>
              {doc?.html && (
                <button
                  onClick={() => setDisplayMode(displayMode === 'markdown' ? 'html' : 'markdown')}
                  className="px-4 py-2 bg-secondary text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                >
                  {displayMode === 'markdown' ? 'View HTML' : 'View Markdown'}
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
            <div className="rounded-xl relative z-20 p-8 border-[3px] border-gray-900 bg-white">
              <div className="flex justify-end mb-6">
                <button
                  onClick={handleCopyAll}
                  className="px-4 py-2 bg-white text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
                >
                  Copy All
                </button>
              </div>
              <div className="prose prose-lg max-w-none">
                {displayMode === 'markdown' ? (
                  <ReactMarkdown components={markdownComponents}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocPage; 
