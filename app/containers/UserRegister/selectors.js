import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the userRegister state domain
 */
const makeSelectUserRegisterSubstate = () => (state) => {
  console.log('selectUserRegister', state.toJS());
  return state.get('register').get('userRegister');
};

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserRegister
 */

const makeSelectRegisterCredentials = () => createSelector(
  makeSelectUserRegisterSubstate(),
  (substate) => {
    const registerCredentials = {
      username: '',
      password: '',
      verifyPassword: false,
      email: '',
    };
    registerCredentials.username = substate.get('username') || '';
    registerCredentials.password = substate.get('password') || '';
    registerCredentials.verifyPassword = substate.get('verifyPassword') || false;
    registerCredentials.email = substate.get('email') || '';
    return fromJS(registerCredentials);
  }
);

// export default makeSelectUserRegister;
export {
  makeSelectRegisterCredentials,
  makeSelectUserRegisterSubstate,
};
