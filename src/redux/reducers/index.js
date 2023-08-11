import { combineReducers } from "@reduxjs/toolkit";
import charactersReducers from "./charactersReducers";

const rootReducer = combineReducers({
  charactersReducers
})

export default rootReducer;