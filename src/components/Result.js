import React from "react";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Result;
