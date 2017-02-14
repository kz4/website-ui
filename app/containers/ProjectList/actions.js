/*
 *
 * ProjectList actions
 *
 */

import {
  // DEFAULT_ACTION,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
} from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }

export function makeGetProjectsAction(){
  return{
    type: GET_PROJECTS,
  };
}

export function makeGetProjectsSuccessAction(projects){
  return{
    type: GET_PROJECTS_SUCCESS,
    projects,
  };
}
