/*
 *
 * UserLogin actions
 *
 */

import {
  DO_LOGIN_ACTION,
  CHANGE_USERNAME_ACTION,
  CHANGE_PASSWORD_ACTION,
  LOGIN_SUCCESS_ACTION,
  CHANGE_REMEMBER_ACTION,
  LOGIN_ERROR_ACTION,
} from './constants';

export function makeChangeUsernameAction(username) {
  return {
    type: CHANGE_USERNAME_ACTION,
    username,
  };
}

export function makeChangePasswordAction(password) {
  return {
    type: CHANGE_PASSWORD_ACTION,
    password,
  };
}

export function makeChangeRememberAction(remember) {
  return {
    type: CHANGE_REMEMBER_ACTION,
    remember,
  };
}

export function makeDoLogInAction() {
  return {
    type: DO_LOGIN_ACTION,
  };
}

export function makeLoginSuccessAction(loginResponse) {
  return {
    type: LOGIN_SUCCESS_ACTION,
    loginResponse,
  };
}

export function makeLoginErrorAction(errorMsg) {
  return {
    type: LOGIN_ERROR_ACTION,
    errorMsg,
  };
}
