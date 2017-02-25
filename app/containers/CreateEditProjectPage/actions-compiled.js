'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultAction = defaultAction;
exports.makeMetaDataUpdatedAction = makeMetaDataUpdatedAction;
exports.onSaveAction = onSaveAction;

var _constants = require('./constants');

function defaultAction() {
  return {
    type: _constants.DEFAULT_ACTION
  };
} /*
   *
   * CreateEditProjectPage actions
   *
   */

function makeMetaDataUpdatedAction(metaData) {
  return {
    type: _constants.META_DATA_UPDATED,
    metaData: metaData
  };
}

function onSaveAction(project) {
  return {
    type: _constants.ON_SAVE_ACTION,
    project: project
  };
}

//# sourceMappingURL=actions-compiled.js.map