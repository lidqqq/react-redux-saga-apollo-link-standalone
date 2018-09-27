import { delay } from "redux-saga";
import { all, call, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { actionTypes, failure, gqlSuccess, tickClock } from "./actions";
import gql from "./lib/gql";
const { query } = gql;

es6promise.polyfill();

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* queryGQL({ ope }) {
  try {
    const res = yield call(query(ope));
    yield put(gqlSuccess(res.data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([call(runClockSaga), takeLatest(actionTypes.GQL, queryGQL)]);
}

export default rootSaga;
