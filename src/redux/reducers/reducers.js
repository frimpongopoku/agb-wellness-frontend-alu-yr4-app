import {
  DO_NOTHING,
  SET_AUTH_USER,
  SET_CATEGORIES,
  SET_GOALS,
  SET_STAFFS,
  TOGGLE_SIDE_PANE,
  TOGGLE_TOAST,
} from "../ReduxConstants";

export const LOADING = "LOADING";
export const doNothingReducer = (state = [], action = {}) => {
  if (action.type === DO_NOTHING) {
    return action.payload;
  }
  return state;
};
export const reducerForSidePane = (state = { show: false }, action = {}) => {
  if (action.type === TOGGLE_SIDE_PANE) {
    return action.payload;
  }
  return state;
};
export const reducerForUniversalToast = (
  state = { show: false },
  action = {}
) => {
  if (action.type === TOGGLE_TOAST) {
    return action.payload;
  }
  return state;
};
export const reducerForAuthUser = (state = LOADING, action = {}) => {
  if (action.type === SET_AUTH_USER) {
    return action.payload;
  }
  return state;
};
export const reducerForGoals = (state = LOADING, action = {}) => {
  if (action.type === SET_GOALS) {
    return action.payload;
  }
  return state;
};
export const reducerForStaffs = (state = LOADING, action = {}) => {
  if (action.type === SET_STAFFS) {
    return action.payload;
  }
  return state;
};
export const reducerForCategories = (state = LOADING, action = {}) => {
  if (action.type === SET_CATEGORIES) {
    return action.payload;
  }
  return state;
};
