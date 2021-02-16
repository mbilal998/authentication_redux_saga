import { call, put, takeEvery } from "redux-saga/effects";
import { saveData } from "./services/services_pg";
import { auth } from "../../firebase";
import { CURRENT_USER_SUCCESS, CURRENT_USER_FAILED, TOKEN_SET } from "../types";
import { push } from "connected-react-router";

function* signup(action: any) {
  try {
    const Data = yield call(saveData, action.payload);

    if (Data) {
      yield put({ type: CURRENT_USER_SUCCESS, currentUser: Data.data });
      yield put({ type: TOKEN_SET, token: Data.token });
    } else {
      yield put({ type: CURRENT_USER_FAILED, currentUser: {} });
      yield put({ type: TOKEN_SET, token: "" });
    }
    yield put({ type: "SIGNUP_SUCCESS", signup_value: Data });
    yield put(push("/"));
  } catch (e) {
    yield put({ type: "SIGNUP_FAILED", message_value: e.message });
  }
}

function* signupSaga() {
  yield takeEvery("SIGNUP_USER", signup);
}

export default signupSaga;
