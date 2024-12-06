// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;  // Menambahkan tipe untuk children
  onClick: () => Promise<void>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}  {/* Menampilkan children */}
    </button>
  );
};

export default Button;
