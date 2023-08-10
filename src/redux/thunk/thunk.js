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

export { fetchCharacters };
