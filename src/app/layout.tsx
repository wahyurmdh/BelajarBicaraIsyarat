// app/layout.tsx
'use client';  // Menandakan bahwa file ini menggunakan fitur client-side React

import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Header from '../components/Header';  // Impor Header
import Footer from '../components/Footer';  // Impor Footer
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
          {/* Tambahkan Header di bagian atas */}
          <Header />
          
          {/* Konten halaman yang spesifik */}
          <main>
            {children}
          </main>

          {/* Tambahkan Footer di bagian bawah */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
