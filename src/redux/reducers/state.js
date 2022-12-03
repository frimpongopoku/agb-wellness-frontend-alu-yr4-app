import { combineReducers } from "redux";
import {
  doNothingReducer,
  reducerForAuthUser,
  reducerForCategories,
  reducerForGoals,
  reducerForSidePane,
  reducerForStaffs,
  reducerForUniversalToast,
} from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
  sidepane: reducerForSidePane,
  toastOptions: reducerForUniversalToast,
  user: reducerForAuthUser,
  goals: reducerForGoals,
  categories: reducerForCategories,
  staffs: reducerForStaffs,
});
