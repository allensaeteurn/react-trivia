import React, { useState } from "react";
import { quiz } from "../assets/Questions";
import GradeQuiz from "./GradeQuiz";
import Button from "./Button";

const Game: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const handleOptionClick = (questionIndex: number, option: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
  };

  return (
    <div className="text-left">
      {quiz.map((item, index) => (
        <div key={index} className="m-4 quiz-question">
          <h2 className="font-bold">{item.question}</h2>
          <ul>
            <li
              className={`cursor-pointer ${
                selectedAnswers[index] === "a" ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => handleOptionClick(index, "a")}
            >
              A: {item.a}
            </li>
            <li
              className={`cursor-pointer ${
                selectedAnswers[index] === "b" ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => handleOptionClick(index, "b")}
            >
              B: {item.b}
            </li>
            <li
              className={`cursor-pointer ${
                selectedAnswers[index] === "c" ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => handleOptionClick(index, "c")}
            >
              C: {item.c}
            </li>
            <li
              className={`cursor-pointer ${
                selectedAnswers[index] === "d" ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => handleOptionClick(index, "d")}
            >
              D: {item.d}
            </li>
          </ul>
        </div>
      ))}
      <div className="text-center">
        {isQuizSubmitted ? (
          <GradeQuiz selectedAnswers={selectedAnswers} quiz={quiz} />
        ) : (
          <Button onClick={handleSubmitQuiz} text="Submit" />
        )}
      </div>
    </div>
  );
};

export default Game;
