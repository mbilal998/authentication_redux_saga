import * as type from "../types";

const initialState = {
  token: "",
};

export default function token_reducer(state = initialState, action: any) {
  switch (action.type) {
    case type.TOKEN_SET:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
