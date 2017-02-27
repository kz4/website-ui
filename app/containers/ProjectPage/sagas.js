import { take, call, put, /* select, */ takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { paths } from 'config';
import { FETCH_PROJECT_ACTION } from './constants';
import { makeFetchProjectSuccessAction } from './actions';

export function* fetchProjectData(action) {
  try {
    console.log('fetchProfileData', action);
    // Call our request helper (see 'utils/request')
    const project = yield call(request, paths.api.project.getById(action.projectId));
    yield put(makeFetchProjectSuccessAction({
      title: project.project_name,
      description: project.project_description,
    }));
  } catch (err) {
    console.log('fetchProfileData err', err);
    // yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export function* watcherSaga() {
  const watcher = yield takeLatest(FETCH_PROJECT_ACTION, fetchProjectData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  watcherSaga,
];
