import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

// API Configuration
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL || 'http://localhost:8001/api';
const FIRECRAWL_API_URL = process.env.REACT_APP_FIRECRAWL_API_URL || 'http://localhost:3002/v1';

interface ScrapingProgress {
  currentPage: number;
  totalPages: number;
  status: string;
  isArchived?: boolean;
  lastScraped?: number;
}

const HomePage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<ScrapingProgress | null>(null);
  const navigate = useNavigate();

  const getPrimaryDomain = (url: string): string => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace(/^docs\./, '').replace(/\.ai$/, '');
    } catch {
      return url.replace(/^docs\./, '').replace(/\.ai$/, '');
    }
  };

  const checkExistingDocumentation = async (domain: string) => {
    try {
      const response = await fetch(`${SERVER_API_URL}/docs/check/${domain}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error checking documentation:', error);
      return { exists: false, isRecent: false };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsProcessing(true);
    setProgress({ currentPage: 0, totalPages: 0, status: 'Checking existing documentation...' });

    try {
      const domain = getPrimaryDomain(url);
      const { exists, isRecent, metadata } = await checkExistingDocumentation(domain);

      if (exists && isRecent) {
        setProgress({
          currentPage: 1,
          totalPages: 1,
          status: 'Found recent documentation in archives',
          isArchived: true,
          lastScraped: metadata?.timestamp
        });
        
        // Short delay to show the archive status
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate(`/docs/${domain}`);
        return;
      }

      // If docs exist but are old, or don't exist, proceed with scraping
      setProgress({
        currentPage: 0,
        totalPages: 0,
        status: exists ? 'Documentation outdated, re-scraping...' : 'Starting documentation scraping...'
      });

      const response = await fetch(`${FIRECRAWL_API_URL}/scrape`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          maxPages: 250,
          scrapeOptions: {
            formats: ['markdown'],
            onlyMainContent: true
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to scrape documentation');
      }

      const result = await response.json();
      
      if (result.pages && result.pages.length > 0) {
        const formattedDomain = `docs.${domain}.ai`;
        
        // Save the documentation
        await fetch(`${SERVER_API_URL}/docs/save`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            domain: formattedDomain,
            content: result.content,
            url,
            type: 'documentation'
          })
        });

        navigate(`/docs/${domain}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setProgress({ currentPage: 0, totalPages: 0, status: 'Error processing documentation' });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 min-h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex-1">
        <div className="space-y-4 text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-gray-900">Doc</span>
            <span className="text-primary">Ingest</span>
          </h1>
          <p className="text-gray-600">
            Enter a documentation URL to scrape and save for offline access
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="https://docs.example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isProcessing}
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              disabled={isProcessing || !url.trim()}
              className="w-full"
            >
              {isProcessing ? 'Processing...' : 'Submit'}
            </Button>
          </form>

          {progress && (
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>{progress.status}</span>
                {progress.isArchived && progress.lastScraped && (
                  <span className="text-primary">
                    Archived {new Date(progress.lastScraped).toLocaleDateString()}
                  </span>
                )}
              </div>
              <Progress value={(progress.currentPage / progress.totalPages) * 100} />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default HomePage; 