import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`bg-white border-[3px] border-gray-900 rounded relative z-10 ${className}`} {...props}>
      {children}
    </div>
  );
}; 