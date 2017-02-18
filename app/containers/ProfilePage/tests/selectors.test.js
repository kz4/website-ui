// import { fromJS } from 'immutable';
// import { makeSelectProfilePageDomain } from '../selectors';

// const selector = makeSelectProfilePageDomain();

import { fromJS } from 'immutable';
import { makeSelectProfilePage } from '../selectors';

describe('makeSelectProfilePageDomain', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});

describe('selectProfilePageDomain', () => {
  const selectProfilePageDomain = makeSelectProfilePage();
  it('should have the Profile state', () => {
    const userProfileState = fromJS({
      Name: '',
      Email: '',
      Phone: '',
    });
    const mockedState = fromJS({
      profile: {
        userProfile: userProfileState,
      },
    });
    expect(selectProfilePageDomain(mockedState)).toEqual(userProfileState);
  });
});
