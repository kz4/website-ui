
import { fromJS } from 'immutable';
import dogsReducer from '../reducer';

describe('dogsReducer', () => {
  it('returns the initial state', () => {
    expect(dogsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
