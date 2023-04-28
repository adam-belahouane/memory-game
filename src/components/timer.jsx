import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTime, setTime } from "../Redux/actions";
import formatTime from "../tools/formatTime";

const Timer = ({ hasRestarted }) => {
  const {time, isPaused }= useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        dispatch(setTime());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (hasRestarted) {
      dispatch(resetTime());
    }
  }, [hasRestarted]);

  

  return (
    <div className="bottom-con">
      <h2>Time</h2>
      <div>{formatTime(time)}</div>
    </div>
  );
};

export default Timer;
