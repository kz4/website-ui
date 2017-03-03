/*
 *
 * ProjectDashboardPage actions
 *
 */

import {
  NEW_CONTAINER_ACTION,
  ADD_NEW_CONTAINER_ACTION,
  FETCH_PROJECT_DASHBOARD_ACTION,
} from './constants';

export function makeNewContainerAction(container) {
  return {
    type: NEW_CONTAINER_ACTION,
    container,
  };
}

export function makeAddNewContainerAction(container) {
  return {
    type: ADD_NEW_CONTAINER_ACTION,
    container,
  };
}

export function makeFetchProjectDashboardAction() {
  return {
    type: FETCH_PROJECT_DASHBOARD_ACTION,
  };
}
