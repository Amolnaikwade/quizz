import React, { useState } from "react";
import Quiz from "./components/Quiz";
import "./styles.css";

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="app">
      {!start ? (
        <button className="start-button" onClick={() => setStart(true)}>
          Start Quiz
        </button>
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default App;
