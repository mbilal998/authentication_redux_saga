import * as type from "../types";

const initialState = {
  update_profile_data: {},
  is_profile_update: false,
  update_profile_error: "",
};

export default function updateprofile_reducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case type.UPDATE_PROFILE_USER:
      return {
        ...state,
        update_profile_data: action.payload,
      };
    case type.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        is_profile_update: true,
        update_profile_data: action.update_profile_value,
      };
    case type.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        is_profile_update: false,
        update_profile_error: action.message_value,
      };
    default:
      return state;
  }
}
