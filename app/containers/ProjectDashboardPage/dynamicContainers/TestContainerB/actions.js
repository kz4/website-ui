/*
 *
 * TestContainerB actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction({ frontendId }) {
  return {
    type: DEFAULT_ACTION,
    frontendId,
  };
}
