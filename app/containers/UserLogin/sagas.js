import { take, call, cancel, /* put, */ select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { paths } from 'config';

import request from 'utils/request';
import { makeSelectLoginCredentials } from './selectors';
import { DO_LOGIN } from './constants';

/**
 * Github repos request/response handler
 */
export function* getLoginResponse() {
  // Select username from store
  const loginCred = yield select(makeSelectLoginCredentials());
  const requestURL = paths.api.auth.LOGIN;

  try {
    // Call our request helper (see 'utils/request')
    const loginResponse = yield call(request, requestURL, {
      method: 'POST',
      body: {
        username: loginCred.get('username'),
        password: loginCred.get('password'),
      },
    });
    console.log('loginResponse', loginResponse);
    // yield put(reposLoaded(repos, username));
  } catch (err) {
    // console.log('reponse error', err);
    // yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* login() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(DO_LOGIN, getLoginResponse);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  login,
];
