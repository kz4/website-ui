import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the userRegister state domain
 */
const selectUserRegisterDomain = () => (state) => {
  console.log('selectUserRegister', state.toJS());
  return state.get('home').get('userRegister');
};

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserRegister
 */

const makeSelectRegisterCredentials = () => createSelector(
  selectUserRegisterDomain(),
  (substate) => {
    const registerCredentials = {
      username: '',
      password: '',
    };
    if (substate) {
      registerCredentials.username = substate.get('username') || '';
      registerCredentials.password = substate.get('password') || '';
    }
    return fromJS(registerCredentials);
  }
);

// export default makeSelectUserRegister;
export {
  makeSelectRegisterCredentials,
  selectUserRegisterDomain,
};
