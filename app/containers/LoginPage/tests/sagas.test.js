/**
 * Test  sagas
 */

import userLoginSagas from 'containers/UserLogin/sagas';
import sagas, { defaultSaga } from '../sagas';

describe('defaultSaga Saga', () => {
  it('Expect to have unit tests specified', () => {
    expect(sagas).toEqual([defaultSaga, ...userLoginSagas]);
  });
});
