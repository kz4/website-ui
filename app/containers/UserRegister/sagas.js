import { take, call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { paths } from 'config';
import { browserHistory } from 'react-router';
import request from 'utils/request';
import { makeSelectRegisterCredentials } from './selectors';
import { DO_REGISTER, REGISTER_SUCCESS } from './constants';
import { onRegisterSuccess } from './actions';

/**
 * Github repos request/response handler
 */
export function* getRegisterResponse() {
  // Select username from store
  const registerCred = yield select(makeSelectRegisterCredentials());
  const requestURL = paths.api.auth.REGISTER;

  try {
    // Call our request helper (see 'utils/request')
    const registerResponse = yield call(request, requestURL, {
      method: 'POST',
      body: {
        username: registerCred.get('username'),
        password: registerCred.get('password'),
      },
    });
    // browserHistory.push(paths.appPaths.user.path);
    yield put(onRegisterSuccess(registerResponse));
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
export function* register() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const doRegisterWatcher = yield takeLatest(DO_REGISTER, getRegisterResponse);
  const registerSuccessWatcher = yield takeLatest(REGISTER_SUCCESS, changeToUserPage);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  // yield cancel(doRegisterWatcher);
  yield [doRegisterWatcher, registerSuccessWatcher].map((task) => cancel(task));
}

// Bootstrap sagas
export default [
  register,
];
