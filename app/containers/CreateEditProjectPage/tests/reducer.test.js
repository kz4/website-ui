
import { fromJS } from 'immutable';
import createEditProjectPageReducer from '../reducer';

describe('createEditProjectPageReducer', () => {
  it('returns the initial state', () => {
    expect(createEditProjectPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
