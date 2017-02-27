
import {
  makeDoUpdateAction,
  makeUpdateSuccessAction,
} from '../actions';
import {
  DO_UPDATE_ACTION,
  UPDATE_SUCCESS_ACTION,
} from '../constants';

describe('on Do Update', () => {
  it('has a type of DO_UPDATE', () => {
    const expected = {
      type: DO_UPDATE_ACTION,
    };
    expect(makeDoUpdateAction()).toEqual(expected);
  });
});

describe('on Update Success', () => {
  it('has a type of UPDATE_SUCCESS and updateResponse', () => {
    const expectedUpdateResponse = 'bar';
    const expected = {
      type: UPDATE_SUCCESS_ACTION,
      UpdateResponse: expectedUpdateResponse,
    };
    expect(makeUpdateSuccessAction(expectedUpdateResponse)).toEqual(expected);
  });
});
