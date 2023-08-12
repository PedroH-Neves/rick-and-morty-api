import { combineReducers } from '@reduxjs/toolkit';
import charactersReducers from './characters';
import filter from './filter';

const rootReducer = combineReducers({
  charactersReducers, filter,
});

export default rootReducer;
