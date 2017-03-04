import request from 'utils/request';
import { paths } from 'config';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, cancel, put, takeLatest } from 'redux-saga/effects';
import { GET_PROJECTS_ACTION } from './constants';
import { makeGetProjectsAction, makeGetProjectsSuccessAction } from './actions';

/*
 * Call API to retrieve user's list of project
 */
export function* getProjects() {
  const requestURL = paths.api.projects.GET;
  console.log("Get projects saga URL:");
  console.log(requestURL);
  try {
    const result = yield call(request, requestURL);
    console.log(result.toJS());
    const getProjectSuccessAction = makeGetProjectsSuccessAction(result);
    yield put(getProjectSuccessAction);
  } catch (err) {
    // console.log('error!', err);
  }
}

/*
 * Watcher lifecycle
 */
export function* getProjectsWatcherSaga() {
  const watcher = yield takeLatest(GET_PROJECTS_ACTION, getProjects);
  yield put(makeGetProjectsAction());
  yield take(LOCATION_CHANGE);
  cancel(watcher);
}

// All sagas to be loaded
export default [
  // getProjects,
  getProjectsWatcherSaga,
];

