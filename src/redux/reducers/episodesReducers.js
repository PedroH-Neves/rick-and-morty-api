import { FETCH_EPISODES_FAILURE, FETCH_EPISODES_REQUEST, FETCH_EPISODES_SUCCESS } from "../actions/actions";

const initialState = {
  episodes: [],
  loading: false,
  error: '',
};

export const episodesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES_REQUEST:
      return {...state, loading: true};
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        loading: false,
        episodes: action.payload,
        error: '',
      };
    case FETCH_EPISODES_FAILURE:
      return {
        ...state,
        loading: false,
        episodes: [],
        error: action.payload,
      };
    default:
      return state;    
  }
}

export default episodesReducers;