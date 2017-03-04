/*
 *
 * ProjectList actions
 *
 */

import {
  GET_PROJECTS_ACTION,
  GET_PROJECTS_SUCCESS_ACTION,
} from './constants';

export function makeGetProjectsAction() {
  return {
    type: GET_PROJECTS_ACTION,
  };
}

export function makeGetProjectsSuccessAction(projects) {
  console.log("makeGetProjectsSuccessAction");
  console.log(projects);
  return {
    type: GET_PROJECTS_SUCCESS_ACTION,
    projects,
  };
}
