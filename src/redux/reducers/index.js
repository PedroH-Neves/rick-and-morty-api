import { combineReducers } from "@reduxjs/toolkit";
import charactersReducers from "./characters";
import { statusReducer } from "./status";

const rootReducer = combineReducers({
  charactersReducers, statusReducer
})

export default rootReducer;