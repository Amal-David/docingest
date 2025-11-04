import { getCLS, getFCP, getFID, getLCP, getTTFB, type Metric } from 'web-vitals';
import ReactGA from 'react-ga4';

// INP might not be available in all versions, so we'll try to import it dynamically
let getINP: ((callback: (metric: Metric) => void) => void) | null = null;
try {
  // Dynamic import for INP (if available in newer versions)
  const webVitalsModule = require('web-vitals');
  if (webVitalsModule.getINP) {
    getINP = webVitalsModule.getINP;
  }
} catch (e) {
  // INP not available in this version
}

interface WebVitalsMetric extends Metric {
  page: string;
  url: string;
  userAgent: string;
  rating?: 'good' | 'needs-improvement' | 'poor';
  connection?: {
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
  };
}

// Calculate rating based on thresholds
function calculateRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<string, { good: number; needsImprovement: number }> = {
    LCP: { good: 2500, needsImprovement: 4000 },
    FID: { good: 100, needsImprovement: 300 },
    CLS: { good: 0.1, needsImprovement: 0.25 },
    FCP: { good: 1800, needsImprovement: 3000 },
    TTFB: { good: 800, needsImprovement: 1800 },
    INP: { good: 200, needsImprovement: 500 },
  };

  const threshold = thresholds[name];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

// Send metrics to Google Analytics
function sendToGA(metric: WebVitalsMetric) {
  const { name, delta, value, id } = metric;
  const rating = metric.rating || calculateRating(name, value);
  
  // Send to GA4 using gtag with custom parameters
  ReactGA.gtag('event', name, {
    event_category: 'Web Vitals',
    value: Math.round(name === 'CLS' ? delta * 1000 : delta), // CLS is multiplied by 1000 for better precision
    event_label: id,
    non_interaction: true,
    metric_rating: rating,
    metric_value: value,
    metric_delta: delta,
    page_location: metric.url,
    page_path: metric.page,
  });
  
  // Also send as standard event for compatibility
  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    label: id,
    nonInteraction: true,
  });
}

// Send metrics to backend API
async function sendToBackend(metric: WebVitalsMetric) {
  try {
    await fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: metric.rating,
        page: metric.page,
        url: metric.url,
        userAgent: metric.userAgent,
        connection: metric.connection,
        timestamp: Date.now(),
      }),
      keepalive: true, // Ensure request completes even if page unloads
    });
  } catch (error) {
    // Silently fail - don't block user experience
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to send Web Vitals to backend:', error);
    }
  }
}

// Log to console in development
function logToConsole(metric: WebVitalsMetric) {
  if (process.env.NODE_ENV === 'development') {
    const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
    console.log(
      `${emoji} ${metric.name}: ${Math.round(metric.value)}${metric.name === 'CLS' ? '' : 'ms'} (${metric.rating})`,
      metric
    );
  }
}

// Get connection info
function getConnectionInfo() {
  if ('connection' in navigator) {
    const conn = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (conn) {
      return {
        effectiveType: conn.effectiveType,
        downlink: conn.downlink,
        rtt: conn.rtt,
      };
    }
  }
  return undefined;
}

// Create enhanced metric with additional context
function createEnhancedMetric(metric: Metric): WebVitalsMetric {
  const rating = (metric as any).rating || calculateRating(metric.name, metric.value);
  return {
    ...metric,
    page: window.location.pathname,
    url: window.location.href,
    userAgent: navigator.userAgent,
    rating,
    connection: getConnectionInfo(),
  };
}

// Initialize Web Vitals tracking
export function initWebVitals() {
  // Largest Contentful Paint (LCP)
  getLCP((metric) => {
    const enhanced = createEnhancedMetric(metric);
    sendToGA(enhanced);
    sendToBackend(enhanced);
    logToConsole(enhanced);
  });

  // First Input Delay (FID) - replaced by INP in modern browsers
  getFID((metric) => {
    const enhanced = createEnhancedMetric(metric);
    sendToGA(enhanced);
    sendToBackend(enhanced);
    logToConsole(enhanced);
  });

  // Cumulative Layout Shift (CLS)
  getCLS((metric) => {
    const enhanced = createEnhancedMetric(metric);
    sendToGA(enhanced);
    sendToBackend(enhanced);
    logToConsole(enhanced);
  });

  // First Contentful Paint (FCP)
  getFCP((metric) => {
    const enhanced = createEnhancedMetric(metric);
    sendToGA(enhanced);
    sendToBackend(enhanced);
    logToConsole(enhanced);
  });

  // Time to First Byte (TTFB)
  getTTFB((metric) => {
    const enhanced = createEnhancedMetric(metric);
    sendToGA(enhanced);
    sendToBackend(enhanced);
    logToConsole(enhanced);
  });

  // Interaction to Next Paint (INP) - modern replacement for FID (if available)
  if (getINP) {
    getINP((metric) => {
      const enhanced = createEnhancedMetric(metric);
      sendToGA(enhanced);
      sendToBackend(enhanced);
      logToConsole(enhanced);
    });
  }
}

// Get performance summary (for debugging/admin panel)
export function getPerformanceSummary(): Promise<{
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}> {
  return new Promise((resolve) => {
    const metrics: any = {};
    let collected = 0;
    const totalMetrics = getINP ? 6 : 5; // Adjust based on INP availability

    const checkComplete = () => {
      collected++;
      if (collected >= totalMetrics) {
        resolve(metrics);
      }
    };

    getLCP((m) => {
      metrics.lcp = m.value;
      checkComplete();
    });
    getFID((m) => {
      metrics.fid = m.value;
      checkComplete();
    });
    getCLS((m) => {
      metrics.cls = m.value;
      checkComplete();
    });
    getFCP((m) => {
      metrics.fcp = m.value;
      checkComplete();
    });
    getTTFB((m) => {
      metrics.ttfb = m.value;
      checkComplete();
    });
    if (getINP) {
      getINP((m) => {
        metrics.inp = m.value;
        checkComplete();
      });
    } else {
      checkComplete(); // Skip INP if not available
    }

    // Timeout after 10 seconds
    setTimeout(() => {
      resolve(metrics);
    }, 10000);
  });
}

