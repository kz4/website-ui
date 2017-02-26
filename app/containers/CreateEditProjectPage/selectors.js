import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
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

export const makeSelectImage = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => substate.get('image')
);


export const makeProjectTitle = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => substate.get('projectTitle')
);


export const makeProjectdescription = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => substate.get('projectDescription')
);

export const makeSelectSaveProject = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => {
    const saveProject = {};
    saveProject.projectID = substate.get('projectID');
    saveProject.projectTitle = substate.get('projectTitle');
    saveProject.metaData = substate.get('metaData');
    saveProject.image = substate.get('image');
    saveProject.projectDescription = substate.get('projectDescription');
    return fromJS(saveProject);
  }
);

export const makeSelectSaveError = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => substate.get('saveError')
);

export const makeSelectSaveErrorMsg = () => createSelector(
  selectCreateEditProjectPageDomain(),
  (substate) => substate.get('saveErrorMsg')
);


