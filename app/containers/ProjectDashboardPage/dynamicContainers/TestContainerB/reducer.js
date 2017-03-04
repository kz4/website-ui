/*
 *
 * TestContainerB reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';
import {
  ADD_NEW_CONTAINER_ACTION,
} from '../../constants';
const initialState = fromJS({
});

function testContainerBReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION: {
      return state;
    }
    case ADD_NEW_CONTAINER_ACTION: {
      const container = action.container;
      if (container.type === 'TestContainerB') {
        const newContainer = fromJS(action.container);
        return state.set(container.frontendId, newContainer);
      }
      return state;
    }
    default:
      return state;
  }
}

export default testContainerBReducer;
