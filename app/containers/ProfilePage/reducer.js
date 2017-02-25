/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PROFILE_FORM_UPDATED_ACTION,
  PROFILE_DATA_LOADED_ACTION,
  DO_UPDATE_ACTION,
  UPDATE_ERROR_ACTION,
  UPDATE_ERROR_MSG_DEFAULT,
} from './constants';

const initialState = fromJS({
  name: '',
  email: '',
  phone: '',
  UpdateError: false,
  UpdateErrorMsg: UPDATE_ERROR_MSG_DEFAULT,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_FORM_UPDATED_ACTION: {
      const newState = state.set(action.storeName, action.value);
      console.log('profilePage newState', newState.toJS());
      return newState;
    }
    case PROFILE_DATA_LOADED_ACTION: {
      const profileData = action.profileData;
      const newState = state.merge(profileData);
      console.log('profilePage loaded newState', newState.toJS());
      return newState;
    }
    case DO_UPDATE_ACTION:
      return state.set('UpdateError', false);

    case UPDATE_ERROR_ACTION: {
      const UpdateErrorMsg = action.UpdateErrorMsg ? action.UpdateErrorMsg : UPDATE_ERROR_MSG_DEFAULT;
      return state.set('UpdateError', true).set('UpdateErrorMsg', UpdateErrorMsg);
    }
    default: {
      return state;
    }
  }
}

export default profilePageReducer;
