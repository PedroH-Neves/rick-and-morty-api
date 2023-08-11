import axios from 'axios';

export const URL = 'https://rickandmortyapi.com/api/character';
export const urlEps = 'https://rickandmortyapi.com/api/episode';
export const urlLocs = 'https://rickandmortyapi.com/api/location';

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

const getLocations = async () => {
  const res = await axios.get(urlLocs);
  if(res.status === 200) {
    const locations = res.data.results
    return locations
  }

  throw Error(res.status);
}

export { getCharacters, getEpisodes, getLocations };