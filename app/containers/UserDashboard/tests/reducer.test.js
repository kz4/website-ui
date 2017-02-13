
import { fromJS } from 'immutable';
import userConsoleReducer from '../reducer';

describe('userConsoleReducer', () => {
  it('returns the initial state', () => {
    expect(userConsoleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
