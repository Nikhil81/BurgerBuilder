import axios from "axios";
import * as actionsType from "../actions/actionType";
import { userid, token, exiprationTime } from "../../constants/constants";

export const authStart = () => {
  return {
    type: actionsType.AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionsType.AUTH_START_SUCCESS,
    idToken,
    userId,
  };
};

export const authFailed = (error) => {
  return {
    type: actionsType.AUTH_START_FAILED,
    error,
  };
};

export const logout = () => {
  localStorage.removeItem(token);
  localStorage.removeItem(exiprationTime);
  return {
    type: actionsType.AUTH_LOGOUT,
  };
};

const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const signIn = (username, password, isSingIn) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: username,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGblpMqfhlZvnxIPRttryXWF8Gy1H-CFE";

    if (isSingIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGblpMqfhlZvnxIPRttryXWF8Gy1H-CFE";
    }
    axios
      .post(url, authData)
      .then((response) => {
        let expirationTime = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem(token, response.data.idToken);
        localStorage.setItem(exiprationTime, expirationTime);
        localStorage.setItem(userid, response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authFailed(error.response.data.error));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const idToken = localStorage.getItem(token);
    if (!idToken) {
      dispatch(logout());
    } else {
      const expirationTime = new Date(localStorage.getItem(exiprationTime));
      if (expirationTime > new Date()) {
        const localId = localStorage.getItem(userid);
        dispatch(authSuccess(idToken, localId));
        dispatch(
          checkAuthTimeout(
            (expirationTime.getTime() - new Date().getTime()) / 1000
          )
        );
      } else {
        dispatch(logout());
      }
    }
  };
};
