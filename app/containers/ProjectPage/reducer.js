/*
 *
 * ProjectPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_PROJECT_SUCCESS_ACTION,
} from './constants';

const initialState = fromJS({
  title: 'project title',
  description: 'project Description',
  metadata: {
    key1: 'value1',
    key2: 'value2',
    key3: {
      key4: 'nested1Value1',
      key5: 'nested1Value2',
      key6: {
        key7: 'nested2Value1'
      }
    }
  },
  dataset: {
  },
});

function projectPageReducer(state = initialState, action) {
  console.log('reducer called', state.toJS(), action);
  switch (action.type) {
    case FETCH_PROJECT_SUCCESS_ACTION:
      const newState = state.merge(action.project);
      console.log('profilePage newState', newState.toJS());
      return newState;
    default:
      return state;
  }
}

export default projectPageReducer;
