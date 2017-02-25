'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeProjectdescription = exports.makeProjectTitle = exports.makeSelectImage = exports.makeSelectMetaData = undefined;

var _reselect = require('reselect');

/**
 * Direct selector to the createEditProjectPage state domain
 */
var selectCreateEditProjectPageDomain = function selectCreateEditProjectPageDomain() {
  return function (state) {
    return state.get('createEditProjectPage');
  };
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateEditProjectPage
 */

var makeSelectMetaData = exports.makeSelectMetaData = function makeSelectMetaData() {
  return (0, _reselect.createSelector)(selectCreateEditProjectPageDomain(), function (substate) {
    return substate.get('metaData').toJS();
  });
};

var makeSelectImage = exports.makeSelectImage = function makeSelectImage() {
  return (0, _reselect.createSelector)(selectCreateEditProjectPageDomain(), function (substate) {
    return substate.get('image');
  });
};

var makeProjectTitle = exports.makeProjectTitle = function makeProjectTitle() {
  return (0, _reselect.createSelector)(selectCreateEditProjectPageDomain(), function (substate) {
    return substate.get('projectTitle');
  });
};

var makeProjectdescription = exports.makeProjectdescription = function makeProjectdescription() {
  return (0, _reselect.createSelector)(selectCreateEditProjectPageDomain(), function (substate) {
    return substate.get('projectDescription');
  });
};

//# sourceMappingURL=selectors-compiled.js.map