
import {
  makeChangeUsernameAction,
  makeChangePasswordAction,
  makeChangeRememberAction,
  makeDoLogInAction,
  makeLoginSuccessAction,
  makeLoginErrorAction,
} from '../actions';
import {
  CHANGE_PASSWORD_ACTION,
  CHANGE_REMEMBER_ACTION,
  CHANGE_USERNAME_ACTION,
  DO_LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_ERROR_ACTION,
} from '../constants';

describe('UserLogin actions', () => {
  describe('on Change Username', () => {
    it('has a type of CHANGE_USERNAME and username', () => {
      const expectedUsername = 'foo';
      const expected = {
        type: CHANGE_USERNAME_ACTION,
        username: expectedUsername,
      };
      expect(makeChangeUsernameAction(expectedUsername)).toEqual(expected);
    });
  });

  describe('on Change Password', () => {
    it('has a type of CHANGE_PASSWORD and password', () => {
      const expectedPassword = 'foo';
      const expected = {
        type: CHANGE_PASSWORD_ACTION,
        password: expectedPassword,
      };
      expect(makeChangePasswordAction(expectedPassword)).toEqual(expected);
    });
  });

  describe('on Change Remember', () => {
    it('has a type of CHANGE_REMEMBER and remember', () => {
      const expectedRemember = true;
      const expected = {
        type: CHANGE_REMEMBER_ACTION,
        remember: expectedRemember,
      };
      expect(makeChangeRememberAction(expectedRemember)).toEqual(expected);
    });
  });

  describe('on Do Log In', () => {
    it('has a type of DO_LOGIN', () => {
      const expected = {
        type: DO_LOGIN_ACTION,
      };
      expect(makeDoLogInAction()).toEqual(expected);
    });
  });

  describe('on Login Success', () => {
    it('has a type of LOGIN_SUCCESS and loginResponse', () => {
      const expectedLoginResponse = 'bar';
      const expected = {
        type: LOGIN_SUCCESS_ACTION,
        loginResponse: expectedLoginResponse,
      };
      expect(makeLoginSuccessAction(expectedLoginResponse)).toEqual(expected);
    });
  });

  describe('on make login error', () => {
    it('has a type of LOGIN_ERROR_ACTION and has errorMsg', () => {
      const expectedErrorMsg = 'foo';
      const expected = {
        type: LOGIN_ERROR_ACTION,
        loginErrorMsg: expectedErrorMsg,
      };
      expect(makeLoginErrorAction(expectedErrorMsg)).toEqual(expected);
    });
  });
});
