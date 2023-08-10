import { useEffect, useState } from 'react';
import { URL, getCharacters } from '../requests/api';
import Pagination from '../components/Pagination';

const Home = () => {
  let [characters, setCharacters] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);

  const api = `${URL}/?page=${pageNumber}`;

  useEffect(() => {
    console.log(pageNumber)
    const requestChars = getCharacters();
    requestChars.then (chars => 
      setCharacters(chars)) 
  },[api])

  return (
    <div>
      <div>
        {characters.map(character => (
          <div key={character.id}>{character.name}-{character.status}<img src={character.image} alt=''/></div>
        ))}
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default Home;
