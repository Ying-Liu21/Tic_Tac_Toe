import {
  SET_IS_VALID_EMAIL,
  SET_TOKEN_LOADING,
  SET_IS_VALID_USER,
  SET_EMAIL,
  GET_TOKEN_ERROR
} from "../actions/user_actions";

const user_reducer = (state, action) => {
  switch (action.type) {
    case SET_IS_VALID_EMAIL:
      const re = /(.+)@(.+){2,}\.(.+){2,}/;
      const result = re.test(action.payload);
      return { ...state, isVaildEmail: result };
    case SET_TOKEN_LOADING:
      return { ...state, tokenLoading: action.payload };
    case SET_IS_VALID_USER:
      return {
        ...state,
        isVaildUser: action.payload
      };
    case GET_TOKEN_ERROR:
      return { ...state, tokenError: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export { user_reducer };
