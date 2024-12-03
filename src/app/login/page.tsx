// src/app/login/page.tsx
"use client"; // Tambahkan ini di bagian atas untuk memastikan komponen ini hanya dijalankan di sisi klien

import React, { useState } from 'react';
import { auth } from '../../firebase-config'; // Import Firebase hanya di sisi klien
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect ke halaman lain setelah login sukses, misalnya ke dashboard atau home
    } catch (err: any) {
      setError('Login failed: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
