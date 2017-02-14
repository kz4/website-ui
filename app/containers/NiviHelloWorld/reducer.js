/*
 *
 * NiviHelloWorld reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TOGGLE_IS_EDITABLE_ACTION,
  CHANGE_EXAMPLE_VALUE_ACTION,
} from './constants';

const IS_EDITABLE_FIELD = 'isEditable';
const EXAMPLE_VALUE_FIELD = 'exampleValue';
const initialStateJS = { exampleValue: 'exampleValueStarting' };
initialStateJS[IS_EDITABLE_FIELD] = false;
const initialState = fromJS(initialStateJS);

function niviHelloWorldReducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_EXAMPLE_VALUE_ACTION:
      const newState = state.set(EXAMPLE_VALUE_FIELD, action.exampleValue);
      console.log('CHANGE_EXAMPLE newState', newState.toJS());
      return newState;
    case TOGGLE_IS_EDITABLE_ACTION: {
      const isEditable = !state.get(IS_EDITABLE_FIELD);
      const newState = state.set(IS_EDITABLE_FIELD, isEditable);
      console.log('TOGGLE_IS_EDITABLE newState', newState.toJS());
      return newState;
    }
    default:
      return state;
  }
}

export default niviHelloWorldReducer;
