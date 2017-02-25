import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the verifyAccount state domain
 */
const selectVerifyAccountSubstate = () => (state) => state.get('verifyAccount');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VerifyAccount
 */
const makeSelectVerifyCredentials = () => createSelector(
  selectVerifyAccountSubstate(),
  (substate) => {
    const verifyCredentials = {};
    verifyCredentials.username = substate.get('username');
    verifyCredentials.password = substate.get('password');
    return fromJS(verifyCredentials);
  }
);


const makeSelectVerifyCode = () => createSelector(
  selectVerifyAccountSubstate(),
  (substate) => substate.get('verifyCode')
);

const makeSelectUsername = () => createSelector(
  selectVerifyAccountSubstate(),
  (substate) => substate.get('username')
);

const makeSelectVerifyError = () => createSelector(
  selectVerifyAccountSubstate(),
  (substate) => substate.get('verifyError')
);

const makeSelectVerifyErrorMsg = () => createSelector(
  selectVerifyAccountSubstate(),
  (substate) => substate.get('verifyErrorMsg')
);

export {
  makeSelectVerifyCredentials,
  selectVerifyAccountSubstate,
  makeSelectVerifyCode,
  makeSelectVerifyError,
  makeSelectVerifyErrorMsg,
  makeSelectUsername,
};
