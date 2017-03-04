import { take, put, /* call, put, select, */ takeEvery, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import { NEW_CONTAINER_ACTION } from './constants';
import { makeAddNewContainerAction } from './actions';
import getTestContainerASagas from './dynamicContainers/TestContainerA/sagas';
import getTestContainerBSagas from './dynamicContainers/TestContainerB/sagas';
import testContainerAReducer from './dynamicContainers/TestContainerA/reducer';
import testContainerBReducer from './dynamicContainers/TestContainerB/reducer';

function getContainerSagas(container) {
  switch (container.type) {
    case 'TestContainerA':
      return getTestContainerASagas(container);
    case 'TestContainerB':
      return getTestContainerBSagas(container);
    default:
      throw new Error(`No container found for ${container.type}`);
  }
}


// should always return truthy, since code will expect an ID to never be falsey.
const getUniqueId = (() => {
  let currentId = 0;
  return () => {
    currentId += 1;
    return currentId;
  };
})();

export default ({ injectSagas, injectReducer }) => {
  // export default ({ /* injectReducerForced, */ injectSagas /*, injectReducerName */ }) => {
  function* addContainerSaga(action) {
    const container = action.container;
    container.frontendId = getUniqueId();
    yield put(makeAddNewContainerAction(container));
    const containerSagas = getContainerSagas(container);
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
  injectReducer('projectDashboardPageContainers', combineReducers({
    testContainerA: testContainerAReducer,
    testContainerB: testContainerBReducer,
  }));
};
