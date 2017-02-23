
import { fromJS } from 'immutable';
import { onChangeUsernameAction, onChangePasswordAction, onChangeVerifyPasswordAction } from '../actions';
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

    expect(userRegisterReducer(state, onChangeUsernameAction(fixture))).toEqual(expectedResult);
  });
  it('should handle the change password action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('password', fixture);

    expect(userRegisterReducer(state, onChangePasswordAction(fixture))).toEqual(expectedResult);
  });
  it('should handle the change verifyPassword action correctly', () => {
    const fixture = true;
    const expectedResult = state.set('verifyPassword', fixture);

    expect(userRegisterReducer(state, onChangeVerifyPasswordAction(fixture))).toEqual(expectedResult);
  });
});
