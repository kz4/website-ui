import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the userLogin state domain
 */
const selectUserLoginDomain = () => (state) => {
  console.log('selectUserLogin', state.toJS());
  return state.get('home').get('userLogin');
};

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserLogin
 */

const makeSelectLoginCredentials = () => createSelector(
  selectUserLoginDomain(),
  (substate) => {
    const loginCredentials = {
      username: '',
      password: '',
    };
    if (substate) {
      loginCredentials.username = substate.get('username') || '';
      loginCredentials.password = substate.get('password') || '';
    }
    return fromJS(loginCredentials);
  }
);

// export default makeSelectUserLogin;
export {
  makeSelectLoginCredentials,
  selectUserLoginDomain,
};
