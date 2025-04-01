import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import { HashRouter as Router } from 'react-router-dom';

const questions = [
  "친구들과 단체 여행을 떠났을 때 너는 어떤 역할이야?",
  "팀 프로젝트에서 너의 역할은?",
  "스트레스를 받을 때 너는 어떻게 푸는 편이야?",
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleChangeQuestion = () => {
    const newIndex = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(newIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <QuestionDisplay
        question={questions[currentQuestionIndex]}
        onChangeQuestion={handleChangeQuestion}
      />
      <UserInput onSubmit={(input) => console.log("사용자 입력:", input)} />
    </div>
  );
}

export default App;
