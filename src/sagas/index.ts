import { all, fork } from "redux-saga/effects";
import watchPocketAPISaga from './pocketAPISaga';

export default function* rootSaga() {
  yield all([
    fork(watchPocketAPISaga)
  ])
}