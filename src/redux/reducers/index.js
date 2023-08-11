import { combineReducers } from "@reduxjs/toolkit";
import charactersReducers from "./charactersReducers";
import episodesReducers from "./episodesReducers";
import locationsReducers from "./locationsReducers";

const rootReducer = combineReducers({
  charactersReducers, episodesReducers, locationsReducers
})

export default rootReducer;