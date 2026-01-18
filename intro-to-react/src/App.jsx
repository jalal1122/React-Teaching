import React from "react";
import "./App.css";
import ButtonComp from "./components/ButtonComp";

const App = () => {
  const [number, setNumber] = React.useState(0);

  const generateNumber = () => {
    const randomNum = Math.random();
    const increasedRangeNum = randomNum * 100;
    const finalNNum = Math.floor(increasedRangeNum);
    setNumber(finalNNum);
  };

  return (
    <header>
      <nav>
        <div>AttendX</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button onClick={generateNumber}>Generate</button>
        <ButtonComp number={number} />
      </nav>
    </header>
  );
};

export default App;
