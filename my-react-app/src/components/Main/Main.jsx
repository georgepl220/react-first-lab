import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <main className="main">
      <p>Текст на головній сторінці. Кількість кліків: {clickCount}</p>
      <button onClick={handleClick}>Клікни мене</button>
    </main>
  );
}

export default Main;