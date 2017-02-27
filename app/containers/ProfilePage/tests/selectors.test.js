// import { fromJS } from 'immutable';
// import { makeSelectProfilePageDomain } from '../selectors';

// const selector = makeSelectProfilePageDomain();

import { fromJS } from 'immutable';
import { makeSelectProfilePage } from '../selectors';

describe('selectProfilePageDomain', () => {
  const selectProfilePageDomain = makeSelectProfilePage();
  it('should have the Profile state', () => {
    const userProfileState = fromJS({
      Name: '',
      Email: '',
      Phone: '',
    });
    const mockedState = fromJS({
      profile: userProfileState,
    });
    expect(selectProfilePageDomain(mockedState)).toEqual(userProfileState);
  });
});
