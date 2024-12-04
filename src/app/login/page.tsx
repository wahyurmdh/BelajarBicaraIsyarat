"use client"; // Menandakan bahwa ini adalah client-side component

import React, { useState } from 'react';
import { auth } from '../../firebase-config'; // Import Firebase hanya di sisi klien
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Import useRouter untuk navigasi

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Inisialisasi router

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Setelah login sukses, navigasi ke halaman utama atau halaman yang diinginkan
      router.push('/');  // Redirect ke halaman utama (home) setelah login
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
