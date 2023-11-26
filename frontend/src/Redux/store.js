import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";


// NOTE: use this store variable to create a store.
export const store =legacy_createStore(reducer,applyMiddleware(thunk));