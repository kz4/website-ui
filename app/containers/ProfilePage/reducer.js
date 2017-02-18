/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PROFILE_FORM_UPDATED_ACTION,
  PROFILE_DATA_LOADED_ACTION,
} from './constants';

const initialState = fromJS({
  name: '',
  email: '',
  phone: '',
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
    default: {
      return state;
    }
  }
}

export default profilePageReducer;
