
import { fromJS } from 'immutable';
import catsReducer from '../reducer';

describe('catsReducer', () => {
  it('returns the initial state', () => {
    expect(catsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
