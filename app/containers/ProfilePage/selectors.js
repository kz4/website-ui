import { createSelector } from 'reselect';

/**
 * Direct selector to the profilePage state domain
 */
const makeSelectProfilePageDomain = () => (state) => state.get('profilePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfilePage
 */

const makeSelectProfilePage = () => createSelector(
  makeSelectProfilePageDomain(),
  (substate) => substate ? substate.toJS() : ''
);

export default makeSelectProfilePage;
export {
  makeSelectProfilePageDomain,
};
