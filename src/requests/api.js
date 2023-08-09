import axios from 'axios';

const getCharacters = async () => {
  const res = await axios.get('https://rickandmortyapi.com/api/character');
  if (res.status === 200) {
    const characters = res.data.results
    return characters;
  }

  throw Error(res.status);
}

export { getCharacters };