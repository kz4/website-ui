
import { fromJS } from 'immutable';
import { onChangeUsername, onChangePassword, onChangeVerifyPassword } from '../actions';
import userRegisterReducer from '../reducer';

describe('userRegisterReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({});
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(userRegisterReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the change username action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('username', fixture);

    expect(userRegisterReducer(state, onChangeUsername(fixture))).toEqual(expectedResult);
  });
  it('should handle the change password action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('password', fixture);

    expect(userRegisterReducer(state, onChangePassword(fixture))).toEqual(expectedResult);
  });
  it('should handle the change verifyPassword action correctly', () => {
    const fixture = true;
    const expectedResult = state.set('verifyPassword', fixture);

    expect(userRegisterReducer(state, onChangeVerifyPassword(fixture))).toEqual(expectedResult);
  });
});
