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
import { register, getRegisterResponse, changeToUserPage } from '../sagas';
import { DO_REGISTER, REGISTER_SUCCESS } from '../constants';
import { makeSelectRegisterCredentials } from '../selectors';
import { onRegisterSuccess } from '../actions';

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

describe('getRegisterResponse saga', () => {
  let getRegisterResponseGenerator;

  beforeEach(() => {
    getRegisterResponseGenerator = getRegisterResponse();
    const selectDescriptor = getRegisterResponseGenerator.next().value;
    // using stringify because that's what they did in the redux-saga issue
    // https://github.com/redux-saga/redux-saga/issues/325
    expect(
      JSON.stringify(selectDescriptor)
    ).toEqual(JSON.stringify(select(makeSelectRegisterCredentials())));

    const expectedBody = {
      username: 'foo',
      password: 'bar',
      verifyPassword: true,
    };
    const registerCred = fromJS(expectedBody);
    const callDescriptor = getRegisterResponseGenerator.next(registerCred).value;
    expect(callDescriptor).toEqual(call(request, paths.api.auth.REGISTER, {
      method: 'POST',
      body: expectedBody,
    }));
  });

  it('should dispatch onRegisterSuccess for a success', () => {
    const registerResponse = {
      status: 200,
    };
    const putDescriptor = getRegisterResponseGenerator.next(registerResponse).value;
    expect(putDescriptor).toEqual(put(onRegisterSuccess(registerResponse)));
  });

  // haven't implemented yet, but should look like this
  // it('should dispatch onRegisterFailure for a failure', () => {
  //     const registerResponse = {
  //     status: 500,
  //   };
  //   const putDescriptor = getRegisterResponseGenerator.throw(registerResponse).value;
  //   expect(putDescriptor).toEqual(put(onRegisterError(registerResponse)));
  // });
});

describe('register Saga', () => {
  const registerSaga = register();
  const mockDoRegisterWatcher = createMockTask();
  const mockRegisterSuccessWatcher = createMockTask();

  it('should start task to watch for DO_REGISTER action', () => {
    const takeLatestDescriptor = registerSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(DO_REGISTER, getRegisterResponse));
  });

  it('should start task to watch for REGISTER_SUCCESS action', () => {
    const takeLatestDescriptor = registerSaga.next(mockDoRegisterWatcher).value;
    expect(takeLatestDescriptor).toEqual(takeLatest(REGISTER_SUCCESS, changeToUserPage));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = registerSaga.next(mockRegisterSuccessWatcher).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = registerSaga.next().value;
    expect(cancelDescriptor).toEqual([cancel(mockDoRegisterWatcher), cancel(mockRegisterSuccessWatcher)]);
  });
});
