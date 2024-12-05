// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;  // Untuk menambahkan class CSS tambahan jika diperlukan
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick} 
      className={`btn ${className}`} 
      style={{ padding: '10px 20px', fontSize: '16px' }} 
    >
      {text}
    </button>
  );
};

export default Button;
