import React, { createContext, useReducer } from "react";

import { game_reducer } from "../reducers/game_reducer";
import {
  SET_XISNEXT,
  SET_STATUS,
  SET_SHOW_RESULT,
  SET_DISABLE,
  GET_LOADING,
  GET_MOVES_ERROR
} from "../actions/game_actions";

const initialState = {
  xIsNext: true,
  status: null,
  showResult: false,
  disable: true,
  loading: false,
  movesError: false
};

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(game_reducer, initialState);

  const setXisNext = () => {
    dispatch({ type: SET_XISNEXT });
  };

  const setStatus = val => {
    dispatch({ type: SET_STATUS, payload: val });
  };

  const setShowResult = val => {
    dispatch({ type: SET_SHOW_RESULT, payload: val });
  };

  const setDisable = val => {
    dispatch({ type: SET_DISABLE, payload: val });
  };

  const getLoading = val => {
    dispatch({ type: GET_LOADING, payload: val });
  };

  const getMovesError = val => {
    dispatch({ type: GET_MOVES_ERROR, payload: val });
  };
  return (
    <GameContext.Provider
      value={{
        ...state,
        setXisNext,
        setStatus,
        setShowResult,
        setDisable,
        getLoading,
        getMovesError
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
