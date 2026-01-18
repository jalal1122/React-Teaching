import { useState, useRef } from "react";
import "./App.css";

function App() {
  // let counter = 0;

  // const counterRef = useRef();

  // function changefunc() {
  //   console.log("button clicked");
  //   counter++;
  //   console.log(counter);
  //   counterRef.current.textContent = counter;
  // }

  console.log("component renders....");
  

  const [counter, setCounter] = useState(0);

  function changefunc() {
    setCounter(prev => prev + 1);
  }
  console.log(counter);

  return (
    <>
      {/* <div ref={counterRef} >{counter}</div> */}
      {/* <button onClick={changefunc}>increment</button> */}

      <div>{counter}</div>
      <button onClick={changefunc}>increment</button>
    </>
  );
}

export default App;
