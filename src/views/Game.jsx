import { useEffect, useReducer, useState } from "react";
import MemoryCard from "../components/MemoryCard";
import Timer from "../components/timer";
import Moves from "../components/Moves";
import Menumodal from "../components/MenuModal";
import { useNavigate } from "react-router-dom";
import MultiUserBox from "../components/MultiUserBox";
import WinModal from "../components/WinModal";
import { useDispatch } from "react-redux";
import { setIsPaused } from "../Redux/actions";

const Game = ({ numOfCards, isNumbers, numOfPlayers }) => {
  const [grid, setGrid] = useState(generateArray(numOfCards));
  const [arrayOfCorrect, setArrayOfCorrect] = useState([]);
  const [isSame, setIsSame] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [hasRestarted, setHasRestarted] = useState(false);
  const navigate = useNavigate();
  const [userPlaying, setUserPlaying] = useState(0);
  const dispatch = useDispatch();

  const [multiUsers, dispatchMulti] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
    }
  );

  function generateArray(numOfCards) {
    let x = 18;
    if (numOfCards) x = 8;
    let arr = [...Array(x)].map((_, i) => i + 1);
    let arr2 = [...Array(x)].map((_, i) => i + 1);
    arr.push(...arr2);
    return arr.sort(() => Math.random() - 0.5);
  }

  function handleRestart() {
    setHasRestarted(true);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (hasRestarted) {
      setGrid(generateArray(numOfCards));
      setArrayOfCorrect([]);
      setIsSame(0);
      dispatch(setIsPaused(true))
      setIsOpen(false);
      setHasRestarted(false);
      dispatchMulti({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
      });
    }
  }, [hasRestarted]);

  useEffect(() => {
    if (isSame !== 0)  dispatch(setIsPaused(false));
    if (isSame === 0) {
      if (userPlaying === numOfPlayers) {
        setUserPlaying(1);
      } else {
        setUserPlaying(userPlaying + 1);
      }
    }
  }, [isSame]);


  const numToString = (playerNum) => {
    if (playerNum === 1) {
      return dispatchMulti({ first: multiUsers.first + 1 });
    } else if (playerNum === 2) {
      return dispatchMulti({ second: multiUsers.second + 1 });
    } else if (playerNum === 3) {
      return dispatchMulti({ third: multiUsers.third + 1 });
    } else if (playerNum === 4) {
      return dispatchMulti({ fourth: multiUsers.fourth + 1 });
    }
  };



  useEffect(() => {}, [numOfCards, numOfPlayers, isNumbers]);

  useEffect(() => {
    if (arrayOfCorrect.length !== 0) {
      numToString(userPlaying);
    }
  }, [arrayOfCorrect]);

  return (
    <div className="game-div">
      <div className="header-div">
        <h1 className="main-title">memory</h1>
        {isSmallScreen ? (
          <Menumodal isOpen={isOpen} setIsOpen={setIsOpen}>
            <button onClick={handleRestart} className="btn-1 orange-theme">
              Restart
            </button>
            <button onClick={() => navigate("/")} className=" btn-1 dark-theme">
              New Game
            </button>
          </Menumodal>
        ) : (
          //   <button className=" btn-1 orange-theme">Menu</button>
          <div className="btn-div">
            <button onClick={handleRestart} className="btn-1 orange-theme">
              Restart
            </button>
            <button onClick={() => navigate("/")} className="btn-1 dark-theme">
              New Game
            </button>
          </div>
        )}
      </div>
      <div className={numOfCards ? "grid" : "big-grid"}>
        {grid.map((num, i) => (
          <MemoryCard
            key={i}
            num={num}
            isSame={isSame}
            setIsSame={setIsSame}
            arrOfC={arrayOfCorrect}
            setArrayOfCorrect={setArrayOfCorrect}
            isSmall={numOfCards}
            isNumbers={isNumbers}
          />
        ))}
      </div>
      <div className="timer-moves-div">
        {numOfPlayers === 1 ? (
          <>
            <Timer hasRestarted={hasRestarted} />
            <Moves isSame={isSame} hasRestarted={hasRestarted} />
          </>
        ) : (
          <>
            {Array.from({ length: numOfPlayers }, (_, index) => (
              <MultiUserBox
                key={index}
                playerNum={index + 1}
                multiUsers={multiUsers}
                dispatchMulti={dispatchMulti}
                userPlaying={userPlaying}
              />
            ))}
          </>
        )}
      </div>
      {arrayOfCorrect.length === 18 ||
      (arrayOfCorrect.length === 8 && numOfCards) ? (
        numOfPlayers === 1 ? (
          <WinModal
            multiState={multiUsers}
            numOfplayers={numOfPlayers}
            handleRestart={handleRestart}
          />
        ) : (
          <WinModal
            multiState={multiUsers}
            numOfplayers={numOfPlayers}
            handleRestart={handleRestart}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;
