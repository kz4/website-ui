
import { fromJS } from 'immutable';
import niviHelloWorldReducer from '../reducer';

describe('niviHelloWorldReducer', () => {
  it('returns the initial state', () => {
    expect(niviHelloWorldReducer(undefined, {})).toEqual(fromJS({}));
  });
});
