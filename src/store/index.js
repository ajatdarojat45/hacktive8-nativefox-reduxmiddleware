import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  userReducer
});

let store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
