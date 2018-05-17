import { SPOT_UPDATE, SPOT_CREATE } from "../actions/types";

const INITIAL_STATE = {
  name: "",
  description: "",
  photos: "",
  location: "",
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPOT_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case SPOT_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
