import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import DocPage from './pages/DocPage';

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
        <div className="bg-background min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/view" element={<ViewPage />} />
                <Route path="/docs/:domain" element={<DocPage />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
