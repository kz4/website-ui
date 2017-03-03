
import { fromJS } from 'immutable';
import testContainerBReducer from '../reducer';

describe('testContainerBReducer', () => {
  it('returns the initial state', () => {
    expect(testContainerBReducer(undefined, {})).toEqual(fromJS({}));
  });
});
