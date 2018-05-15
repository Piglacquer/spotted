import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import SpotListReducer from "./SpotListReducer";

export default combineReducers({
  auth: AuthReducer,
  spots: SpotListReducer
});
