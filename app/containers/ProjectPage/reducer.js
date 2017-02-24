/*
 *
 * ProjectPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  title: 'project title',
  description: 'project title',
  metadata: {
    key1: 'value1',
    key2: 'value2',
  },
  dataset: {
  },
});

function projectPageReducer(state = initialState, action) {
  console.log('reducer called', state.toJS(), action);
  switch (action.type) {
    default:
      return state;
  }
}

export default projectPageReducer;
