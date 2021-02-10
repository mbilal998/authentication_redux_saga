import * as type from "../types";

const initialState = {
  signup_data: {},
  is_signup: false,
  signup_error: "",
};

export default function signup_reducer(state = initialState, action: any) {
  switch (action.type) {
    case type.SIGNUP_USER:
      return {
        ...state,
        signup_data: action.payload,
      };
    case type.SIGNUP_SUCCESS:
      return {
        ...state,
        is_signup: true,
        signup_data: action.signup_value,
      };
    case type.SIGNUP_FAILED:
      return {
        ...state,
        is_signup: false,
        signup_error: action.message_value,
      };
    default:
      return state;
  }
}
