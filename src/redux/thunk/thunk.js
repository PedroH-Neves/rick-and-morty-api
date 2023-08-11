import store from "../store";
import * as actions from "../actions/actions";
import * as req from "../../requests/api";


const fetchCharacters = () => {
  store.dispatch(actions.fetchCharactersRequest());
  const requestCharacters = req.getCharacters();
  
  requestCharacters.then(characters => {
    store.dispatch(actions.fetchCharactersSuccess(characters))
  })
    .catch(error => {
      store.dispatch(actions.fetchCharactersFailure(error))
    });
}

const fetchEpisodes = () => {
  store.dispatch(actions.fetchEpisodesRequest());
  const requestEpisodes = req.getEpisodes();

  requestEpisodes.then(episodes => {
    store.dispatch(actions.fetchEpisodesSuccess(episodes))
  })
    .catch(error => {
      store.dispatch(actions.fetchEpisodesFailure(error))
    });
}

const fetchLocations = () => {
  store.dispatch(actions.fetchLocationsRequest());
  const resquestLocations = req.getLocations();

  resquestLocations.then(locations => {
    store.dispatch(actions.fetchLocationsSuccess(locations))
  })
    .catch(error => {
      store.dispatch(actions.fetchLocationsFailure(error))
    });
}

export { fetchCharacters, fetchEpisodes, fetchLocations };
