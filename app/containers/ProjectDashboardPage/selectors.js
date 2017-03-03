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

export const makeSelectContainers = () => createSelector(
  makeSelectProjectDashboardPageDomain(),
  (substate) => substate.get('containers').toJS()
);

