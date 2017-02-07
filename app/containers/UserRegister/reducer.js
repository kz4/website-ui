/*
 *
 * UserRegister reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from './constants';

const initialState = fromJS({});
function userRegisterReducer(state = initialState, action) {
  console.log('userRegisterReducer', state.toJS());
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.username);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    default:
      return state;
  }
}

export default userRegisterReducer;
