import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/thunk/thunk';
// import Pagination from '../components/Pagination';

const Home = () => {
  const charactersState = useSelector(state => state.charactersReducer);

  console.log(charactersState)
  // let [pageNumber, setPageNumber] = useState(1);

  //const api = `${URL}/?page=${pageNumber}`;

  useEffect(() => {
    fetchCharacters();
  })

  return (
    <div>
      <div>
        {charactersState.map(character => (
          <div key={character.id}>{character.name}-{character.status}<img src={character.image} alt=''/></div>
        ))}
      </div>
      {/* <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} /> */}
    </div>
  );
}

export default Home;
