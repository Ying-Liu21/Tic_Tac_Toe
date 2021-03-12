import React, { createContext, useReducer } from "react";
import { user_reducer } from "../reducers/user_reducer";
import {
  SET_IS_VALID_EMAIL,
  SET_IS_VALID_USER,
  GET_TOKEN_ERROR,
  SET_EMAIL,
  SET_TOKEN_LOADING
} from "../actions/user_actions";

const initialState = {
  isVaildEmail: false,
  isPlayGame: false,
  tokenLoading: false,
  email: "",
  token_error: false,
  isVaildUser: false
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);

  const setIsValidEmail = e => {
    dispatch({ type: SET_IS_VALID_EMAIL, payload: e.target.value });
  };

  const setEmail = val => {
    dispatch({ type: SET_EMAIL, payload: val });
  };

  const setIsVaildUser = val => {
    dispatch({ type: SET_IS_VALID_USER, payload: val });
  };

  const setTokenLoading = val => {
    dispatch({ type: SET_TOKEN_LOADING, payload: val });
  };

  const setTokenError = val => {
    dispatch({ type: GET_TOKEN_ERROR, payload: val });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setIsValidEmail,
        setEmail,
        setIsVaildUser,
        setTokenLoading,
        setTokenError
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
