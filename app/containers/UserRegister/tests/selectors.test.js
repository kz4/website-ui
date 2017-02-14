// import { fromJS } from 'immutable';
// import { makeSelectUserRegisterDomain } from '../selectors';

// const selector = makeSelectUserRegisterDomain();
import { fromJS } from 'immutable';
import { makeSelectUserRegisterDomain, makeSelectRegisterCredentials } from '../selectors';

describe('selectUserRegisterDomain', () => {
  const selectUserRegisterDomain = makeSelectUserRegisterDomain();
  it('should select the UserRegister state', () => {
    const userRegisterState = fromJS({
      username: '',
      password: '',
      verifyPassword: '',
    });
    const mockedState = fromJS({
      register: {
        userRegister: userRegisterState,
      },
    });
    expect(selectUserRegisterDomain(mockedState)).toEqual(userRegisterState);
  });
});

describe('makeSelectRegisterCredentials', () => {
  const selectRegisterCredentialsSelector = makeSelectRegisterCredentials();
  it('should select username, password, and verifyPassword', () => {
    const expectedJS = {
      username: 'foo',
      password: 'bar',
      verifyPassword: true,
    };
    const expected = fromJS(expectedJS);
    const mockedState = fromJS({
      register: {
        userRegister: expectedJS,
      },
    });
    expect(selectRegisterCredentialsSelector(mockedState)).toEqual(expected);
  });

  it('should select username, password, and verifyPassword as default values if it\'s empty', () => {
    const expectedJS = {
      username: '',
      password: '',
      verifyPassword: false,
    };
    const expected = fromJS(expectedJS);
    const mockedState = fromJS({
      register: {
        userRegister: {},
      },
    });
    expect(selectRegisterCredentialsSelector(mockedState)).toEqual(expected);
  });
});
