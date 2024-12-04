  // app/layout.tsx
'use client';  // Menandakan bahwa file ini menggunakan fitur client-side React

import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Belajar Bahasa Isyarat</title>
      </head>
      <body>
        {/* Membungkus seluruh aplikasi dengan AuthProvider */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
