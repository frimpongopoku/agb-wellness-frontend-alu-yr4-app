import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers/state";
import { createStore, applyMiddleware, compose } from "redux";

const store = createStore(
  reducers,

  compose(applyMiddleware(reduxThunk, logger))
);

export default store;
