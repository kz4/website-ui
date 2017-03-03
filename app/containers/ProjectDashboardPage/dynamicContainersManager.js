import { take, put, /* call, put, select, */ takeEvery, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { NEW_CONTAINER_ACTION } from './constants';
import { makeAddNewContainerAction } from './actions';
import getTestContainerASagas from './dynamicContainers/TestContainerA/sagas';
import getTestContainerBSagas from './dynamicContainers/TestContainerB/sagas';

function getContainerSagas(container) {
  switch (container.type) {
    case 'TestContainerA':
      return getTestContainerASagas;
    case 'TestContainerB':
      return getTestContainerBSagas;
    default:
      throw new Error(`No container found for ${container.type}`);
  }
}

export default ({ injectSagas }) => {
  // export default ({ /* injectReducerForced, */ injectSagas /*, injectReducerName */ }) => {
  function* addContainerSaga(action) {
    const container = action.container;
    yield put(makeAddNewContainerAction(container));
    const containerSagas = getContainerSagas(container)();
    injectSagas(containerSagas);
    // do something with injecting reducers based on type and id
  }

// Individual exports for testing
  function* addContainerWatcherSaga() {
    const doLoginWatcher = yield takeEvery(NEW_CONTAINER_ACTION, addContainerSaga);

    // Suspend execution until location changes
    yield take(LOCATION_CHANGE);

    yield cancel(doLoginWatcher);
  }

// All sagas to be loaded.
  const sagasToBeLoaded = [
    addContainerWatcherSaga,
  ];

  injectSagas(sagasToBeLoaded);
  // keep track of all reducers seen from each container, when we add a new container, add the
  // new reducer and re-inject reducer
  // injectReducer('projectDashboardPageContainers', reducer.default);
};
