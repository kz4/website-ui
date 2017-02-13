// import { fromJS } from 'immutable';
// import { makeSelectUserLoginDomain } from '../selectors';

// const selector = makeSelectUserLoginDomain();
import { fromJS } from 'immutable';
import { makeSelectUserLoginDomain, makeSelectLoginCredentials } from '../selectors';

describe('selectUserLoginDomain', () => {
  const selectUserLoginDomain = makeSelectUserLoginDomain();
  it('should select the UserLogin state', () => {
    const userLoginState = fromJS({
      username: '',
      password: '',
      remember: '',
    });
    const mockedState = fromJS({
      login: {
        userLogin: userLoginState,
      },
    });
    expect(selectUserLoginDomain(mockedState)).toEqual(userLoginState);
  });
});

describe('makeSelectLoginCredentials', () => {
  const selectLoginCredentialsSelector = makeSelectLoginCredentials();
  it('should select username, password, and remember', () => {
    const expectedJS = {
      username: 'foo',
      password: 'bar',
      remember: true,
    };
    const expected = fromJS(expectedJS);
    const mockedState = fromJS({
      login: {
        userLogin: expectedJS,
      },
    });
    expect(selectLoginCredentialsSelector(mockedState)).toEqual(expected);
  });

  it('should select username, password, and remember as default values if it\'s empty', () => {
    const expectedJS = {
      username: '',
      password: '',
      remember: false,
    };
    const expected = fromJS(expectedJS);
    const mockedState = fromJS({
      login: {
        userLogin: {},
      },
    });
    expect(selectLoginCredentialsSelector(mockedState)).toEqual(expected);
  });
});
