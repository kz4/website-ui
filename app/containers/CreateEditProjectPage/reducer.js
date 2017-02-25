/*
 *
 * CreateEditProjectPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  META_DATA_UPDATED,
  ON_SAVE_ACTION,
} from './constants';

const initialState = fromJS({
  metaData: {
    key1: 'value1',
    key2: 'value2',
  },
});

function createEditProjectPageReducer(state = initialState, action) {
  switch (action.type) {
    case META_DATA_UPDATED:
      return state.set('metaData', action.metaData);
    case ON_SAVE_ACTION:
      return state.set('project', action.project);
    default:
      return state;
  }
}

export default createEditProjectPageReducer;
