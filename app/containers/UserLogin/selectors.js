import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the userLogin state domain
 */
const makeSelectUserLoginSubstate = () => (state) => {
  return state.get('login').get('userLogin');
};

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserLogin
 */

const makeSelectLoginCredentials = () => createSelector(
  makeSelectUserLoginSubstate(),
  (substate) => {
    const loginCredentials = {};
    loginCredentials.username = substate.get('username');
    loginCredentials.password = substate.get('password');
    loginCredentials.remember = substate.get('remember');
    return fromJS(loginCredentials);
  }
);

const makeSelectLoginError = () => createSelector(
  makeSelectUserLoginSubstate(),
  (substate) => substate.get('loginError')
);

const makeSelectLoginErrorMsg = () => createSelector(
  makeSelectUserLoginSubstate(),
  (substate) => substate.get('loginErrorMsg')
);

// export default makeSelectUserLogin;
export {
  makeSelectLoginCredentials,
  makeSelectUserLoginSubstate,
  makeSelectLoginError,
  makeSelectLoginErrorMsg,
};
