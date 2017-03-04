/*
 *
 * CreateEditProjectPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  META_DATA_UPDATED,
  ON_SAVE_ACTION,
  SAVE_ERROR_ACTION,
  SAVE_ERROR_MESSAGE_DEFAULT,
  FETCH_PROJECT_SUCCESS_ACTION,
  SIMPLE_INPUT_CHANGE_ACTION,
} from './constants';

const initialState = fromJS({
  projectID: '',
  metaData: {
    key1: '',
    key2: '',
  },
  image: '',
  projectTitle: '',
  projectDescription: '',
  projectOwner: 'velo',
  saveError: false,
  saveErrorMsg: SAVE_ERROR_MESSAGE_DEFAULT,
});

function createEditProjectPageReducer(state = initialState, action) {
  switch (action.type) {
    case META_DATA_UPDATED:
      return state.set('metaData', action.metaData);
    case ON_SAVE_ACTION:
      return state.set('saveError', false);
    case FETCH_PROJECT_SUCCESS_ACTION: {
      const newState = state.merge(action.project);
      console.log('newState', newState);
      return newState;
    }
    case SIMPLE_INPUT_CHANGE_ACTION:
      return state.set(action.inputName, action.inputValue);
    case SAVE_ERROR_ACTION: {
      const saveErrorMsg = action.saveErrorMsg ? action.saveErrorMsg : SAVE_ERROR_MESSAGE_DEFAULT;
      return state.set('saveError', true).set('saveErrorMsg', saveErrorMsg);
    }
    default:
      return state;
  }
}

export default createEditProjectPageReducer;
