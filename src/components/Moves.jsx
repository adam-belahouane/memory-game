import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMoves, setMoves } from "../Redux/actions";

const Moves = ({ isSame, hasRestarted }) => {
  const { moves, isPaused } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasRestarted) {
      dispatch(resetMoves());
    }
  }, [hasRestarted]);

  useEffect(() => {
    if (!isPaused) {
      if (isSame === 0) dispatch(setMoves());
    }
  }, [isSame]);
  return (
    <div className="bottom-con">
      <h2>Moves</h2>
      <div>{moves}</div>
    </div>
  );
};

export default Moves;
