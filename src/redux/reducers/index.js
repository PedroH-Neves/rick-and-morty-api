import { combineReducers } from "@reduxjs/toolkit";
import charactersReducers from "./charactersReducer";

const rootReducer = combineReducers({
  charactersReducers
})

export default rootReducer;