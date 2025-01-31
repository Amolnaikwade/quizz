import React from "react";

const Question = ({ question, handleAnswer }) => {
  if (!question || !question.options) {
    return <p>Loading...</p>;
  }

  return (
    <div className="question-card">
      <h2>{question.description}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.is_correct)}>
            {option.description}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
