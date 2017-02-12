/*
 *
 * NiviHelloWorld actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_IS_EDITABLE_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function toggleIsEditableAction() {
  return {
    type: TOGGLE_IS_EDITABLE_ACTION
  }
}
