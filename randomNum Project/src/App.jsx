import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  function generateNum() {
    const num = Math.random();
    const constrainedNum = Math.floor(num * 80) + 1;
    if (constrainedNum >= 50 && constrainedNum <= 80) {
      setNumber(constrainedNum);
      return;
    }
    generateNum();
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={generateNum}>Generate</button>
    </>
  );
}

export default App;
