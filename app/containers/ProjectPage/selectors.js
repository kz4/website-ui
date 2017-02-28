import { createSelector } from 'reselect';

// {
//   home: {},
//   project: {
//     title: 'foo'
//   }
// }

/**
 * Direct selector to the projectPage state domain
 */
const selectProjectPageDomain = () => (store) => store.get('project');

export const makeSelectProjectPageTitle = () => createSelector(
  selectProjectPageDomain(),
  (substore) => substore.get('title')
);

export const makeSelectProjectPageDescription = () => createSelector(
  selectProjectPageDomain(),
  (substore) => substore.get('description')
);

export const makeSelectProjectPageId = () => createSelector(
  selectProjectPageDomain(),
  (substore) => substore.get('projectId')
);

export const makeSelectProjectPageMetaData = () => createSelector(
  selectProjectPageDomain(),
  (substore) => substore.get('metadata').toJS()
);
