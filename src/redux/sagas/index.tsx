import { all } from "redux-saga/effects";
import signupSaga from "./signup";
import loginSaga from "./login";
import resetPasswordSaga from "./resetPassword";
import udpateprofileSaga from "./updateprofile";
export default function* rootSaga() {
  yield all([
    signupSaga(),
    loginSaga(),
    resetPasswordSaga(),
    udpateprofileSaga(),
  ]);
}
