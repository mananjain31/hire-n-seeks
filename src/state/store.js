import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
  reducers, // combined reducers
  {}, // this is initial state
  applyMiddleware(thunk)
);
