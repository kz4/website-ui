'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _constants = require('./constants');

/*
 *
 * CreateEditProjectPage reducer
 *
 */

var initialState = (0, _immutable.fromJS)({
  metaData: {
    key1: 'value1',
    key2: 'value2'
  },
  image: 'http://something.com',
  projectTitle: 'Lorem Ipsum',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
});

function createEditProjectPageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.META_DATA_UPDATED:
      return state.set('metaData', action.metaData);
    case _constants.ON_SAVE_ACTION:
      return state.set('project', action.project);
    default:
      return state;
  }
}

exports.default = createEditProjectPageReducer;

//# sourceMappingURL=reducer-compiled.js.map