import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const API_URL = 'http://localhost:8001/api';

interface DocContent {
  content: string;
  domain: string;
  lastUpdated: string;
  url?: string;
  filePath?: string;
}

const DocPage: React.FC = () => {
  const { domain } = useParams<{ domain: string }>();
  const [doc, setDoc] = useState<DocContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const displayDomain = (domain?: string) => {
    if (!domain) return '';
    return domain.replace(/^docs\./, '').replace(/\.ai$/, '');
  }

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        if (!domain) {
          throw new Error('Invalid domain');
        }
        const formattedDomain = `docs.${domain}.ai`;
        const response = await fetch(`${API_URL}/docs/domain/${formattedDomain}`);
        if (!response.ok) {
          throw new Error('Documentation not found');
        }
        const data = await response.json();
        setDoc(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to load documentation');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoc();
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
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download file');
    }
  };

  if (isLoading) {
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

  if (error) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-[3px] border-gray-900 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-bold text-red-700 mb-4">{error}</h1>
            <Link 
              to="/"
              className="inline-block px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium hover:-translate-y-0.5 transition-transform"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-[3px] border-gray-900 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-bold text-yellow-700 mb-4">Documentation not found</h1>
            <Link 
              to="/"
              className="inline-block px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium hover:-translate-y-0.5 transition-transform"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">{displayDomain(doc.domain)}</h1>
            <p className="text-gray-600">
              Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}
            </p>
          </div>
          <div className="space-x-4">
            <Link 
              to="/"
              className="inline-block px-4 py-2 bg-gray-100 text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
            >
              Back to Home
            </Link>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-primary text-white border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform"
            >
              Download
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border-[3px] border-gray-900 p-8 prose max-w-none">
          <ReactMarkdown>{doc.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default DocPage; 