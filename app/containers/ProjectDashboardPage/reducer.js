/*
 *
 * ProjectDashboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_NEW_CONTAINER_ACTION,
} from './constants';

const initialState = fromJS({
  containers: [],
});

function projectDashboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_CONTAINER_ACTION: {
      const oldContainers = state.get('containers');
      let newContainer = fromJS(action.container);
      newContainer = newContainer.set('locationInStore', oldContainers.size);
      const newContainers = oldContainers.push(newContainer);
      return state.set('containers', newContainers);
    }
    default:
      return state;
  }
}

export default projectDashboardPageReducer;
