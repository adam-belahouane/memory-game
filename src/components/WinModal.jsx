import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import formatTime from "../tools/formatTime";
import { resetMoves, resetTime, setIsPaused } from "../Redux/actions";

const WinModal = ({ multiState, numOfplayers, handleRestart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { time, moves } = useSelector((state) => state);
  const [sortedArray, setSortedArray] = useState([]);
  const [highest, setHighest] = useState([]);

  const keyMap = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
  };

  const newGame = () => {
    handleRestart();
    dispatch(resetTime());
    dispatch(resetMoves());
    navigate("/");
  };

  useEffect(() => {
    dispatch(setIsPaused(true));
    const entries = Object.entries(multiState);
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    setSortedArray(
      sorted.slice(0, numOfplayers).map(([key, value]) => [keyMap[key], value])
    );
    const highestValue = sorted[0][1];
    const highestKeys = sorted
      .filter((item) => item[1] === highestValue)
      .map((item) => keyMap[item[0]]);
    setHighest(highestKeys);
  }, [multiState, numOfplayers]);

  return (
    <div className="modal">
      <div className="modal-content">
        {numOfplayers === 1 ? (
          <>
            <h1 className="win-modal-title">You did it!</h1>
            <div className="win-modal-subtitle">
              Game over! Here's how you got on...
            </div>
            <div className="win-modal-div">
              <h3>Time Elapsed</h3>
              <div>{formatTime(time)}</div>
            </div>
            <div className="win-modal-div">
              <h3>Moves Taken</h3>
              <div>{moves} Moves</div>
            </div>
          </>
        ) : (
          <>
            {highest.length < 2 ? (
              <h1 className="win-modal-title">Player {highest} Wins!</h1>
            ) : (
              <h1 className="win-modal-title">It's a tie!</h1>
            )}
            <div className="win-modal-subtitle">
              Game over! Here are the results...
            </div>
            <div className="outer-player-div">
              {sortedArray.map(([key, value]) => (
                <div
                  className={
                    highest.includes(key) ? "player-div winner" : "player-div"
                  }
                  key={key}
                >
                  <div className="player">
                    Player {key}{" "}
                    {highest.includes(key) ? (
                      <div>
                        {" "}
                        {"("}Winner!{")"}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>{" "}
                  <div className="num-of-pairs">{value + " "} Pairs</div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="modal-btn-div">
          <button onClick={() => handleRestart()} className=" btn-1 orange-theme">
            Restart
          </button>
          <button onClick={() => newGame()} className=" btn-1 dark-theme">
            Setup New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
