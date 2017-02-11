
import {
  onChangeUsername,
  onChangePassword,
  onChangeRemember,
  onDoLogIn,
  onLoginSuccess,
} from '../actions';
import {
  CHANGE_PASSWORD,
  CHANGE_REMEMBER,
  CHANGE_USERNAME,
  DO_LOGIN,
  LOGIN_SUCCESS,
} from '../constants';

describe('UserLogin actions', () => {
  describe('on Change Username', () => {
    it('has a type of CHANGE_USERNAME and username', () => {
      const expectedUsername = 'foo';
      const expected = {
        type: CHANGE_USERNAME,
        username: expectedUsername,
      };
      expect(onChangeUsername(expectedUsername)).toEqual(expected);
    });
  });

  describe('on Change Password', () => {
    it('has a type of CHANGE_PASSWORD and password', () => {
      const expectedPassword = 'foo';
      const expected = {
        type: CHANGE_PASSWORD,
        password: expectedPassword,
      };
      expect(onChangePassword(expectedPassword)).toEqual(expected);
    });
  });

  describe('on Change Remember', () => {
    it('has a type of CHANGE_REMEMBER and remember', () => {
      const expectedRemember = true;
      const expected = {
        type: CHANGE_REMEMBER,
        remember: expectedRemember,
      };
      expect(onChangeRemember(expectedRemember)).toEqual(expected);
    });
  });

  describe('on Do Log In', () => {
    it('has a type of DO_LOGIN', () => {
      const expected = {
        type: DO_LOGIN,
      };
      expect(onDoLogIn()).toEqual(expected);
    });
  });

  describe('on Login Success', () => {
    it('has a type of LOGIN_SUCCESS and loginResponse', () => {
      const expectedLoginResponse = 'bar';
      const expected = {
        type: LOGIN_SUCCESS,
        loginResponse: expectedLoginResponse,
      };
      expect(onLoginSuccess(expectedLoginResponse)).toEqual(expected);
    });
  });
});
