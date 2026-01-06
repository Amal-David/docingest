import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { initWebVitals } from './utils/web-vitals';
import { PerformanceDashboard } from './components/performance-dashboard';

// Lazy load pages for code splitting
const NewHomePage = lazy(() => import('./pages/NewHomePage'));
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
        <Suspense fallback={
          <div className="min-h-screen bg-[#0a0a0b] flex justify-center items-center">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-2 border-zinc-800 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<NewHomePage />} />
            <Route path="/docs/:domain" element={
              <div className="bg-background min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 w-full">
                  <div className="max-w-4xl mx-auto px-4 py-8">
                    <DocPage />
                  </div>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </Suspense>
        <PerformanceDashboard />
      </Router>
    </HelmetProvider>
  );
};

export default App;
