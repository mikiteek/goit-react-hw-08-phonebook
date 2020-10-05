import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = {name: null, email: null};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, {payload}) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, {payload}) => payload.token,
});

const setError = (_, {payload}) => payload;

const error = createReducer(null, {
  [authActions.registerError]:setError,
});

export default combineReducers({
  user,
  token,
  error,
})