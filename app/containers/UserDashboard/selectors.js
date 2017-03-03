import { createSelector } from 'reselect';

/**
 * Direct selector to the userConsole state domain
 */
const selectUserConsoleDomain = () => (state) => state.get('userConsole');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserDashboard
 */

const makeSelectUserConsole = () => createSelector(
  selectUserConsoleDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUserConsole;
export {
  selectUserConsoleDomain,
};
