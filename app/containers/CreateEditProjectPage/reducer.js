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
} from './constants';

const initialState = fromJS({
  projectID: '',
  metaData: {
    key1: 'value1',
    key2: 'value2',
  },
  image: 'http://something.com',
  projectTitle: 'Lorem Ipsum',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  projectOwner: '',
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
      const newState = state.merge(action.project)
      console.log('newState', newState);
      return newState;
    }
    case SAVE_ERROR_ACTION: {
      const saveErrorMsg = action.saveErrorMsg ? action.saveErrorMsg : SAVE_ERROR_MESSAGE_DEFAULT;
      return state.set('saveError', true).set('saveErrorMsg', saveErrorMsg);
    }
    default:
      return state;
  }
}

export default createEditProjectPageReducer;
