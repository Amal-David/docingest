import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className = '', children, ...props }) => {
  return (
    <button
      className={`px-6 py-3 bg-primary text-white border-[3px] border-gray-900 rounded font-medium relative z-10 hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:hover:translate-y-0 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button }; 