import { all, fork } from "redux-saga/effects";
import { watchGetNews } from "./newsAPISaga";

export default function* rootSaga() {
  yield all([
    fork(watchGetNews)
  ])
}