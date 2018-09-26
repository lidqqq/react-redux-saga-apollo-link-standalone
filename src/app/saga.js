import { delay } from "redux-saga";
import { all, call, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import {
  actionTypes,
  failure,
  loadDataSuccess,
  gqlSuccess,
  tickClock
} from "./actions";
import gql from "./lib/gql";
const { query, operation } = gql;

es6promise.polyfill();

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* loadDataGql() {
  try {
    const res = yield call(query(operation.books));
    yield put(gqlSuccess(res.data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.GQL, loadDataGql)
  ]);
}

export default rootSaga;
