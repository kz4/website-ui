import { createSelector } from 'reselect';

/**
 * Direct selector to the testContainerA state domain
 */
const selectTestContainerADomain = () => (state) => state.get('testContainerA');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestContainerA
 */

const makeSelectTestContainerA = () => createSelector(
  selectTestContainerADomain(),
  (substate) => substate ? substate.toJS() : {}
);

export default makeSelectTestContainerA;
export {
  selectTestContainerADomain,
};
