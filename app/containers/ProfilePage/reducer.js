/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PROFILE_FORM_UPDATED,
} from './constants';

const initialState = fromJS({});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_FORM_UPDATED: {
      // TODO Should this be state.profile[action.formElement] = value (but immutable style)
      const newState = state.set(action.storeName, action.value);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default profilePageReducer;
