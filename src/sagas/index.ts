import { all, fork } from "redux-saga/effects";
import { watchGetHeadlines, watchSearchNews } from "./newsAPISaga";

export default function* rootSaga() {
  yield all([
    fork(watchGetHeadlines),
    fork(watchSearchNews)
  ])
}