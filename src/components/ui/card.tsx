import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className="relative">
      <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
      <div
        className={`rounded-xl relative z-20 border-[3px] border-gray-900 bg-card ${className}`}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export { Card }; 