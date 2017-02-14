import { take, call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { paths } from 'config';
import { browserHistory } from 'react-router';
import request from 'utils/request';
import { makeSelectLoginCredentials } from './selectors';
import { DO_LOGIN, LOGIN_SUCCESS } from './constants';
import { onLoginSuccess } from './actions';

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
        remember: loginCred.get('remember'),
      },
    });
    // browserHistory.push(paths.appPaths.user.path);
    yield put(onLoginSuccess(loginResponse));
  } catch (err) {
    // console.log('reponse error', err);
    // yield put(repoLoadingError(err));
  }
}

export function* changeToUserPage() {
  browserHistory.push(paths.appPaths.user.path);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* login() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const doLoginWatcher = yield takeLatest(DO_LOGIN, getLoginResponse);
  const loginSuccessWatcher = yield takeLatest(LOGIN_SUCCESS, changeToUserPage);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  // yield cancel(doLoginWatcher);
  yield [doLoginWatcher, loginSuccessWatcher].map((task) => cancel(task));
}

// Bootstrap sagas
export default [
  login,
];