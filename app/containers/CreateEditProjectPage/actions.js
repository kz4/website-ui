/*
 *
 * CreateEditProjectPage actions
 *
 */

import {
  DEFAULT_ACTION,
  META_DATA_UPDATED,
  ON_SAVE_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function makeMetaDataUpdatedAction(metaData) {
  return {
    type: META_DATA_UPDATED,
    metaData,
  };
}


export function onSaveAction(project){
  return {
    type: ON_SAVE_ACTION,
    project,
  };
}
