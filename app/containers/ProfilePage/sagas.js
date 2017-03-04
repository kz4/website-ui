// import { take, call, put, select } from 'redux-saga/effects';
import { take, call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { paths } from 'config';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { makeUpdateFields } from './selectors';
import { FETCH_PROFILE_DATA_ACTION, DO_UPDATE_ACTION } from './constants';
import { makeFetchProfileDataAction, makeProfileDataLoadedAction, makeUpdateSuccessAction } from './actions';

export function* getUpdateResponse() {
  const ProfileCred = yield select(makeUpdateFields());
  const requestURL = paths.api.auth.PROFILE;
  console.log(requestURL);
  try {
    const UpdateResponse = yield call(request, requestURL, {
      method: 'POST',
      body: {
        name: ProfileCred.get('name'),
        email: ProfileCred.get('email'),
        phone: ProfileCred.get('phone'),
      },
    });

    yield put(makeUpdateSuccessAction(UpdateResponse));
  } catch (err) {
    // const body = err.body ? err.body : {};
    // const UpdateErrorMsg = body.UpdateErrorMsg : body.UpdateError
    console.log('update proile error', err);
  }
}

export function* update() {
  const doUpdateWatcher = yield takeLatest(DO_UPDATE_ACTION, getUpdateResponse);
  yield take(LOCATION_CHANGE);
  yield cancel(doUpdateWatcher);
}

export function* fetchProfileData() {
  const requestURL = paths.api.auth.PROFILE;
  console.log(requestURL);
  try {
    // Call our request helper (see 'utils/request')
    const profileData = yield call(request, requestURL);
    yield put(makeProfileDataLoadedAction(profileData));
  } catch (err) {
    console.log('fetchProfileData err', err);
    // yield put(repoLoadingError(err));
  }
}
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded
export default [
  defaultSaga,
];
