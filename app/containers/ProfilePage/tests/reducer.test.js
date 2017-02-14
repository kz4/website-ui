
import { fromJS } from 'immutable';
import { profileFormUpdated } from '../actions';
import profilePageReducer from '../reducer';

describe('profilePageReducer', () => {
  it('returns the initial state', () => {
    expect(profilePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

describe('userProfileReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({});
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(userProfileReducer(undefined, {})).toEqual(expectedResult);
  });

  //it('should handle the change Name action correctly', () => {
  //it('should handle the change Email action correctly', () => {
  //it('should handle the change Phone action correctly', () => {

});
