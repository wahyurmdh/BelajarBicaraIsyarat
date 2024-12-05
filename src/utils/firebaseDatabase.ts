// src/utils/firebaseDatabase.ts
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config'; // Pastikan import db dari firebase-config.ts

// Menambahkan data quiz
export const addQuiz = async (quizId: string, quizData: any) => {
  try {
    // Menyimpan quiz baru ke Firestore
    await setDoc(doc(db, 'quizzes', quizId), quizData);
    console.log('Quiz added successfully!');
  } catch (error) {
    console.error('Error adding quiz: ', error);
  }
};

// Menambahkan progres pengguna untuk quiz tertentu
export const saveUserProgress = async (userId: string, quizId: string, score: number) => {
  try {
    const progressData = {
      score,
      completedAt: new Date().toISOString(), // Tanggal dan waktu penyelesaian quiz
    };

    // Menyimpan progres pengguna pada Firestore
    await setDoc(doc(db, 'userProgress', userId, quizId), progressData);
    console.log('Progress saved successfully!');
  } catch (error) {
    console.error('Error saving progress: ', error);
  }
};

// Mengambil data quiz berdasarkan quizId
export const getQuizData = async (quizId: string) => {
  const docRef = doc(db, 'quizzes', quizId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.error('No such quiz document!');
    return null;
  }
};

// Mengambil progres pengguna berdasarkan userId dan quizId
export const getUserProgress = async (userId: string, quizId: string) => {
  const docRef = doc(db, 'userProgress', userId, quizId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.error('No such progress document!');
    return null;
  }
};
