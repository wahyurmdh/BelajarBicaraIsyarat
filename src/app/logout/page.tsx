// src/app/logout/page.tsx

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // Redirect to home after logout
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
