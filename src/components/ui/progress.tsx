import React from 'react';

interface ProgressProps {
  value?: number;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value = 0, className = '' }) => {
  return (
    <div className={`w-full h-2 bg-gray-200 rounded overflow-hidden ${className}`}>
      <div
        className="h-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}; 