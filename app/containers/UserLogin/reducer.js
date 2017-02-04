/*
 *
 * UserLogin reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
} from './constants';

const initialState = fromJS({});

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.username);
    default:
      return state;
  }
}

export default userLoginReducer;
