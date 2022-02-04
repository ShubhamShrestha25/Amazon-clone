import * as types from "./actionTypes";
import { auth } from "../../utils/firebasee";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerError = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

const loginError = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
  payload: user,
});

const logoutError = (error) => ({
  type: types.LOGOUT_FAILURE,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerError(error.messege)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginError(error.messege)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then(dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error.messege)));
  };
};
