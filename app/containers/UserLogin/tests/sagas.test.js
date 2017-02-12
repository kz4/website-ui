/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';
import { paths } from 'config';
import request from 'utils/request';
import { fromJS } from 'immutable';
import * as router from 'react-router';
import { login, getLoginResponse, changeToUserPage } from '../sagas';
import { DO_LOGIN, LOGIN_SUCCESS } from '../constants';
import { makeSelectLoginCredentials } from '../selectors';
import { onLoginSuccess } from '../actions';

describe('changeToUserPage', () => {
  let pushMock;

  beforeEach(() => {
    pushMock = jest.fn();
    router.browserHistory = { push: pushMock };
  });

  it('should push to user page', () => {
    const changeToUserPageGenerator = changeToUserPage();
    changeToUserPageGenerator.next();
    expect(pushMock).toBeCalledWith(paths.appPaths.user.path);
  });
});

describe('getLoginResponse saga', () => {
  let getLoginResponseGenerator;

  beforeEach(() => {
    getLoginResponseGenerator = getLoginResponse();
    const selectDescriptor = getLoginResponseGenerator.next().value;
    // using stringify because that's what they did in the redux-saga issue
    // https://github.com/redux-saga/redux-saga/issues/325
    expect(
      JSON.stringify(selectDescriptor)
    ).toEqual(JSON.stringify(select(makeSelectLoginCredentials())));

    const expectedBody = {
      username: 'foo',
      password: 'bar',
      remember: true,
    };
    const loginCred = fromJS(expectedBody);
    const callDescriptor = getLoginResponseGenerator.next(loginCred).value;
    expect(callDescriptor).toEqual(call(request, paths.api.auth.LOGIN, {
      method: 'POST',
      body: expectedBody,
    }));
  });

  it('should dispatch onLoginSuccess for a success', () => {
    const loginResponse = {
      status: 200,
    };
    const putDescriptor = getLoginResponseGenerator.next(loginResponse).value;
    expect(putDescriptor).toEqual(put(onLoginSuccess(loginResponse)));
  });

  // haven't implemented yet, but should look like this
  // it('should dispatch onLoginFailure for a failure', () => {
  //     const loginResponse = {
  //     status: 500,
  //   };
  //   const putDescriptor = getLoginResponseGenerator.throw(loginResponse).value;
  //   expect(putDescriptor).toEqual(put(onLoginError(loginResponse)));
  // });
});

describe('login Saga', () => {
  const loginSaga = login();
  const mockDoLoginWatcher = createMockTask();
  const mockLoginSuccessWatcher = createMockTask();

  it('should start task to watch for DO_LOGIN action', () => {
    const takeLatestDescriptor = loginSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(DO_LOGIN, getLoginResponse));
  });

  it('should start task to watch for LOGIN_SUCCESS action', () => {
    const takeLatestDescriptor = loginSaga.next(mockDoLoginWatcher).value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOGIN_SUCCESS, changeToUserPage));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = loginSaga.next(mockLoginSuccessWatcher).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = loginSaga.next().value;
    expect(cancelDescriptor).toEqual([cancel(mockDoLoginWatcher), cancel(mockLoginSuccessWatcher)]);
  });
});
