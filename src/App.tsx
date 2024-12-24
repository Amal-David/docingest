import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import DocPage from './pages/DocPage';

const App: React.FC = () => {
  return (
    <Router>
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
  );
};

export default App;
