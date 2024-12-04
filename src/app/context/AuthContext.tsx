// src/app/context/AuthContext.tsx

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase-config';  // Pastikan jalur ini sesuai
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';  // Import yang benar untuk v9+

// Menambahkan tipe untuk children
interface AuthContextType {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe; // Unsubscribe when component unmounts
  }, []);

  // Fungsi untuk login
  const login = async (email: string, password: string) => {
    try {
      if (!email || !password) {
        throw new Error('Email atau password tidak valid');
      }
      await signInWithEmailAndPassword(auth, email, password);  // Menggunakan API modular
    } catch (error) {
      console.error("Login error: ", error);
      throw new Error('Login failed');
    }
  };

  // Fungsi untuk logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
