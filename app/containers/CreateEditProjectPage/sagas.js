import { take, call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { paths } from 'config';
import { browserHistory } from 'react-router';
import request from 'utils/request';
import { makeSelectSaveProject } from './selectors';
import { ON_SAVE_ACTION, SAVE_SUCCESS_ACTION, SAVE_ERROR_MESSAGE_DEFAULT } from './constants';
import { onSaveSuccessAction, onSaveErrorAction } from './actions';
/**
 * Github repos request/response handler
 */
export function* getSaveResponse() {

  const saveProject = yield select(makeSelectSaveProject());
  const requestURL = paths.api.project.updateById(saveProject.get('projectID'))
  console.log("THE URL IS ",requestURL);

  try {

    const saveResponse = yield call(request, requestURL, {
      method: 'POST',
      body: {
        project_id: saveProject.get('projectID'),
        projectTitle: saveProject.get('projectTitle'),
        metaData: saveProject.get('metaData'),
        image: saveProject.get('image'),
        projectDescription: saveProject.get('projectDescription'),
      },
    });

    console.log("the response is ",saveResponse);
    const changedResponse = {
      projectID: saveResponse['project_id'],
      projectTitle: saveResponse['project_name'],
      projectDescription: saveResponse['project_description'],
      projectOwner: saveResponse['project_owner'],

      //using SaveProject data since back end has no metadata and image at the moment//
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
  console.log("changeToProjectPath",action);

  browserHistory.push(paths.appPaths.project.getById(action.saveResponse.projectID));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* save() {
  const doSaveWatcher = yield takeLatest(ON_SAVE_ACTION, getSaveResponse);
  const saveSuccessWatcher = yield takeLatest(SAVE_SUCCESS_ACTION, changeToProjectPage);
  yield take(LOCATION_CHANGE);
  yield [doSaveWatcher, saveSuccessWatcher].map((task) => cancel(task));
}

export default [
  save,
];
