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
  containers: {},
});


function projectDashboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_CONTAINER_ACTION: {
      const newContainer = fromJS(action.container);
      const containerId = newContainer.get('frontendId');
      const oldContainers = state.get('containers');
      const newContainers = oldContainers.set(containerId, newContainer);
      return state.set('containers', newContainers);
    }
    default:
      return state;
  }
}

export default projectDashboardPageReducer;
