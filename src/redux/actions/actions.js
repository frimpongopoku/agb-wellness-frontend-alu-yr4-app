import {
  DO_NOTHING,
  SHOW_SIDE_PANE,
  TOGGLE_SIDE_PANE,
} from "../ReduxConstants";

export const testReduxAction = (someValue) => {
  return { type: DO_NOTHING, payload: someValue };
};

export const reduxShowSidePane = (payload) => {
  return { type: TOGGLE_SIDE_PANE, payload };
};
export const reduxShowToast = (payload) => {
  return { type: TOGGLE_SIDE_PANE, payload };
};
