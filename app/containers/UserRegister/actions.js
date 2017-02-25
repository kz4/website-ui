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
  CHANGE_EMAIL,
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

export function onChangeEmailAction(email) {
  return {
    type: CHANGE_EMAIL,
    email,
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

