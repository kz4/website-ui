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
  CHANGE_VERIFY_PASSWORD,
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

export function onChangeVerifyPasswordAction(verifyPassword) {
  return {
    type: CHANGE_VERIFY_PASSWORD,
    verifyPassword,
  };
}

export function onDoRegisterAction() {
  return {
    type: DO_REGISTER,
  };
}

export function onRegisterSuccessAction(registerResponse) {
  return {
    type: REGISTER_SUCCESS,
    registerResponse,
  };
}

