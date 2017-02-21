
import { fromJS } from 'immutable';
import { registerReducer } from '../reducer';


describe('registerReducer', () => {
  it('should return the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
