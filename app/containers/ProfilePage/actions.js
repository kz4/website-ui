/*
 *
 * ProfilePage actions
 *
 */

import {
  PROFILE_FORM_UPDATED,
} from './constants';

export function profileFormUpdated(storeName, value) {
  return {
    type: PROFILE_FORM_UPDATED,
    storeName,
    value,
  };
}
