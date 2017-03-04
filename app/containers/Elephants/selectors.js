import { createSelector } from 'reselect';

/**
 * Direct selector to the dogs state domain
 */
const selectDogsDomain = () => (state) => state.get('elephants');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Elephants
 */

const makeSelectElephants = () => createSelector(
    selectDogsDomain(),
    (substate) => substate.toJS()
);

export default makeSelectElephants;
export {
    selectDogsDomain,
};
