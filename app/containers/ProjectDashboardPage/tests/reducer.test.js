
import { fromJS } from 'immutable';
import projectDashboardPageReducer from '../reducer';

describe('projectDashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(projectDashboardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
