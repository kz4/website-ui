// import { fromJS } from 'immutable';
// import { makeSelectUserLoginDomain } from '../selectors';

// const selector = makeSelectUserLoginDomain();
import { fromJS } from 'immutable';
import {
  makeSelectUserLoginSubstate,
  makeSelectLoginCredentials,
  makeSelectLoginError,
  makeSelectLoginErrorMsg,
} from '../selectors';

describe('selectUserLoginDomain', () => {
  const selectUserLoginDomain = makeSelectUserLoginSubstate();
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
});

describe('makeSelectLoginError', () => {
  const selectLoginError = makeSelectLoginError();
  it('should select loginError', () => {
    const expectedVal = true;
    const expectedJS = {
      loginError: expectedVal,
    };
    const mockedState = fromJS({
      login: {
        userLogin: expectedJS,
      },
    });
    expect(selectLoginError(mockedState)).toEqual(expectedVal);
  });
});

describe('makeSelectLoginErrorMsg', () => {
  const selectLoginErrorMsg = makeSelectLoginErrorMsg();
  it('should select loginErrorMsg', () => {
    const expectedVal = 'foo';
    const expectedJS = {
      loginErrorMsg: expectedVal,
    };
    const mockedState = fromJS({
      login: {
        userLogin: expectedJS,
      },
    });
    expect(selectLoginErrorMsg(mockedState)).toEqual(expectedVal);
  });
});
