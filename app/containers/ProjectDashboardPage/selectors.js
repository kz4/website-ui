import { createSelector } from 'reselect';

/**
 * Direct selector to the projectDashboardPage state domain
 */
const makeSelectProjectDashboardPageDomain = () => (state) => state.get('projectDashboardPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProjectDashboardPage
 */

export const makeSelectProjectDashboardPage = () => createSelector(
  makeSelectProjectDashboardPageDomain(),
  (substate) => substate.toJS()
);

export const makeSelectContainersArray = () => createSelector(
  makeSelectProjectDashboardPageDomain(),
  (substate) => {
    const containersObj = substate.get('containers').toJS();
    return Object.keys(containersObj).map((key) => containersObj[key]);
  }
);

