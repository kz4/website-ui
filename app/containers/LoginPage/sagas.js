// import { take, call, put, select } from 'redux-saga/effects';
import userLoginSagas from 'containers/UserLogin/sagas';

// All sagas to be loaded
export default [
  ...userLoginSagas,
];
