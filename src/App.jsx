import { useState } from "react";
import Word from "./components/Word";
import "./App.css";

function App() {
  const [words, setWords] = useState([
    { id: 1, text: "banana", color: "yellow" },
    { id: 2, text: "apple", color: "#ff1a00" },
    { id: 3, text: "lime", color: "#00ff00" },
  ]);

  function handleDelete(wordId) {
    console.log(`delete word: ${wordId}`);
  }

  return (
    <div>
      <header className="app-header">nugatory</header>
      {words.map((word) => (
        <Word
          key={word.id}
          id={word.id}
          text={word.text}
          color={word.color}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
export default App;
