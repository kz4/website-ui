/*
 *
 * NiviHelloWorld actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_IS_EDITABLE_ACTION,
  CHANGE_EXAMPLE_VALUE_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function makeToggleIsEditableAction() {
  return {
    type: TOGGLE_IS_EDITABLE_ACTION,
  };
}

export function makeChangeExampleAction(exampleValue) {
  return {
    type: CHANGE_EXAMPLE_VALUE_ACTION,
    exampleValue,
  };
}
