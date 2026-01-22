import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 bg-background border-b-[3px] border-gray-900 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold tracking-tight">
              <a href="/" className="hover:opacity-80 transition-opacity">
                <span className="text-gray-900">Doc</span>
                <span className="text-primary">Ingest</span>
              </a>
            </h1>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              to="/add"
              className="text-gray-900 hover:-translate-y-0.5 transition-transform"
            >
              Add Docs
            </Link>
            <Link
              to="/view"
              className="text-gray-900 hover:-translate-y-0.5 transition-transform"
            >
              View Docs
            </Link>
            <Link
              to="/mcp-guide"
              className="text-gray-900 hover:-translate-y-0.5 transition-transform"
            >
              MCP Guide
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 