import { useEffect, useState } from 'react';
import { fetchCharacters } from '../redux/thunk/thunk';
import Loader from '../components/Loader';
import Cards from '../components/Cards';
import Filter from './Filter';
// import Pagination from '../components/Pagination';

const Home = () => {
  const [loading, setLoading] = useState(true)

  // let [pageNumber, setPageNumber] = useState(1);

  //const api = `${URL}/?page=${pageNumber}`;

  useEffect(() => {
    fetchCharacters();
    setLoading(false);
  }, [setLoading])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Filter />
      <Cards />      
      {/* <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} /> */}
    </>
  );
}

export default Home;
