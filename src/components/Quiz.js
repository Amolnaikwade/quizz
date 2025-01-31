import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const [questions, setQuestions] = useState([]); // Initialize as an empty array
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    // Fetch data from the API using CORS proxy
    fetch("https://api.jsonserve.com/Uw5CrX")
      .then((res) => res.json())
      .then((data) => {
        if (data.questions) {
          setQuestions(data.questions);
        } else {
          setError("Invalid API response: Missing 'questions' array");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load quiz data. Please try again.");
        setLoading(false);
      });
  }, []);

  // Show loading or error messages
  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p>{error}</p>;
  if (!questions || questions.length === 0) return <p>No questions available.</p>;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
