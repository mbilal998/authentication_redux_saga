import * as type from "../types";

const initialState = {
  reset_data: {},
  is_reset: false,
  reset_error: "",
};

export default function reset_reducer(state = initialState, action: any) {
  switch (action.type) {
    case type.RESET_USER:
      return {
        ...state,
        reset_data: action.payload,
      };
    case type.RESET_SUCCESS:
      return {
        ...state,
        is_reset: true,
      };
    case type.RESET_FAILED:
      return {
        ...state,
        is_reset: false,
        reset_error: action.message_value,
      };
    default:
      return state;
  }
}
