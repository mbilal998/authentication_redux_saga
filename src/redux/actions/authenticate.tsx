import * as type from "../types";

export function signUp(data: object) {
  return {
    type: type.SIGNUP_USER,
    payload: data,
  };
}
export function logIn(data: object) {
  return {
    type: type.LOGIN_USER,
    payload: data,
  };
}
export function logOut(data: object) {
  return {
    type: type.LOGOUT_USER,
    payload: data,
  };
}
export function resetPassword(data: object) {
  return {
    type: type.RESET_USER,
    payload: data,
  };
}
export function updateProfile(data: object) {
  return {
    type: type.UPDATE_PROFILE_USER,
    payload: data,
  };
}
