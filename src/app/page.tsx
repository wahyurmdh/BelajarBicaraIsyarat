// src/app/page.tsx

'use client';  // Menandakan bahwa file ini adalah client-side component

import { useAuth } from './context/AuthContext';  // Menggunakan hook useAuth

export default function HomePage() {
  const { user, loading, logout } = useAuth();  // Menggunakan useAuth

  // Fungsi untuk menangani logout
  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Header Website Belajar Isyarat */}
      <h1>Belajar Bicara Isyarat</h1>
      <p>Selamat datang di website belajar isyarat. Mari belajar bersama!</p>
      
      {/* Tampilkan status login */}
      <h2>Welcome {user ? user.email : 'Guest'}</h2>
      {user ? (
        <>
          <p>Logged in as {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          {/* Tautan ke halaman Login */}
          <button onClick={() => window.location.href = '/login'} style={{ padding: '10px', margin: '10px' }}>
            Login
          </button>
          <p>Belum punya akun? <a href="/signup">Daftar Sekarang</a></p>
        </>
      )}
    </div>
  );
}
