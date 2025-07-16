import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;