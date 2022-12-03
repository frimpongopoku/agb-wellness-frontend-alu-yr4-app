import { combineReducers } from "redux";
import {
  doNothingReducer,
  reducerForSidePane,
  reducerForUniversalToast,
} from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
  sidepane: reducerForSidePane,
  toastOptions: reducerForUniversalToast,
});
