import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from './features/stopwatchSlice';
import "./stopwatch.css";

const Stopwatch = () => {
  const time = useSelector((state) => state.stopwatch.time);
  const isRunning = useSelector((state) => state.stopwatch.isRunning);
  const dispatch = useDispatch();


  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => dispatch(startTimer()), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, dispatch]);

  // useEffect(() => {
  //   return () => clearInterval(intervalId);
  // }, []);

  const toggleRunning = () => {
    if (isRunning) {
      dispatch(pauseTimer());
    } else {
      dispatch(startTimer());
    }
  };

  const reset = () => {
    dispatch(resetTimer());
  };

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
  };

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={toggleRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

