export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';
export const FETCH_LOCATIONS_REQUEST = 'FETCH_LOCATIONS_REQUEST';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

export const fetchCharactersRequest = () => ({type:FETCH_CHARACTERS_REQUEST});
export const fetchCharactersSuccess = characters => ({type:FETCH_CHARACTERS_SUCCESS, payload: characters});
export const fetchCharactersFailure = error => ({type: FETCH_CHARACTERS_FAILURE, payload: error});
export const fetchEpisodesRequest = () => ({type:FETCH_EPISODES_REQUEST});
export const fetchEpisodesSuccess = episodes => ({type:FETCH_EPISODES_SUCCESS, payload: episodes});
export const fetchEpisodesFailure = error => ({type:FETCH_EPISODES_FAILURE, payload: error});
export const fetchLocationsRequest = () => ({type:FETCH_LOCATIONS_REQUEST});
export const fetchLocationsSuccess = locations => ({type:FETCH_LOCATIONS_SUCCESS, payload: locations});
export const fetchLocationsFailure = error => ({type:FETCH_LOCATIONS_FAILURE, payload: error});