/*
 *
 * NiviHelloWorld actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_IS_EDITABLE_ACTION,
  CHANGE_EXAMPLE_VALUE_ACTION,
  LOAD_HELLO_WORLD_DATA_ACTION,
  LOAD_SUCCESS_HELLO_WORLD_DATA_ACTION
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

export function makeLoadHelloWorldDataAction() {
  return {
    type: LOAD_HELLO_WORLD_DATA_ACTION,
  };
}

export function makeLoadSuccessHelloWorldDataAction(result) {
  return {
    type: LOAD_SUCCESS_HELLO_WORLD_DATA_ACTION,
    result,
  };
}
