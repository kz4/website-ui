import { take, /* call, put, select, */ takeEvery, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { DEFAULT_ACTION } from './constants';

export default () => {
  function* addContainerSaga(action) {
    console.log('testContainerB', action);
  }

  // Individual exports for testing
  function* addContainerWatcherSaga() {
    const doLoginWatcher = yield takeEvery(DEFAULT_ACTION, addContainerSaga);

    // Suspend execution until location changes
    yield take(LOCATION_CHANGE);

    yield cancel(doLoginWatcher);
  }

  // All sagas to be loaded.
  return [
    addContainerWatcherSaga,
  ];
};
