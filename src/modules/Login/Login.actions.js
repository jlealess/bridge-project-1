import { APP_ACTIONS } from "../../constants";
import { accessToken } from "../../setup/keys";

const getGithubUser = username => {
  return fetch(`https://api.github.com/users/${username}${accessToken}`);
};

const handleLoginError = () => ({
  type: APP_ACTIONS.SET_LOGIN_ERROR,
  payload: "Please enter a GitHub username"
});

const setUserInLocalStorage = username => {
  localStorage.setItem("ghDevUsername", username);
  localStorage.setItem("ghDevLoggedIn", true);
};

export const handleChangeUsername = e => ({
  type: APP_ACTIONS.SET_USERNAME,
  payload: e.target.value
});

export const handleLogin = profile => ({
  type: APP_ACTIONS.USER_LOGIN,
  payload: profile
});

export const setUserFromLocalStorage = username => ({
  type: APP_ACTIONS.SET_USERNAME,
  payload: username
});

export const loginUser = username => dispatch => {
  if (!localStorage.getItem("ghDevUsername")) {
    setUserInLocalStorage(username);
  }
  if (username) {
    getGithubUser(username)
      .then(res => res.json())
      .then(profile => dispatch(handleLogin(profile)))
  } else {
      dispatch(handleLoginError());
  }
};
