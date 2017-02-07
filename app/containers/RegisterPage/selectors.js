import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectRegisterDomain = () => (state) => state.get('login');
/**
 * Other specific selectors
 */


/**
 * Default selector used by Register
 */

const makeSelectRegister = () => createSelector(
  selectRegisterDomain(),
  (substate) => console.log('makeSelectRegister', substate)
);

export default makeSelectRegister;
export {
  selectRegisterDomain,
};
