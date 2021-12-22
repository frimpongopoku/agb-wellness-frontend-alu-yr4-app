import { DO_NOTHING } from "../ReduxConstants";

export const testReduxAction = (someValue) => {
  return { type: DO_NOTHING, payload: someValue };
};
