import { take, call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { paths } from 'config';
import { browserHistory } from 'react-router';
import request from 'utils/request';
import { makeSelectSaveProject } from './selectors';
import {
  ON_SAVE_ACTION,
  SAVE_SUCCESS_ACTION,
  SAVE_ERROR_MESSAGE_DEFAULT,
  FETCH_PROJECT_ACTION,
} from './constants';
import { onSaveSuccessAction, onSaveErrorAction, makeFetchProjectSuccessAction } from './actions';
/**
 * Github repos request/response handler
 */
export function* getSaveResponse() {
  const saveProject = yield select(makeSelectSaveProject());
  const projectID = saveProject.get('projectID');
  let requestURL;
  if(projectID) {
    requestURL = paths.api.project.updateById(projectID);
  } else {
    requestURL = paths.api.project.create();
  }
  console.log('THE URL IS ', requestURL);
  try {
    const saveResponse = yield call(request, requestURL, {
      method: 'POST',
      body: {
        project_id: saveProject.get('projectID'),
        project_name: saveProject.get('projectTitle'),
        metaData: saveProject.get('metaData'),
        image: saveProject.get('image'),
        project_description: saveProject.get('projectDescription'),
        project_owner: saveProject.get('projectOwner'),
      },
    });

    console.log('the response is ', saveResponse);
    // QUICK FIX, using old projectID if it exists
    const changedResponse = {
      projectID: projectID ? projectID : saveResponse.project_id,
      projectTitle: saveResponse.project_name,
      projectDescription: saveResponse.project_description,
      projectOwner: saveResponse.project_owner,

      // using SaveProject data since back end has no metadata and image at the moment
      metaData: saveProject.get('metaData'),
      image: saveProject.get('image'),
    };


    yield put(onSaveSuccessAction(changedResponse));
  } catch (err) {
    const body = err.body ? err.body : {};
    const saveErrorMsg = body.saveErrorMsg ? body.saveErrorMsg : SAVE_ERROR_MESSAGE_DEFAULT;
    yield put(onSaveErrorAction(saveErrorMsg));
  }
}

export function* changeToProjectPage(action) {
  console.log('changeToProjectPath', action);
  const newURL = paths.appPaths.project.getById(action.saveResponse.projectID);
  console.log('newUrl', newURL);
  browserHistory.push(newURL);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saveWatcher() {
  const doSaveWatcher = yield takeLatest(ON_SAVE_ACTION, getSaveResponse);
  const saveSuccessWatcher = yield takeLatest(SAVE_SUCCESS_ACTION, changeToProjectPage);
  yield take(LOCATION_CHANGE);
  yield [doSaveWatcher, saveSuccessWatcher].map((task) => cancel(task));
}

export function* fetchProjectData(action) {
  try {
    console.log('fetchProfileData', action);
    // Call our request helper (see 'utils/request')
    const project = yield call(request, paths.api.project.getById(action.projectId));
    yield put(makeFetchProjectSuccessAction({
      projectID: project.project_id,
      projectTitle: project.project_name,
      projectDescription: project.project_description,
      projectOwner: project.project_owner,
    }));
  } catch (err) {
    console.log('fetchProfileData err', err);
    // yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export function* fetchWatcher() {
  const watcher = yield takeLatest(FETCH_PROJECT_ACTION, fetchProjectData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  saveWatcher,
  fetchWatcher,
];
