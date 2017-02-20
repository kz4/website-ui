import { createSelector } from 'reselect';

/**
 * Direct selector to the projectList state domain
 */
// const selectProjectListDomain = () => (state) => { console.log('selectProjListDom', state.toJS()); return state.get('projectsMaster');};
const selectProjectListDomain = () => (state) => state.get('projectsMaster');
/**
 * Other specific selectors
 */
const makeSelectStore = () => (state) => state;

/**
 * Default selector used by ProjectList
 */

const makeSelectProjectList = () => createSelector(
  selectProjectListDomain(),
  (substate) => substate.get('projects')
);

export default makeSelectProjectList;
export {
  makeSelectProjectList,
  selectProjectListDomain,
  makeSelectStore,
};
