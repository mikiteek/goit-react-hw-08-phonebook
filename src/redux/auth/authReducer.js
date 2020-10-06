import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = {name: null, email: null};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, {payload}) => payload.user,
  [authActions.loginSuccess]: (_, {payload}) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, {payload}) => payload,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, {payload}) => payload.token,
  [authActions.loginSuccess]: (_, {payload}) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, {payload}) => payload;

const error = createReducer(null, {
  [authActions.registerError]:setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
})