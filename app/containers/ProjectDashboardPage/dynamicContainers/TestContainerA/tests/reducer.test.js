
import { fromJS } from 'immutable';
import testContainerAReducer from '../reducer';

describe('testContainerAReducer', () => {
  it('returns the initial state', () => {
    expect(testContainerAReducer(undefined, {})).toEqual(fromJS({}));
  });
});
