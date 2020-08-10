import request from '../resources/config/Axios'
import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { CHECK_RATES } from './actionType'
import {
  checkRatesSuccess
} from './actions';

interface user {
  payload: {
    user: any;
    history: any;
  };
  type: string;
}

export const api = async (url:string) => {
  const { data } = await request.get(url)
  return data;
}

function* checkRatesSaga({ type: CHECK_RATES, payload: { base } }: any) {
  try {
    const response = yield call(api, `/?base=${base}`);
    yield put(checkRatesSuccess(response.rates))
  } catch (error) {
    console.log(error)
  }
}

export function* watchCheckRates() {
  yield takeEvery(CHECK_RATES, checkRatesSaga);
}

export function* ForkedAll() {
  yield all([
    fork(watchCheckRates),
  ]);
}


export default function* rootSaga() {
  yield all([ForkedAll()]);
}
