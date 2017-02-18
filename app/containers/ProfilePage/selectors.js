import { createSelector } from 'reselect';

const makeSelectProfilePage = () => (state) => state.get('profile');

/**
 * Default selector used by ProfilePage
 */

const makeSelectProfileData = () => createSelector(
  makeSelectProfilePage(),
  (substate) => ({ name: substate.get('name'), email: substate.get('email'), phone: substate.get('phone') })
);

export {
  makeSelectProfilePage,
  makeSelectProfileData,
};
