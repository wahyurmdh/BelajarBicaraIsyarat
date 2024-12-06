// src/app/quiz/[quizId].tsx
'use client'; // Menandakan bahwa file ini menggunakan React Client-side

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Gunakan useRouter dari Next.js
import { getQuizData } from '../../../utils/firebaseDatabase';

const QuizPage = () => {
  const router = useRouter(); // Menggunakan useRouter dari Next.js
  const { quizId } = router.query; // Mengambil quizId dari query parameter

  const [quizData, setQuizData] = useState<any>(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      if (quizId) {
        const data = await getQuizData(quizId as string); // Pastikan quizId adalah string
        setQuizData(data);
      }
    };

    if (quizId) { // Pastikan quizId tersedia sebelum mem-fetch data
      fetchQuizData();
    }
  }, [quizId]);

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{quizData.title}</h1>
      {quizData.questions.map((question: any, index: number) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.options.map((option: string, idx: number) => (
            <div key={idx}>
              <input type="radio" id={`option${idx}`} name={`question${index}`} />
              <label htmlFor={`option${idx}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizPage;
