/**
 * Test  sagas
 */

import userRegisterSagas from 'containers/UserRegister/sagas';
import sagas, { defaultSaga } from '../sagas';

describe('defaultSaga Saga', () => {
  it('Expect to have unit tests specified', () => {
    expect(sagas).toEqual([defaultSaga, ...userRegisterSagas]);
  });
});
