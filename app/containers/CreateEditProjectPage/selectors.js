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

const makeSelectCreateEditProjectPage = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCreateEditProjectPage;
export {
  selectCreateEditProjectPageDomain,
};
