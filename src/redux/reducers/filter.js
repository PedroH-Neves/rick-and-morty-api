import { ADD_FILTER, REMOVE_FILTER } from "../actions/actions";

const filter = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.payload];
    case REMOVE_FILTER:
      return [];
    default:
      return state;  
  }
}

export default filter;