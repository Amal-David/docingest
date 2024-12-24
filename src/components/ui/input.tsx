import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full p-4 border-[3px] border-gray-900 rounded relative z-10 bg-background ${className}`}
      {...props}
    />
  );
};

export { Input }; 