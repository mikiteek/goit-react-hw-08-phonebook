import {createAction} from "@reduxjs/toolkit"

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");


export default {
  registerRequest,
  registerSuccess,
  registerError
}