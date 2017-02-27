/*
 *
 * ProjectPage actions
 *
 */

import {
  FETCH_PROJECT_ACTION,
  FETCH_PROJECT_SUCCESS_ACTION,
} from './constants';

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
