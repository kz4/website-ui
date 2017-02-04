import { createSelector } from 'reselect';

/**
 * Direct selector to the userLogin state domain
 */
const selectUserLoginDomain = () => (state) => {
  console.log('selectUserLogin', state);
  return state.get('userLogin');
};

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserLogin
 */

const makeSelectUserLogin = () => createSelector(
  selectUserLoginDomain(),
  (substate) => console.log('UserLogin', substate)
);

export default makeSelectUserLogin;
export {
  selectUserLoginDomain,
};
