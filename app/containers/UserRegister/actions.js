/*
 *
 * UserRegister actions
 *
 */

import {
  DO_REGISTER,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  REGISTER_SUCCESS,
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

export function onDoRegister() {
  return {
    type: DO_REGISTER,
  };
}

export function onRegisterSuccess(registerResponse) {
  return {
    type: REGISTER_SUCCESS,
    registerResponse,
  };
}
