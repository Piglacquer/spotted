import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import SpotsListReducer from "./SpotsListReducer";
import SpotFormReducer from "./SpotFormReducer";

export default combineReducers({
  auth: AuthReducer,
  spots: SpotsListReducer,
  spotToPost: SpotFormReducer
});
