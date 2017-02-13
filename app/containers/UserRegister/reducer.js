/*
 *
 * UserLogin reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_CONFIRM_REMEMBER,
} from './constants';

const initialState = fromJS({});
function userLoginReducer(state = initialState, action) {
  console.log('userLoginReducer', state.toJS());
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.username);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case CHANGE_CONFIRM_REMEMBER:
      return state.set('remember', action.remember);
    default:
      return state;
  }
}

export default userLoginReducer;
