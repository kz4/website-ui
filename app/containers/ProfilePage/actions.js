/*
 *
 * ProfilePage actions
 *
 */

import {
  PROFILE_FORM_UPDATED_ACTION,
  FETCH_PROFILE_DATA_ACTION,
  PROFILE_DATA_LOADED_ACTION,
  DO_UPDATE_ACTION,
  UPDATE_SUCCESS_ACTION,
  UPDATE_ERROR_ACTION,
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

export function makeDoUpdateAction() {
  return {
    type: DO_UPDATE_ACTION,
  };
}

export function makeUpdateSuccessAction(UpdateResponse) {
  return {
    type: UPDATE_SUCCESS_ACTION,
    UpdateResponse,
  };
}

export function makeUpdateErrorAction(UpdateErrorMsg) {
  return {
    type: UPDATE_ERROR_ACTION,
    UpdateErrorMsg,
  };
}
