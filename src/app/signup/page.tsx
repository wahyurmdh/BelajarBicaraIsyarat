// src/app/signup/page.tsx
"use client"; // Tambahkan ini di bagian atas

import React, { useState } from 'react';
import { auth } from '../../firebase-config'; // Import Firebase hanya di sisi klien
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect ke halaman login atau dashboard setelah signup sukses
    } catch (err: any) {
      setError('Signup failed: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
