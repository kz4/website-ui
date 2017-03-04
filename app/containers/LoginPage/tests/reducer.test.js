import { fromJS } from 'immutable';
import { loginReducer } from '../reducer';

describe('loginReducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(fromJS({}));
  });
});
