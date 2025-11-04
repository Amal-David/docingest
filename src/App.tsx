import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { initWebVitals } from './utils/web-vitals';
import { PerformanceDashboard } from './components/performance-dashboard';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));
const DocPage = lazy(() => import('./pages/DocPage'));

ReactGA.initialize("G-HMP2X2KNVX");

const TrackPageView: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search
    });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Initial GA setup
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    
    // Initialize Web Vitals monitoring
    initWebVitals();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <TrackPageView />
        <div className="bg-background min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                  <div className="relative w-24 h-24">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-l-primary rounded-full animate-spin"></div>
                  </div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/view" element={<ViewPage />} />
                  <Route path="/docs/:domain" element={<DocPage />} />
                </Routes>
              </Suspense>
            </div>
          </main>
          <Footer />
          <PerformanceDashboard />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
