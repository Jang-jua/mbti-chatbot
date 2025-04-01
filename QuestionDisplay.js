import React, { useState } from "react";
import { FaSyncAlt, FaPaperPlane } from "react-icons/fa";


const App = () => {
  const [question, setQuestion] = useState("Q. 친구들과 단체 여행을 떠났을 때 너는 어떤 역할이야?");
  const [answer, setAnswer] = useState("");
  const [userName, setUserName] = useState("사용자"); // 나중에 로그인하면 변경

  const changeQuestion = () => {
    const questions = [
      "Q. 너의 가장 좋아하는 취미는 무엇이야?",
      "Q. 최근에 본 영화 중 가장 인상 깊었던 것은?",
      "Q. 지금 당장 떠나고 싶은 여행지는 어디야?"
    ]; 
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "space-between", 
      alignItems: "center", 
      height: "100vh", 
      width: "100vw",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>{question}</div>
        <FaSyncAlt style={{ cursor: "pointer" }} onClick={changeQuestion} />
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span role="img" aria-label="emoji">😊</span>
        <span>{userName}</span>
        <input 
          type="text" 
          placeholder="답변을 입력하세요." 
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }} 
        />
        <FaPaperPlane style={{ cursor: "pointer" }} onClick={() => alert(`답변: ${answer}`)} />
      </div>
    </div>
  );
};

export default App;