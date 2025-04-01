import React, { useState } from "react";

function UserInput({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 w-full flex justify-center items-center p-4 border-t bg-white">
      <div className="w-full max-w-xl flex items-center">
        <span className="mr-2">🧑 Name</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="답변을 입력하세요."
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-black text-white rounded">
          🚀
        </button>
      </div>
    </form>
  );
}

export default UserInput;
