
import { fromJS } from 'immutable';
// import { makeProfileFormUpdatedAction } from '../actions';
import profilePageReducer from '../reducer';

describe('profilePageReducer', () => {
  it('returns the initial state', () => {
    expect(profilePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

describe('userProfileReducer', () => {
  // let state;
  // beforeEach(() => {
  //   state = fromJS({});
  // });

  it('should return the initial state', () => {
    // const expectedResult = state;
    // expect(userProfileReducer(undefined, {})).toEqual(expectedResult);
  });
});
