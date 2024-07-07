import React from "react";

interface GradeQuizProps {
  selectedAnswers: { [key: number]: string };
  quiz: {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    answer: string;
  }[];
}

const GradeQuiz: React.FC<GradeQuizProps> = ({ selectedAnswers, quiz }) => {
  const calculateScore = () => {
    let score = 0;

    quiz.forEach((item, index) => {
      if (selectedAnswers[index] === item.answer) {
        score += 1;
      }
    });

    return score;
  };

  const score = calculateScore();
  const totalQuestions = quiz.length;

  return (
    <div className="grade-quiz">
      <h2>Your Score</h2>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
    </div>
  );
};

export default GradeQuiz;
