import { all } from "redux-saga/effects";

import data from "./data/sagas";
import favorite from "./favorite/sagas";

export default function* rootSaga() {
  return yield all([data, favorite]);
}
