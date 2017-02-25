/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import userLoginReducer from 'containers/UserLogin/reducer';

const initialState = fromJS({});

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const allReducers = combineReducers({
  loginPage: loginReducer,
  userLogin: userLoginReducer,
});

export default allReducers;
