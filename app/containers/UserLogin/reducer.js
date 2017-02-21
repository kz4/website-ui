/*
 *
 * UserLogin reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME_ACTION,
  CHANGE_PASSWORD_ACTION,
  CHANGE_REMEMBER_ACTION,
  DO_LOGIN_ACTION,
  LOGIN_ERROR_ACTION,
  LOGIN_ERROR_MSG_DEFAULT,
} from './constants';

const initialState = fromJS({
  username: '',
  password: '',
  remember: false,
  loginError: false,
  // loginErrorMsg should be const from server to tell us which message in messages.js to display
  loginErrorMsg: LOGIN_ERROR_MSG_DEFAULT,
});
function userLoginReducer(state = initialState, action) {
  console.log('pre userLoginReducer', state.toJS(), 'action', action);
  switch (action.type) {
    case CHANGE_USERNAME_ACTION:
      return state.set('username', action.username);
    case CHANGE_PASSWORD_ACTION:
      return state.set('password', action.password);
    case CHANGE_REMEMBER_ACTION:
      return state.set('remember', action.remember);
    case DO_LOGIN_ACTION:
      return state.set('loginError', false);
    case LOGIN_ERROR_ACTION: {
      const loginErrorMsg = action.loginErrorMsg ? action.loginErrorMsg : LOGIN_ERROR_MSG_DEFAULT;
      return state.set('loginError', true).set('loginErrorMsg', loginErrorMsg);
    }
    default:
      return state;
  }
}

export default userLoginReducer;
