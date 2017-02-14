
import {
  onChangeUsername,
  onChangePassword,
  onChangeVerifyPassword,
  onDoRegister,
  onRegisterSuccess,
} from '../actions';
import {
  CHANGE_PASSWORD,
  CHANGE_VERIFY_PASSWORD,
  CHANGE_USERNAME,
  DO_REGISTER,
  REGISTER_SUCCESS,
} from '../constants';

describe('UserRegister actions', () => {
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

  describe('on Change VerifyPassword', () => {
    it('has a type of CHANGE_VERIFY_PASSWORD and verifyPassword', () => {
      const expectedVerifyPassword = true;
      const expected = {
        type: CHANGE_VERIFY_PASSWORD,
        verifyPassword: expectedVerifyPassword,
      };
      expect(onChangeVerifyPassword(expectedVerifyPassword)).toEqual(expected);
    });
  });

  describe('on Do Log In', () => {
    it('has a type of DO_REGISTER', () => {
      const expected = {
        type: DO_REGISTER,
      };
      expect(onDoRegister()).toEqual(expected);
    });
  });

  describe('on Register Success', () => {
    it('has a type of REGISTER_SUCCESS and registerResponse', () => {
      const expectedRegisterResponse = 'bar';
      const expected = {
        type: REGISTER_SUCCESS,
        registerResponse: expectedRegisterResponse,
      };
      expect(onRegisterSuccess(expectedRegisterResponse)).toEqual(expected);
    });
  });
});
