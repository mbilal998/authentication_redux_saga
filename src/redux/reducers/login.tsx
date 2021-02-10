import * as type from "../types";

const initialState = {
  login_data: {},
  is_login: false,
  login_error: "",
};

export default function login_reducer(state = initialState, action: any) {
  switch (action.type) {
    case type.LOGIN_USER:
      return {
        ...state,
        login_data: action.payload,
      };
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        is_login: true,
        login_data: action.login_value,
      };
    case type.LOGIN_FAILED:
      return {
        ...state,
        is_login: false,
        login_error: action.message_value,
      };
    case type.LOGOUT_USER:
      return {
        ...state,
        login_data: {},
        is_login: false,
        login_error: "",
      };
    default:
      return state;
  }
}
