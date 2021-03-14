import {
  SET_STATUS,
  SET_SHOW_RESULT,
  SET_DISABLE,
  GET_LOADING,
  GET_MOVES_ERROR
} from "../actions/game_actions";
const game_reducer = (state, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.payload };
    case SET_SHOW_RESULT:
      return { ...state, showResult: action.payload };
    case SET_DISABLE:
      return { ...state, disable: action.payload };
    case GET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case GET_MOVES_ERROR:
      return { ...state, movesError: action.payload };

    default:
      return state;
  }
};

export { game_reducer };
