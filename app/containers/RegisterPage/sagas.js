// import { take, call, put, select } from 'redux-saga/effects';
import userRegisterSagas from 'containers/UserRegister/sagas';

// All sagas to be loaded
export default [
  ...userRegisterSagas,
];
