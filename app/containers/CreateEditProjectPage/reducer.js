/*
 *
 * CreateEditProjectPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  META_DATA_UPDATED,
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
    default:
      return state;
  }
}

export default createEditProjectPageReducer;
