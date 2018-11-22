import { combineReducers } from "redux";
import MartListReducer from "./MartListReducer";

export default combineReducers({
  martList: MartListReducer
});
