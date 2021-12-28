import { all } from "redux-saga/effects";
import {watcherUserSaga} from "./Handler/GetRequest";

export default function* RootSaga() {
    yield all([...watcherUserSaga]);
  }