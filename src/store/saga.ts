import { all } from '@redux-saga/core/effects';
import trendingSaga from './trending/saga';
import userSaga from './user/saga';

function* saga() {
  yield all([trendingSaga(), userSaga()]);
}

export default saga;
