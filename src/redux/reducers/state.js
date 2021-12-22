import { combineReducers } from "redux";
import { doNothingReducer } from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
});
