'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

var LOAD_REPOS = exports.LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
var LOAD_REPOS_SUCCESS = exports.LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
var LOAD_REPOS_ERROR = exports.LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
var DEFAULT_LOCALE = exports.DEFAULT_LOCALE = 'en';

//# sourceMappingURL=constants-compiled.js.map