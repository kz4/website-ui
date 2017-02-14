
import { fromJS } from 'immutable';
import projectListReducer from '../reducer';

describe('projectListReducer', () => {
  it('returns the initial state', () => {
    expect(projectListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
