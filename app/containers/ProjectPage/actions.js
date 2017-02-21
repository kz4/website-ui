/*
 *
 * UserConsole actions
 *
 */

import {
  DEFAULT_ACTION,
  EDIT_TEXT_AREA,
  IS_EDITABLE_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function editTextAreaAction(field, value) {
  return {
    type: EDIT_TEXT_AREA,
    field,
    value
  };
}

export function toggleIsEditbaleAction() {
  return {
    type: IS_EDITABLE_ACTION,
  };
}
