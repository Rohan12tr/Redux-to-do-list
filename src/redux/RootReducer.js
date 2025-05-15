import { combineReducers } from "redux";
import { OperationsReducer } from "./todoapp/reducers/Operations";

export const rootReducer = combineReducers({
    OperationsReducer,
    // more reducers can be added here
})