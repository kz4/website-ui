import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_HELLO_WORLD_DATA_ACTION } from './constants';
import { makeLoadHelloWorldDataAction, makeLoadSuccessHelloWorldDataAction } from './actions';

export function* getHelloWorldData() {
  // in prod, should put all paths together, not have them hard coded.
  console.log('getHelloWorldData');
  const requestURL = '/api/hello_world/some_id';

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    console.log('getHelloWorldData Result', result);
    yield put(makeLoadSuccessHelloWorldDataAction(result));
  } catch (err) {
    console.log('err', err);
    // yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export function* pageLoadSaga() {
  const watcher = yield takeLatest(LOAD_HELLO_WORLD_DATA_ACTION, getHelloWorldData);

  yield put(makeLoadHelloWorldDataAction());

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
// All sagas to be loaded
export default [
  pageLoadSaga,
];
