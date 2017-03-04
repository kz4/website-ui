/*
 *
 * ProjectList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PROJECTS_SUCCESS_ACTION,
} from './constants';

const initialState = fromJS({
  init: 'values',
  projects: [],
});

function projectListReducer(state = initialState, action) {
  console.log("Project list reducer");
  console.log(action.projects);
  switch (action.type) {
    case GET_PROJECTS_SUCCESS_ACTION:
      return state.set('projects', action.projects);
    default:
      return state;
  }
}

export default projectListReducer;
