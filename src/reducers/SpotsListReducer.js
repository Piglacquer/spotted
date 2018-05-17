import {
  SPOTS_FETCH_SUCCESS,
  SPOT_CREATE,
  SPOTS_FORMAT
} from "../actions/types";

const INITIAL_STATE = {
  usersObjects: {},
  listOfSpots: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPOTS_FETCH_SUCCESS:
      console.log(action.payload);
      return { ...state, usersObjects: action.payload };
    case SPOTS_FORMAT:
      console.log(action.payload, "spots");
      return { ...state, listOfSpots: action.payload };
    default:
      return state;
  }
};
