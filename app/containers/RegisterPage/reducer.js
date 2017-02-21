/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import userRegisterReducer from 'containers/UserRegister/reducer';

const initialState = fromJS({});

export function registerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const allReducers = combineReducers({
  registerPage: registerReducer,
  userRegister: userRegisterReducer,
});

export default allReducers;
