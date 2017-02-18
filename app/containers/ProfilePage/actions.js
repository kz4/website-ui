/*
 *
 * ProfilePage actions
 *
 */

import {
  PROFILE_FORM_UPDATED_ACTION,
  FETCH_PROFILE_DATA_ACTION,
  PROFILE_DATA_LOADED_ACTION,
} from './constants';

export function makeProfileFormUpdatedAction(storeName, value) {
  return {
    type: PROFILE_FORM_UPDATED_ACTION,
    storeName,
    value,
  };
}

export function makeFetchProfileDataAction() {
  return {
    type: FETCH_PROFILE_DATA_ACTION,
  };
}

export function makeProfileDataLoadedAction(profileData) {
  return {
    type: PROFILE_DATA_LOADED_ACTION,
    profileData,
  };
}
