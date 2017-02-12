/*
 *
 * NiviHelloWorld reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TOGGLE_IS_EDITABLE_ACTION,
} from './constants';

const isEditableField = 'isEditable';
const initialStateJS = {};
initialStateJS[isEditableField] = false;
const initialState = fromJS(initialStateJS);

function niviHelloWorldReducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case TOGGLE_IS_EDITABLE_ACTION:
      const newState = state.set(isEditableField, !state.get(isEditableField));
      console.log('newState', newState.toJS());
      return newState;
    default:
      return state;
  }
}

export default niviHelloWorldReducer;
