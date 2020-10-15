const user = state => state.auth.user;

const isAuthenticated = state => state.auth.token;

export default {
  user,
  isAuthenticated,
}