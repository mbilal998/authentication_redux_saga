import * as type from "../types";

const initialState = {
  currentUser: {},
  is_currentUser_set: false,
};

export default function currentUser_reducer(state = initialState, action: any) {
  switch (action.type) {
    case type.CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.currentUser,
        is_currentUser_set: true,
      };
    case type.CURRENT_USER_FAILED:
      return {
        ...state,
        currentUser: action.currentUser,
        is_currentUser_set: false,
      };
    default:
      return state;
  }
}
