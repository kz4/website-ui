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
  CHANGE_REMEMBER,
} from './constants';

export function onChangeUsernameAction(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function onChangePasswordAction(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function onChangeRememberAction(remember) {
  return {
    type: CHANGE_REMEMBER,
    remember,
  };
}

export function onDoLogInAction() {
  return {
    type: DO_LOGIN,
  };
}

export function onLoginSuccessAction(loginResponse) {
  return {
    type: LOGIN_SUCCESS,
    loginResponse,
  };
}

