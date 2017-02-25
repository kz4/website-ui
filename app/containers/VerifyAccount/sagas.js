import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { paths } from 'config';
import request from 'utils/request';
import { DO_VERIFY_ACCOUNT_ACTION, VERIFY_ACCOUNT_SUCCESS_ACTION, VERIFY_ERROR_MSG_DEFAULT } from './constants';
import { makeVerifySuccessAction, makeVerifyErrorAction } from './actions';
import { makeSelectVerifyCredentials } from './selectors';
import { browserHistory } from 'react-router';

export function* getVerifyResponse() {
  // Select username from store
  const verifyCred = yield select(makeSelectVerifyCredentials());
  const requestURL = 'https://06wl8i4mb2.execute-api.us-east-1.amazonaws.com/dev/users/signup';

  try {
    // Call our request helper (see 'utils/request')
    const verifyResponse = yield call(request, requestURL, {
      method: 'POST',
      body: {
        username: verifyCred.get('username'),
        confirm_code: verifyCred.get('verifyCode'),
      },
    });
    // browserHistory.push(paths.appPaths.user.path);
    yield put(makeVerifySuccessAction(verifyResponse));
  } catch (err) {
    const body = err.body ? err.body : {};
    const verifyErrorMsg = body.verifyErrorMsg ? body.verifyErrorMsg : VERIFY_ERROR_MSG_DEFAULT;
    yield put(makeVerifyErrorAction(verifyErrorMsg));
  }
}

export function* changeToUserPage() {
  browserHistory.push(paths.appPaths.dashboard.path);
}

export function* verify() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const doVerifyWatcher = yield takeLatest(DO_VERIFY_ACCOUNT_ACTION, getVerifyResponse);
  const verifySuccessWatcher = yield takeLatest(VERIFY_ACCOUNT_SUCCESS_ACTION, changeToUserPage);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  // yield cancel(doLoginWatcher);
  yield [doVerifyWatcher, verifySuccessWatcher].map((task) => cancel(task));
}

// All sagas to be loaded
export default [
  verify,
];
