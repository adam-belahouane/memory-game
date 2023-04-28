import "./App.css";
import Solo4x4 from "./views/Game";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { useReducer } from "react";
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      isNumbers: true,
      numberOfPlayers: 1,
      is4x4: true,
    }
  );
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
        <Route path="/game" element={<Solo4x4 numOfCards={state.is4x4} isNumbers={state.isNumbers} numOfPlayers={state.numberOfPlayers}  />} />
      </Routes>
    </div>
  );
}

export default App;
