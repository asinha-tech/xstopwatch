import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes} : ${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const startStop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
      setIsRunning(false);
      setElapsedTime(0);
  };
  
  return (
  <div className="App">
  <h1>Stopwatch</h1>
  <p>Time: {formatTime(elapsedTime)}</p>
  <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
  <button onClick={reset}>Reset</button>
  </div>
  );
}
