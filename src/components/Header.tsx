// src/components/Header.tsx

import React from 'react';
import { useAuth } from '../app/context/AuthContext';
import { useRouter } from 'next/navigation'; // Untuk navigasi halaman

const Header: React.FC = () => {
  const { user } = useAuth(); // Mengakses status user
  const router = useRouter(); // Untuk navigasi

  const handleLogout = () => {
    router.push('/logout'); // Arahkan ke halaman logout
  };

  return (
    <header style={{ padding: '10px 0', background: '#282c34', color: 'white' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Belajar Bicara Isyarat</h1>
        <nav>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => router.push('/login')}>Login</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
