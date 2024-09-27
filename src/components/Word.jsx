import { useState } from "react";

function Word(props) {
  const [text, setText] = useState("banana");
  const [color, setColor] = useState("yellow");

  function handleClick() {
    // when a component's state is altered, it is re-rendered asynchronously by react
    setColor("#000");
  }

  console.log(props);
  return (
    <div
      className="word"
      style={{ textShadow: `0 0 .25rem ${color}` }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}

export default Word;
