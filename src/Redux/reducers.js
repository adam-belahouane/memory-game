import { initialState } from "./store";
import {
  RESET_TIME,
  RESET_MOVES,
  INCREMENT_MOVES,
  INCREMENT_TIME,
  SET_IS_PAUSED,
} from "./actions";

export function singlePlayerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_TIME:
      return {
        ...state,
        time: state.time + 1,
      };
    case RESET_TIME:
      return {
        ...state,
        time: 0,
      };
    case INCREMENT_MOVES:
      return {
        ...state,
        moves: state.moves + 1,
      };
    case RESET_MOVES:
      return {
        ...state,
        moves: 0,
      };
    case SET_IS_PAUSED:
      return {
        ...state,
        isPaused: action.payload,
      };
    default:
      return state;
  }
}
