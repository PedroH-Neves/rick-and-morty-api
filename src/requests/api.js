import axios from 'axios';

export const URL = 'https://rickandmortyapi.com/api/character';

const getCharacters = async () => {
  const res = await axios.get(URL);
  if (res.status === 200) {
    const characters = res.data.results;
    return characters;
  }

  throw Error(res.status);
};

export { getCharacters };
