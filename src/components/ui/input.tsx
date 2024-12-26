import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full p-4 border-[3px] border-gray-900 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#F06B7A] ${className}`}
      {...props}
    />
  );
}; 