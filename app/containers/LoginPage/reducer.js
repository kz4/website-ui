/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import userLoginReducer from 'containers/UserLogin/reducer';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

const allReducers = combineReducers({
  loginPage: loginReducer,
  userLogin: userLoginReducer,
});

export default allReducers;
