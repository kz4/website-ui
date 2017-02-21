import { createSelector } from 'reselect';

/**
 * Direct selector to the userConsole state domain
 */
const selectProjectPageDomain = () => (state) =>{ console.log('state', state.toJS()); return state.get('projectPage').toJS(); };

/**
 * Other specific selectors
 */


// /**
//  * Default selector used by UserDashboard
//  */
//
// const makeSelectUserConsole = () => createSelector(
//   selectUserConsoleDomain(),
//   (substate) => substate ? substate.toJS() : {}
// );
//
// export default makeSelectUserConsole;
export {
  selectProjectPageDomain,
};
