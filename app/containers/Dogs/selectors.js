import { createSelector } from 'reselect';

/**
 * Direct selector to the dogs state domain
 */
const selectDogsDomain = () => (state) => state.get('dogs');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Dogs
 */

const makeSelectDogs = () => createSelector(
  selectDogsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDogs;
export {
  selectDogsDomain,
};
