import { useEffect, useState } from 'react';
import { getCharacters } from '../requests/api';

const Home = () => {
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    const requestChars = getCharacters();
    requestChars.then(chars => 
      setCharacters(chars))
    console.log(characters)
  },[])

  return (
    <div>
      {characters.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}

export default Home;
