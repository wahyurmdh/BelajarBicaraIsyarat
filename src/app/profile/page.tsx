// src/app/profile/page.tsx
import ProtectedRoute from '../../utils/ProtectedRoute';

export default function Profile() {
  return (
    <ProtectedRoute>
      <h1>Profil Pengguna</h1>
      <p>Informasi akun Anda...</p>
    </ProtectedRoute>
  );
}
