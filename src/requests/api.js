import axios from 'axios';

export let URL = 'https://rickandmortyapi.com/api/character';
export let urlEps = 'https://rickandmortyapi.com/api/episode';
export let urlLocs = '';

const getCharacters = async () => {
  const res = await axios.get(URL);
  if (res.status === 200) {
    const characters = res.data.results
    return characters;
  }
  
  throw Error(res.status);
}

const getEpisodes = async () => {
  const res = await axios.get(urlEps);
  if (res.status === 200) {
    const episodes = res.data.results
    return episodes;
  }

  throw Error(res.status);
}

export { getCharacters, getEpisodes };