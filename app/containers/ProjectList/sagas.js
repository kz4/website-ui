import { take, call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import { GET_PROJECTS, GET_PROJECTS_SUCCESS } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import { makeGetProjectsAction, makeGetProjectsSuccessAction } from './actions';
import request from 'utils/request';

/*
 * Call API to retrieve user's list of projects
 */
export function* getProjects() {
  try {
    const result = yield call(request, GET_PROJECTS);
    console.log('get projects response', result);
    yield put(makeGetProjectsSuccessAction(result));
  } catch (err) {
    console.log('error!', err);
  }
  }

/*
 * Watcher lifecycle
 */
export function* getProjectsWatcherSaga() {
  const watcher = yield takeLatest(GET_PROJECTS, getProjects);
  yield put(makeGetProjectsAction());
  yield take(LOCATION_CHANGE);
  cancel(watcher);
}

// All sagas to be loaded
export default [
  getProjects,
  getProjectsWatcherSaga,
];

