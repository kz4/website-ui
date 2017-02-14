import { createSelector } from 'reselect';

/**
 * Direct selector to the niviHelloWorld state domain
 */
const makeSelectNiviHelloWorldDomain = () => (state) => state.get('niviHelloWorld');

/**
 * Other specific selectors
 */
const makeSelectStore = () => (state) => state;

/**
 * Default selector used by NiviHelloWorld
 */
const makeSelectIsEditable = () => createSelector(
  makeSelectNiviHelloWorldDomain(),
  (substate) => substate.get('isEditable')
);

const makeSelectExampleValue = () => createSelector(
  makeSelectNiviHelloWorldDomain(),
  (substate) => substate.get('exampleValue')
);

export {
  makeSelectIsEditable,
  makeSelectNiviHelloWorldDomain,
  makeSelectExampleValue,
  makeSelectStore,
};
