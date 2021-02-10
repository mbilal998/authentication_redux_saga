import { call, put, takeEvery } from "redux-saga/effects";
import { auth } from "../../firebase";
import { CURRENT_USER_SUCCESS, CURRENT_USER_FAILED } from "../types";
import { loginData, logOutData } from "./services/services";
import { push } from "connected-react-router";

function* login(action: any) {
  try {
    const Data = yield call(loginData, action.payload);
    var user = auth.currentUser;
    if (user) {
      yield put({ type: CURRENT_USER_SUCCESS, currentUser: user });
    } else {
      yield put({ type: CURRENT_USER_FAILED, currentUser: {} });
    }
    yield put({ type: "LOGIN_SUCCESS", login_value: Data });

    yield put(push("/"));
  } catch (e) {
    yield put({ type: "LOGIN_FAILED", message_value: e.message });
  }
}

function* logout(action: any) {
  yield call(logOutData, action.payload);
  var user = auth.currentUser;
  if (user) {
    yield put({ type: CURRENT_USER_SUCCESS, currentUser: user });
  } else {
    yield put({ type: CURRENT_USER_FAILED, currentUser: {} });
  }
}

function* loginSaga() {
  yield takeEvery("LOGIN_USER", login);
  yield takeEvery("LOGOUT_USER", logout);
}

export default loginSaga;
