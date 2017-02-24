/*
 *
 * CreateEditProjectPage actions
 *
 */

import {
  DEFAULT_ACTION,
  META_DATA_UPDATED,
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
