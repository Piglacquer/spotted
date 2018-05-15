import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGIN_WILL_MOUNT,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_WILL_MOUNT
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        loginUserFail(dispatch, error);
      });
  };
};

export const registerUser = ({ email, password }) => {
  return dispatch => {
    dispatch({
      type: REGISTER_USER
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        registerUserSuccess(dispatch);
        Actions.pop();
      })
      .catch(error => registerUserFail(dispatch, error));
  };
};

export const registerWillMount = () => {
  return {
    type: REGISTER_WILL_MOUNT
  };
};

export const loginWillMount = () => {
  return {
    type: LOGIN_WILL_MOUNT
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
};

const registerUserSuccess = dispatch => {
  dispatch({
    type: REGISTER_USER_SUCCESS
  });
};

const registerUserFail = (dispatch, error) => {
  dispatch({
    type: REGISTER_USER_FAIL,
    payload: error
  });
};
