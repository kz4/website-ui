import { take, call, put, /* select, */ takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { FETCH_PROFILE_DATA_ACTION } from './constants';
import { makeFetchProfileDataAction, makeProfileDataLoadedAction } from './actions';

export function* fetchProfileData() {
  try {
    // Call our request helper (see 'utils/request')
    const profileData = yield call(request, '/api/auth/profile');
    yield put(makeProfileDataLoadedAction(profileData));
  } catch (err) {
    console.log('fetchProfileData err', err);
    // yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export function* watcherSaga() {
  const watcher = yield takeLatest(FETCH_PROFILE_DATA_ACTION, fetchProfileData);
  yield put(makeFetchProfileDataAction());

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watcherSaga,
];
