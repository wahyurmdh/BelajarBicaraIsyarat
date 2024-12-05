// src/app/dashboard/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import ProtectedRoute from '../../utils/ProtectedRoute';
import Placeholder from '../../components/Placeholder';  // Impor komponen Placeholder

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi pemuatan data untuk dashboard
    setTimeout(() => {
      setLoading(false);  // Setelah 3 detik, data dianggap sudah dimuat
    }, 3000); // Menunggu 3 detik untuk simulasi pemuatan data
  }, []);

  if (loading) {
    return <Placeholder />; // Tampilkan Placeholder jika data sedang dimuat
  }

  return (
    <ProtectedRoute>
      <h1>Dashboard</h1>
      {/* Konten dashboard bisa ditambahkan di sini */}
    </ProtectedRoute>
  );
};

export default DashboardPage;
