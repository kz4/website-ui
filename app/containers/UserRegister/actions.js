/*
 *
 * UserLogin actions
 *
 */

import {
  DO_LOGIN,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  LOGIN_SUCCESS,
  CHANGE_CONFIRM_REMEMBER,
} from './constants';

export function onChangeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function onChangePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function onChangeConfirmPassword(remember) {
  return {
    type: CHANGE_CONFIRM_REMEMBER,
    remember,
  };
}

export function onDoLogIn() {
  return {
    type: DO_LOGIN,
  };
}

export function onLoginSuccess(loginResponse) {
  return {
    type: LOGIN_SUCCESS,
    loginResponse,
  };
}

