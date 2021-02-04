import { call, put, takeEvery } from 'redux-saga/effects';
import { saveData } from './services/services';
import { auth } from '../../firebase';
import { CURRENT_USER_SUCCESS, CURRENT_USER_FAILED } from '../types';

function* signup(action) {
    try {
        const Data = yield call(saveData, action.payload);
        var user = auth.currentUser;
        console.log(user);
        if (user) {
            yield put({ type: CURRENT_USER_SUCCESS, currentUser: user });
        } else {
            yield put({ type: CURRENT_USER_FAILED, currentUser: {} });
        }
        yield put({ type: 'SIGNUP_SUCCESS', signup_value: Data });
    } catch (e) {
        yield put({ type: 'SIGNUP_FAILED', message_value: e.message });
    }
}

function* signupSaga() {
    yield takeEvery('SIGNUP_USER', signup)
}

export default signupSaga;
