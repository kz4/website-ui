/*
 *
 * UserRegister reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_VERIFY_PASSWORD,
  CHANGE_EMAIL,
} from './constants';

const initialState = fromJS({
  username: '',
  password: '',
  verifyPassword: '',
  email: '',
  firstName: 'Vy',
  lastName: 'N',
});
function userRegisterReducer(state = initialState, action) {
  // console.log('userRegisterReducer', state.toJS());
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.username);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case CHANGE_VERIFY_PASSWORD:
      return state.set('verifyPassword', action.verifyPassword);
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default userRegisterReducer;
