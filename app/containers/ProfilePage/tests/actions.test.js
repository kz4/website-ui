
import {
  profileFormUpdated,
} from '../actions';
import {
  DEFAULT_ACTION,
} from '../constants';

describe('ProfilePage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(profileFormUpdated()).toEqual(expected);
    });
  });
});
