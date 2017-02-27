
import { fromJS } from 'immutable';
// import { makeProfileFormUpdatedAction } from '../actions';
import profilePageReducer from '../reducer';

describe('profilePageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      name: '',
      email: '',
      phone: '',
      UpdateError: false,
      UpdateErrorMsg: '',
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profilePageReducer(undefined, {})).toEqual(expectedResult);
  });
});
