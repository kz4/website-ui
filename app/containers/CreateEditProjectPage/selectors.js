import { createSelector } from 'reselect';

/**
 * Direct selector to the createEditProjectPage state domain
 */
const selectCreateEditProjectPageDomain = () => (state) => state.get('createEditProjectPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateEditProjectPage
 */

export const makeSelectMetaData = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => substate.get('metaData').toJS()
);

