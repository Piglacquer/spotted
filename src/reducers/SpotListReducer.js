import { SPOTS_FETCH_SUCCESS, SPOT_CREATE } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPOTS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
