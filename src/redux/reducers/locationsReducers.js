import { FETCH_LOCATIONS_FAILURE, FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS } from "../actions/actions"

const initialState = {
  locations: [],
  loading: false,
  error: '',
}

export const locationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return {...state, loading: true};
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: action.payload,
        error: '',
      };
    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        locations: action.payload,
        error: '',
      };
    default:
      return state;
  }
}

export default locationsReducers;