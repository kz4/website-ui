import { take, put, takeEvery, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { makeNewContainerAction } from './actions';
import { FETCH_PROJECT_DASHBOARD_ACTION } from './constants';

// Individual exports for testing
export function* getDynamicContainers() {
  const response = [{
    init: false,
    type: 'TestContainerA',
    text: 'hello',
  }, {
    init: false,
    type: 'TestContainerB',
    text: 'world 1',
  }];
  yield response.map((container) => put(makeNewContainerAction(container)));
  // See example in containers/HomePage/sagas.js
}

// Individual exports for testing
function* watcherSaga() {
  const doLoginWatcher = yield takeEvery(FETCH_PROJECT_DASHBOARD_ACTION, getDynamicContainers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);

  yield cancel(doLoginWatcher);
}

// All sagas to be loaded
export default [
  watcherSaga,
];
