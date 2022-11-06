import { applyMiddleware, createStore } from "redux";
import { Get__data } from "../reducers/Get__data";
import thunk from "redux-thunk";

export const store = createStore(Get__data,applyMiddleware(thunk));