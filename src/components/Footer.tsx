import React from 'react';

interface XLogoProps {
  className?: string;
}

const XLogo: React.FC<XLogoProps> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current text-gray-900 ${className}`} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-[3px] border-gray-900 mt-auto bg-card">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-center items-center gap-6 text-gray-900 text-sm">
          <div className="flex items-center">
            <span>UI Inspired by </span>
            <a 
              href="https://gitingest.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline ml-1"
            >
              Gitingest
            </a>
          </div>
          <div className="h-4 w-px bg-gray-900"></div>
          <div className="flex items-center">
            <span className="flex items-center">
              Created by 
              <XLogo className="ml-1" />
              <span className="ml-1">@DavidAmal</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 