import { createSelector } from 'reselect';

/**
 * Direct selector to the testContainerB state domain
 */
const makeSelectTestContainerBDomain =
  (frontendId) => (state) =>
    state
      .get('projectDashboardPageContainers')
      .get('testContainerB')
      .get(frontendId);

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestContainerB
 */

const makeSelectTestContainerB = (frontendId) => createSelector(
  makeSelectTestContainerBDomain(frontendId),
  (substate) => substate.toJS()
);

export default makeSelectTestContainerB;
export {
  makeSelectTestContainerBDomain,
};
