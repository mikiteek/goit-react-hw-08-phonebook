import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
}

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post("users/signup", credentials)
    .then(({data}) => {
      console.log(data)
      token.set(data.token)
      dispatch(authActions.registerSuccess(data))
    })
    .catch(error => dispatch(authActions.registerError(error)));
}

export default {
  register,
}