
import { fromJS } from 'immutable';
import { onChangeUsernameAction, onChangePasswordAction, onChangeRememberAction } from '../actions';
import userLoginReducer from '../reducer';

describe('userLoginReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({});
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(userLoginReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the change username action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('username', fixture);

    expect(userLoginReducer(state, onChangeUsernameAction(fixture))).toEqual(expectedResult);
  });
  it('should handle the change password action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('password', fixture);

    expect(userLoginReducer(state, onChangePasswordAction(fixture))).toEqual(expectedResult);
  });
  it('should handle the change remember action correctly', () => {
    const fixture = true;
    const expectedResult = state.set('remember', fixture);

    expect(userLoginReducer(state, onChangeRememberAction(fixture))).toEqual(expectedResult);
  });
});
