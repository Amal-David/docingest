import React, { useState, useEffect } from 'react';
import { getPerformanceSummary } from '../utils/web-vitals';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

const getRating = (metric: string, value: number): { rating: string; color: string } => {
  const thresholds: Record<string, { good: number; needsImprovement: number }> = {
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    fcp: { good: 1800, needsImprovement: 3000 },
    ttfb: { good: 800, needsImprovement: 1800 },
    inp: { good: 200, needsImprovement: 500 },
  };

  const threshold = thresholds[metric.toLowerCase()];
  if (!threshold) return { rating: 'unknown', color: 'gray' };

  if (value <= threshold.good) {
    return { rating: 'good', color: 'green' };
  } else if (value <= threshold.needsImprovement) {
    return { rating: 'needs-improvement', color: 'yellow' };
  } else {
    return { rating: 'poor', color: 'red' };
  }
};

const formatValue = (metric: string, value?: number): string => {
  if (value === undefined) return 'N/A';
  if (metric === 'CLS' || metric === 'cls') {
    return value.toFixed(3);
  }
  return `${Math.round(value)}ms`;
};

export function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isLoading, setIsLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    if (showDashboard) {
      getPerformanceSummary().then((summary) => {
        setMetrics(summary);
        setIsLoading(false);
      });
    }
  }, [showDashboard]);

  // Only show in development or if explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !showDashboard) {
    return null;
  }

  const metricLabels: Record<string, string> = {
    lcp: 'LCP - Largest Contentful Paint',
    fid: 'FID - First Input Delay',
    cls: 'CLS - Cumulative Layout Shift',
    fcp: 'FCP - First Contentful Paint',
    ttfb: 'TTFB - Time to First Byte',
    inp: 'INP - Interaction to Next Paint',
  };

  const metricDescriptions: Record<string, string> = {
    lcp: 'Time for largest content element to render',
    fid: 'Delay from first user interaction to browser response',
    cls: 'Visual stability measure (layout shifts)',
    fcp: 'Time until first content appears',
    ttfb: 'Time until server sends first byte',
    inp: 'Overall responsiveness to user interactions',
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showDashboard ? (
        <button
          onClick={() => setShowDashboard(true)}
          className="p-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          title="Show Performance Metrics"
          aria-label="Show Performance Metrics"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-white border-[3px] border-gray-900 rounded-xl shadow-2xl p-6 w-96 max-h-[600px] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Performance Metrics</h3>
            <button
              onClick={() => {
                setShowDashboard(false);
                setIsLoading(true);
              }}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close Performance Dashboard"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {isLoading ? (
            <div className="text-center py-8">
              <div className="inline-block w-8 h-8 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Collecting metrics...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(metricLabels).map(([key, label]) => {
                const value = metrics[key as keyof PerformanceMetrics];
                const { rating, color } = getRating(key, value || 0);
                const colorClasses: Record<string, string> = {
                  green: 'bg-green-100 text-green-800 border-green-300',
                  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
                  red: 'bg-red-100 text-red-800 border-red-300',
                  gray: 'bg-gray-100 text-gray-800 border-gray-300',
                };

                return (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border-2 ${value ? colorClasses[color] : 'bg-gray-50 border-gray-200'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{label}</h4>
                      <span className={`text-xs px-2 py-1 rounded font-medium ${
                        rating === 'good' ? 'bg-green-200 text-green-900' :
                        rating === 'needs-improvement' ? 'bg-yellow-200 text-yellow-900' :
                        rating === 'poor' ? 'bg-red-200 text-red-900' :
                        'bg-gray-200 text-gray-900'
                      }`}>
                        {rating.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-2xl font-bold mb-1">{formatValue(key, value)}</p>
                    <p className="text-xs text-gray-600">{metricDescriptions[key]}</p>
                  </div>
                );
              })}

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Metrics are sent to Google Analytics and backend API
                </p>
                <button
                  onClick={() => {
                    setIsLoading(true);
                    getPerformanceSummary().then((summary) => {
                      setMetrics(summary);
                      setIsLoading(false);
                    });
                  }}
                  className="mt-2 w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm"
                >
                  Refresh Metrics
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

