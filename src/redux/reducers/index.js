import { combineReducers } from "@reduxjs/toolkit";
import charactersReducers from "./charactersReducers";
import { statusReducer } from "./status";

const rootReducer = combineReducers({
  charactersReducers, statusReducer
})

export default rootReducer;