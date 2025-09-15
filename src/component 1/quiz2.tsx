import Prev from './prev';
import Next from './next';
import { useState } from 'react';

function Quiz2() {
  const list_questions = [
    { question: "what is the capital of france?", options: ["paris", "london", "berlin", "madrid"], answer: "paris" },
    { question: "what is the capital of germany?", options: ["paris", "london", "berlin", "madrid"], answer: "berlin" },
    { question: "what is the capital of spain?", options: ["paris", "london", "berlin", "madrid"], answer: "madrid" },
    { question: "what is the capital of italy?", options: ["paris", "london", "rome", "madrid"], answer: "rome" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);

  function handleclicknext() {
    setSelectedOption(null);
    setResult(null);
    if (currentQuestion + 1 >= list_questions.length) {
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleclickprev() {
    setSelectedOption(null);
    setResult(null);
    if (currentQuestion - 1 < 0) {
      setCurrentQuestion(list_questions.length - 1);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  }


  function handleClickVerify() {
    if (selectedOption === null) {
      setResult("Please select an option first.");
    } else if (selectedOption === list_questions[currentQuestion].answer) {
      setResult("✅ Correct!");
    } else {
      setResult("❌ Incorrect.");
    }
  }

  return (
    <div className="quiz-container">
      <h1 className="text-center">Quiz2</h1>
      <div>
        <h3 className="question">{list_questions[currentQuestion].question}</h3>
        {list_questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="option"
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
        <div className="answer">Correct Answer: {list_questions[currentQuestion].answer}</div>
        <button className="verify" onClick={handleClickVerify}>Verify</button>
        <div className="result">{result}</div>
      </div>
      <div className="button-container">
        <Prev onClick={handleclickprev} />
        <Next onClick={handleclicknext} />
      </div>
    </div>
  );
}

export default Quiz2;