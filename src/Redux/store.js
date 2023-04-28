import { configureStore } from "@reduxjs/toolkit";
import { singlePlayerReducer } from "./reducers";

export const initialState = {
  time: 0,
  moves: 0,
  isPaused: true,
};

const store = configureStore({ reducer: singlePlayerReducer });

export default store;
