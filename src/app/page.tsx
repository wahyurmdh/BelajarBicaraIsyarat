// src/app/page.tsx (atau halaman utama lainnya)

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Selamat Datang di Aplikasi Bahasa Isyarat</h1>
      <p>Silakan login untuk melanjutkan</p>
      
      {/* Link ke Halaman Login dan Signup */}
      <Link href="/login">
        <button>Login</button>
      </Link>
      <Link href="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
}
