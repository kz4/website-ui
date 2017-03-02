import { createSelector } from 'reselect';

/**
 * Direct selector to the cats state domain
 */
const selectCatsDomain = () => (state) => state.get('cats');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Cats
 */

const makeSelectCats = () => createSelector(
  selectCatsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCats;
export {
  selectCatsDomain,
};
