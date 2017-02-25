import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
const makeSelectProfilePage = () => (state) => state.get('profile');

/**
 * Default selector used by ProfilePage
 */

const makeSelectProfileData = () => createSelector(
  makeSelectProfilePage(),
  (substate) => ({ name: substate.get('name'), email: substate.get('email'), phone: substate.get('phone') })
);

const makeUpdateFields = () => createSelector(
  makeSelectProfilePage(),
  (substate) => {
    const ProfileFields = {};
    ProfileFields.name = substate.get('name');
    ProfileFields.email = substate.get('email');
    ProfileFields.phone = substate.get('phone');
    return fromJS(ProfileFields);
  }

)
export {
  makeSelectProfilePage,
  makeSelectProfileData,
  makeUpdateFields,
};
