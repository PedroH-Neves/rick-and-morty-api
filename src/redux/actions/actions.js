export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';


export const fetchCharactersRequest = () => ({type:FETCH_CHARACTERS_REQUEST});
export const fetchCharactersSuccess = characters => ({type:FETCH_CHARACTERS_SUCCESS, payload: characters});
export const fetchCharactersFailure = error => ({type: FETCH_CHARACTERS_FAILURE, payload: error});
export const addFilter = filter => ({ type: ADD_FILTER, payload: filter });
export const removeFilter = filter => ({ type: REMOVE_FILTER, payload: filter });
