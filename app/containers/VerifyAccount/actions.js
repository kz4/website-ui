/*
 *
 * VerifyAccount actions
 *
 */

import {
  CHANGE_VERIFY_CODE_ACTION,
  CHANGE_USERNAME_ACTION,
  DO_VERIFY_ACCOUNT_ACTION,
  VERIFY_ACCOUNT_SUCCESS_ACTION,
  VERIFY_ACCOUNT_ERROR_ACTION,
} from './constants';

export function makeChangeUsernameAction(username) {
  return {
    type: CHANGE_USERNAME_ACTION,
    username,
  };
}

export function makeChangeVerifyCodeAction(verifyCode) {
  return {
    type: CHANGE_VERIFY_CODE_ACTION,
    verifyCode,
  };
}

export function makeVerifyAccountAction(verifyCode) {
  return {
    type: DO_VERIFY_ACCOUNT_ACTION,
    verifyCode,
  };
}

export function makeVerifySuccessAction(verifyResponse) {
  return {
    type: VERIFY_ACCOUNT_SUCCESS_ACTION,
    verifyResponse,
  };
}

export function makeVerifyErrorAction(verifyErrorMsg) {
  return {
    type: VERIFY_ACCOUNT_ERROR_ACTION,
    verifyErrorMsg,
  };
}

