import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetMoves, resetTime, setIsPaused } from "../Redux/actions";

const Home = ({ state, dispatch }) => {
  const navigate = useNavigate()
  const dispatchRedux = useDispatch()

  useEffect(() => {
    dispatchRedux(resetMoves())
    dispatchRedux(resetTime())
    dispatchRedux(setIsPaused(true))
  },[])
  return (
    <div className="home">
      <h1>memory</h1>

      <div className="start-game-div">
        <h3>Select Theme</h3>
        <div className="theme">
          <button style={{"margin":"0"}} className={state.isNumbers?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({isNumbers: true})}>Numbers</button>
          <button className={!state.isNumbers?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({isNumbers: false})}>Icons </button>
        </div>
        <h3>Number of Players</h3>
        <div className="num-of-players-div">
          <button style={{"margin":"0"}} className={state.numberOfPlayers === 1?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({numberOfPlayers: 1})}>1</button>
          <button className={state.numberOfPlayers === 2?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({numberOfPlayers: 2})}>2</button>
          <button className={state.numberOfPlayers === 3?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({numberOfPlayers: 3})}>3</button>
          <button className={state.numberOfPlayers === 4?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({numberOfPlayers: 4})}>4</button>
        </div>
        <h3>Grid Size</h3>
        <div className="grid-selection">
          <button style={{"margin":"0"}} className={state.is4x4?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({is4x4: true})}>4x4</button>
          <button className={!state.is4x4?"btn-1 selected-btn":"btn-1 home-theme"} onClick={() => dispatch({is4x4: false})}>6x6</button>
        </div>
        <div className="flex">
        <button className="start-btn" onClick={() => navigate('/game')}>Start Game</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
