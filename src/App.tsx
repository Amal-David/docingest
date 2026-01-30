import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const DocPage = lazy(() => import('./pages/DocPage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));
const AddPage = lazy(() => import('./pages/AddPage'));
const MCPGuidePage = lazy(() => import('./pages/MCPGuidePage'));

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
    
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <TrackPageView />
        <Suspense fallback={
          <div className="min-h-screen bg-background flex justify-center items-center">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-l-primary rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={
              <div className="bg-background min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 w-full">
                  <div className="max-w-4xl mx-auto px-4 py-8">
                    <HomePage />
                  </div>
                </main>
                <Footer />
              </div>
            } />
            <Route path="/view" element={
              <div className="bg-background min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 w-full">
                  <div className="max-w-4xl mx-auto px-4 py-8">
                    <ViewPage />
                  </div>
                </main>
                <Footer />
              </div>
            } />
            <Route path="/add" element={
              <div className="bg-background min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 w-full">
                  <div className="max-w-4xl mx-auto px-4 py-8">
                    <AddPage />
                  </div>
                </main>
                <Footer />
              </div>
            } />
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
            <Route path="/mcp-guide" element={
              <div className="bg-background min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 w-full">
                  <div className="max-w-4xl mx-auto px-4 py-8">
                    <MCPGuidePage />
                  </div>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;
