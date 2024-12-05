// src/utils/ProtectedRoute.tsx
'use client';

import { useAuth } from '../app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect ke login jika belum login
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>; // Tampilkan loading sementara
  }

  return <>{children}</>;
};

export default ProtectedRoute;
