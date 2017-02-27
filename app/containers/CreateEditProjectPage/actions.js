/*
 *
 * CreateEditProjectPage actions
 *
 */

import {
  DEFAULT_ACTION,
  META_DATA_UPDATED,
  ON_SAVE_ACTION,
  SAVE_SUCCESS_ACTION,
  SAVE_ERROR_ACTION,
  FETCH_PROJECT_ACTION,
  FETCH_PROJECT_SUCCESS_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function makeMetaDataUpdatedAction(metaData) {
  return {
    type: META_DATA_UPDATED,
    metaData,
  };
}


export function onSaveAction() {
  return {
    type: ON_SAVE_ACTION,
  };
}

export function onSaveSuccessAction(saveResponse) {
  return {
    type: SAVE_SUCCESS_ACTION,
    saveResponse,
  };
}

export function onSaveErrorAction(saveErrorMsg) {
  return {
    type: SAVE_ERROR_ACTION,
    saveErrorMsg,
  };
}

export function makeFetchProjectAction(projectId) {
  return {
    type: FETCH_PROJECT_ACTION,
    projectId,
  };
}

export function makeFetchProjectSuccessAction(project) {
  return {
    type: FETCH_PROJECT_SUCCESS_ACTION,
    project,
  };
}
