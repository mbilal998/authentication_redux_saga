import { call, put, takeEvery } from "redux-saga/effects";
import { resetPassword } from "./services/services";

function* reset(action: any) {
  try {
    yield call(resetPassword, action.payload);
    yield put({ type: "RESET_SUCCESS" });
  } catch (e) {
    yield put({ type: "RESET_FAILED", message_value: e.message });
  }
}

function* resetPasswordSaga() {
  yield takeEvery("RESET_USER", reset);
}

export default resetPasswordSaga;
