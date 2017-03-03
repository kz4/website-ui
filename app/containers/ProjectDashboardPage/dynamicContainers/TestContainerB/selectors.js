import { createSelector } from 'reselect';

/**
 * Direct selector to the testContainerB state domain
 */
const selectTestContainerBDomain = () => (state) => state.get('testContainerB');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestContainerB
 */

const makeSelectTestContainerB = () => createSelector(
  selectTestContainerBDomain(),
  (substate) => substate ? substate.toJS() : {}
);

export default makeSelectTestContainerB;
export {
  selectTestContainerBDomain,
};
