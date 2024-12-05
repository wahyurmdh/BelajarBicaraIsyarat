// src/app/settings/page.tsx
import ProtectedRoute from '../../utils/ProtectedRoute';

export default function Settings() {
  return (
    <ProtectedRoute>
      <h1>Pengaturan Akun</h1>
      <p>Ubah preferensi pengaturan akun Anda.</p>
    </ProtectedRoute>
  );
}
