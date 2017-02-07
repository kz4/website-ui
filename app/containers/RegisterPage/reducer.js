/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import userRegisterReducer from 'containers/UserRegister/reducer';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

const allReducers = combineReducers({
  registerPage: registerReducer,
  userRegister: userRegisterReducer,
});

export default allReducers;
