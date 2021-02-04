import * as type from '../types';

export function signUp(data) {
    return {
        type: type.SIGNUP_USER,
        payload: data
    }
}
export function logIn(data) {
    return {
        type: type.LOGIN_USER,
        payload: data
    }
}
export function logOut(data) {
    return {
        type: type.LOGOUT_USER,
        payload: data
    }
}
export function resetPassword(data) {
    return {
        type: type.RESET_USER,
        payload: data
    }
}
export function updateProfile(data) {
    return {
        type: type.UPDATE_PROFILE_USER,
        payload: data
    }
}
