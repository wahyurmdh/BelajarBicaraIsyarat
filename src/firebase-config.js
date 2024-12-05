import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase yang Anda dapatkan dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCmLPeVYHmviGTUPqzk9Q9dqrZal4gq_FU",
  authDomain: "belajarbicaraisyarat.firebaseapp.com",
  projectId: "belajarbicaraisyarat",
  storageBucket: "belajarbicaraisyarat.firebasestorage.app",
  messagingSenderId: "584404571776",
  appId: "1:584404571776:web:f881ea7274e61d7c713865"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Jika menggunakan Firestore

export { auth, db };
