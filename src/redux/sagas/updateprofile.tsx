import { call, put, takeEvery } from "redux-saga/effects";
import { updateData } from "./services/services";
import { auth } from "../../firebase";
import { CURRENT_USER_SUCCESS, CURRENT_USER_FAILED } from "../types";
import { push } from "connected-react-router";

function* update(action: any) {
  try {
    const Data = yield call(updateData, action.payload);
    var user = auth.currentUser;
    if (user) {
      yield put({ type: CURRENT_USER_SUCCESS, currentUser: user });
    } else {
      yield put({ type: CURRENT_USER_FAILED, currentUser: {} });
    }
    yield put({ type: "UPDATE_PROFILE_SUCCESS", update_profile_value: Data });

    yield put(push("/"));
  } catch (e) {
    yield put({ type: "UPDATE_PROFILE_FAILED", message_value: e.message });
  }
}

function* udpateprofileSaga() {
  yield takeEvery("UPDATE_PROFILE_USER", update);
}

export default udpateprofileSaga;
