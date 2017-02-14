/*
 *
 * ProjectList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PROJECTS_SUCCESS,
} from './constants';

const initialState = fromJS({});

function projectListReducer(state = initialState, action) {
  console.log('projectListReducer', state.toJS());
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      const newState = state.set(projects, action.projects);
      console.log('Get Projects Success reducer changed state to:', newState);
      return newState;
    default:
      return state;
  }
}

export default projectListReducer;
