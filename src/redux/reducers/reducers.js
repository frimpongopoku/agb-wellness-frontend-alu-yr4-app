import { DO_NOTHING, TOGGLE_SIDE_PANE } from "../ReduxConstants";

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
