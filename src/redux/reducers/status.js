import { ADD_FILTER, REMOVE_FILTER } from "../actions/actions";

export const statusReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.payload];
    case REMOVE_FILTER:
      return [];
    default:
      return state;  
  }
}