import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-[3px] border-gray-900 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-center items-center text-gray-900 text-sm">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              UI Inspired by Gitingest
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 