
import { fromJS } from 'immutable';
import { onChangeUsername, onChangePassword, onChangeRemember } from '../actions';
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

    expect(userLoginReducer(state, onChangeUsername(fixture))).toEqual(expectedResult);
  });
  it('should handle the change password action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('password', fixture);

    expect(userLoginReducer(state, onChangePassword(fixture))).toEqual(expectedResult);
  });
  it('should handle the change remember action correctly', () => {
    const fixture = true;
    const expectedResult = state.set('remember', fixture);

    expect(userLoginReducer(state, onChangeRemember(fixture))).toEqual(expectedResult);
  });
});
