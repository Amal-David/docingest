import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

const FIRECRAWL_API_URL = process.env.REACT_APP_FIRECRAWL_API_URL || 'http://localhost:3002/v1';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL || 'http://localhost:8001/api';

const DOCS_PER_PAGE = 10;

interface SavedDoc {
  domain: string;
  timestamp: number;
  type: string;
  url: string;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState<{ status: string; percent: number } | null>(null);
  const [savedDocs, setSavedDocs] = useState<SavedDoc[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadSavedDocs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMoreDocs();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loadingMore]);

  const loadSavedDocs = async () => {
    try {
      const response = await fetch(`${SERVER_API_URL}/docs/list?page=1&limit=${DOCS_PER_PAGE}`);
      if (!response.ok) {
        setSavedDocs([]);
        setHasMore(false);
        return;
      }
      
      const data = await response.json();
      if (!data.docs || !Array.isArray(data.docs)) {
        setSavedDocs([]);
        setHasMore(false);
        return;
      }

      setSavedDocs(data.docs);
      setHasMore(data.docs.length === DOCS_PER_PAGE);
      setPage(1);
    } catch (err) {
      console.error('Load error:', err);
      setSavedDocs([]);
      setHasMore(false);
    }
  };

  const loadMoreDocs = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const response = await fetch(`${SERVER_API_URL}/docs/list?page=${nextPage}&limit=${DOCS_PER_PAGE}`);
      if (!response.ok) {
        setHasMore(false);
        return;
      }
      
      const data = await response.json();
      if (!data.docs || !Array.isArray(data.docs)) {
        setHasMore(false);
        return;
      }

      setSavedDocs(prev => [...prev, ...data.docs]);
      setHasMore(data.docs.length === DOCS_PER_PAGE);
      setPage(nextPage);
    } catch (err) {
      console.error('Load more error:', err);
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

  const getPrimaryDomain = (urlString: string): string => {
    try {
      const urlObj = new URL(urlString);
      return urlObj.hostname.replace(/^docs\./, '').replace(/\.ai$/, '');
    } catch {
      return urlString.replace(/^docs\./, '').replace(/\.ai$/, '');
    }
  };

  const checkExistingDocumentation = async (domain: string) => {
    try {
      const formattedDomain = `docs.${domain}.ai`;
      const response = await fetch(`${SERVER_API_URL}/docs/check/${formattedDomain}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(() => null);

      if (!response || !response.ok) {
        return { exists: false, isRecent: false };
      }

      const data = await response.json().catch(() => null);
      if (!data) {
        return { exists: false, isRecent: false };
      }

      return data;
    } catch (error) {
      console.error('Error checking documentation:', error);
      return { exists: false, isRecent: false };
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setProgress({ status: 'Checking existing documentation...', percent: 0 });

    try {
      const domain = getPrimaryDomain(url);
      const { exists, isRecent, metadata } = await checkExistingDocumentation(domain);

      if (exists && isRecent && metadata) {
        setProgress({
          status: 'Found recent documentation in archives',
          percent: 100
        });
        
        // Short delay to show the archive status
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate(`/docs/${domain}`);
        return;
      }

      // If docs exist but are old, or don't exist, proceed with crawling
      setProgress({
        status: exists ? 'Documentation outdated, re-downloading...' : 'Starting documentation download...',
        percent: 10
      });

      // Step 1: Call Firecrawl API to crawl the documentation
      const crawlResponse = await fetch(`${FIRECRAWL_API_URL}/crawl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          url: url.trim(),
          maxPages: 250,
          includeImages: true,
          maxDepth: 5
        })
      }).catch(error => {
        console.error('Network error:', error);
        throw new Error('Failed to connect to documentation service');
      });

      if (!crawlResponse || !crawlResponse.ok) {
        const errorData = await crawlResponse?.json().catch(() => ({ error: 'Failed to parse error response' }));
        throw new Error(errorData?.error || `Failed to crawl documentation: ${crawlResponse?.statusText || 'Network error'}`);
      }

      const crawlData = await crawlResponse.json().catch(() => null);
      if (!crawlData || !crawlData.success || !crawlData.id) {
        throw new Error('No crawl ID received from documentation service');
      }

      setProgress({
        status: 'Documentation crawl started...',
        percent: 25
      });

      // Step 2: Poll the scrape endpoint until completion
      const maxRetries = 30; // 30 seconds timeout
      let retries = 0;
      let scrapeData = null;

      while (retries < maxRetries) {
        const scrapeResponse = await fetch(`${FIRECRAWL_API_URL}/crawl/${crawlData.id}`).catch(() => null);
        
        if (!scrapeResponse || !scrapeResponse.ok) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          retries++;
          continue;
        }

        scrapeData = await scrapeResponse.json().catch(() => null);
        if (!scrapeData || !scrapeData.success) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          retries++;
          continue;
        }

        if (scrapeData.status === 'completed' && scrapeData.data && scrapeData.data.length > 0) {
          break;
        }

        setProgress({
          status: 'Processing documentation...',
          percent: 25 + Math.min(((retries + 1) / maxRetries) * 25, 25)
        });

        await new Promise(resolve => setTimeout(resolve, 1000));
        retries++;
      }

      if (!scrapeData || !scrapeData.data || scrapeData.data.length === 0) {
        throw new Error('Failed to retrieve documentation content');
      }

      setProgress({
        status: 'Saving documentation...',
        percent: 75
      });

      // Save the documentation
      const saveResponse = await fetch(`${SERVER_API_URL}/docs/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          domain: `docs.${domain}.ai`,
          url: url.trim(),
          type: 'documentation',
          content: scrapeData.data[0].markdown,
          timestamp: Date.now()
        })
      }).catch(error => {
        console.error('Save error:', error);
        throw new Error('Failed to save documentation');
      });

      if (!saveResponse || !saveResponse.ok) {
        const saveErrorData = await saveResponse?.json().catch(() => ({ error: 'Failed to parse save error response' }));
        throw new Error(saveErrorData?.error || `Failed to save documentation: ${saveResponse?.statusText || 'Network error'}`);
      }

      setProgress({
        status: 'Documentation saved successfully!',
        percent: 100
      });

      // Short delay to show success message
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Refresh the list of saved docs
      await loadSavedDocs();

      // Redirect to view page
      navigate('/view');
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while processing the documentation');
      setProgress(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto p-4 min-h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex-1">
        <div className="space-y-4 text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-gray-900">Doc</span>
            <span className="text-[#F06B7A]">Ingest</span>
          </h1>
          <p className="text-gray-600">
            Download and save documentation from any URL
          </p>
          <div className="flex justify-center">
            <Link
              to="/view"
              className="px-6 py-2 bg-[#FFE5E8] text-gray-900 rounded border-[3px] border-gray-900 hover:-translate-y-0.5 transition-transform"
            >
              Search PreIndexed Docs
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-8 border-[3px] border-gray-900 bg-card">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                  <Input
                    type="url"
                    placeholder="Enter documentation URL..."
                    value={url}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                    required
                    disabled={loading}
                    className="relative z-10"
                  />
                </div>
                <div className="relative">
                  <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#F06B7A] hover:bg-[#E85D6C] relative z-10"
                  >
                    {loading ? 'Processing...' : 'Download Documentation'}
                  </Button>
                </div>
              </div>
            </form>

            {progress && (
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{progress.status}</span>
                  <span className="text-[#F06B7A]">{progress.percent}%</span>
                </div>
                <Progress value={progress.percent} />
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-50 rounded border-2 border-red-200">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>
        </div>

        {savedDocs.length > 0 ? (
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Recently Indexed Docs</h2>
            <div className="grid gap-6">
              {savedDocs.map((doc, index) => (
                <div key={`${doc.domain}-${index}`} className="relative">
                  <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
                  <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{doc.type}</h3>
                      <p className="text-sm text-gray-600">Domain: {doc.domain}</p>
                      <p className="text-sm text-gray-600">
                        Saved: {new Date(doc.timestamp).toLocaleDateString()}
                      </p>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#F06B7A] hover:underline"
                      >
                        View Source
                      </a>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <Link
                        to={`/docs/${doc.domain.replace(/^docs\./, '').replace(/\.ai$/, '')}`}
                        className="px-4 py-2 bg-[#FFE5E8] text-gray-900 border-[3px] border-gray-900 rounded hover:-translate-y-0.5 transition-transform text-center"
                      >
                        View Page
                      </Link>
                      <Button
                        onClick={() => navigate(`/docs/${doc.domain.replace(/^docs\./, '').replace(/\.ai$/, '')}`)}
                        className="bg-[#F06B7A] hover:bg-[#E85D6C]"
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div ref={observerTarget} className="h-4">
              {loadingMore && (
                <div className="text-center py-4">
                  <Progress value={undefined} className="w-24 mx-auto" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <div className="relative">
              <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
              <div className="rounded-xl relative z-20 p-8 border-[3px] border-gray-900 bg-card">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold">No Documentation Yet</h2>
                  <p className="text-gray-600">
                    Start by downloading documentation from a URL above. Your indexed documentation will appear here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage; 