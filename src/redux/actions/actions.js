import { InternetExplorer } from "../../shared/api/InternetExplorer";
import { API_LOG_OUT } from "../../shared/api/urls";
import {
  DO_NOTHING,
  SET_AUTH_USER,
  SET_CATEGORIES,
  SET_GOALS,
  SET_STAFFS,
  SHOW_SIDE_PANE,
  TOGGLE_SIDE_PANE,
  TOGGLE_TOAST,
} from "../ReduxConstants";

export const testReduxAction = (someValue) => {
  return { type: DO_NOTHING, payload: someValue };
};

export const reduxShowSidePane = (payload) => {
  return { type: TOGGLE_SIDE_PANE, payload };
};
export const reduxShowToast = (payload) => {
  return { type: TOGGLE_TOAST, payload };
};
export const reduxSetAuthUser = (payload) => {
  return { type: SET_AUTH_USER, payload };
};
export const reduxSetGoals = (payload) => {
  return { type: SET_GOALS, payload };
};
export const reduxSetStaffs = (payload) => {
  return { type: SET_STAFFS, payload };
};
export const reduxSetCategories = (payload) => {
  return { type: SET_CATEGORIES, payload };
};

export const signOut = (cb) => (dispatch) => {
  InternetExplorer.post({ url: API_LOG_OUT }).then((response) => {
    if (!response.success) return console.log("ERROR - LOGOUT", response.error);
    dispatch(reduxSetAuthUser(null));
    cb && cb();
  });
};
