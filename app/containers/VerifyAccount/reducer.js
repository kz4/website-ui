/*
 *
 * VerifyAccount reducer
 *
 */

import { fromJS } from 'immutable';
import {
  VERIFY_ERROR_MSG_DEFAULT,
  CHANGE_VERIFY_CODE_ACTION,
  DO_VERIFY_ACCOUNT_ACTION,
  VERIFY_ACCOUNT_ERROR_ACTION,
  CHANGE_USERNAME_ACTION,
} from './constants';

const initialState = fromJS({
  username: '',
  verifyCode: '',
  verifyError: false,
  // verifyErrorMsg should be const from server to tell us which message in messages.js to display
  verifyErrorMsg: VERIFY_ERROR_MSG_DEFAULT,
});

function verifyAccountReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VERIFY_CODE_ACTION:
      return state.set('verifyCode', action.verifyCode);
    case CHANGE_USERNAME_ACTION:
      return state.set('username', action.username);
    case DO_VERIFY_ACCOUNT_ACTION:
      return state.set('verifyError', false);
    case VERIFY_ACCOUNT_ERROR_ACTION: {
      const verifyErrorMsg = action.verifyErrorMsg ? action.verifyErrorMsg : VERIFY_ERROR_MSG_DEFAULT;
      return state.set('verifyError', true).set('verifyErrorMsg', verifyErrorMsg);
    }
    default:
      return state;
  }
}

export default verifyAccountReducer;
