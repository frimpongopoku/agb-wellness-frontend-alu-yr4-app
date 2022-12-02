import { combineReducers } from "redux";
import { doNothingReducer, reducerForSidePane } from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
  sidepane: reducerForSidePane,
});
