
import { fromJS } from 'immutable';
import {
  makeChangeUsernameAction,
  makeChangePasswordAction,
  makeChangeRememberAction,
  makeDoLogInAction,
  makeLoginErrorAction,
} from '../actions';
import userLoginReducer from '../reducer';
import { LOGIN_ERROR_MSG_DEFAULT } from '../constants';

describe('userLoginReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      username: '',
      password: '',
      remember: false,
      loginError: false,
      loginErrorMsg: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(userLoginReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the change username action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('username', fixture);

    expect(userLoginReducer(state, makeChangeUsernameAction(fixture))).toEqual(expectedResult);
  });

  it('should handle the change password action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('password', fixture);

    expect(userLoginReducer(state, makeChangePasswordAction(fixture))).toEqual(expectedResult);
  });

  it('should handle the change remember action correctly', () => {
    const fixture = true;
    const expectedResult = state.set('remember', fixture);

    expect(userLoginReducer(state, makeChangeRememberAction(fixture))).toEqual(expectedResult);
  });

  it('should handle the do login action correctly', () => {
    const localState = state.set('loginError', true);
    const expectedResult = state.set('loginError', false);

    expect(userLoginReducer(localState, makeDoLogInAction())).toEqual(expectedResult);
  });

  it('should handle the login error action with loginErrorMsg', () => {
    const fixture = 'foo';
    const expectedResult = state.set('loginErrorMsg', fixture).set('loginError', true);

    expect(userLoginReducer(state, makeLoginErrorAction(fixture))).toEqual(expectedResult);
  });

  it('should handle the login error action without loginErrorMsg', () => {
    const localState = state.set('loginErrorMsg', 'foo');
    const expectedResult = state.set('loginErrorMsg', LOGIN_ERROR_MSG_DEFAULT).set('loginError', true);

    expect(userLoginReducer(localState, makeLoginErrorAction())).toEqual(expectedResult);
  });
});
