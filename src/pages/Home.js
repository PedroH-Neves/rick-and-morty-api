import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/thunk/thunk';
import Loader from '../components/Loader';
import Cards from '../components/Cards';
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
    <div>
      <div>
      <Cards /> 
      </div>
      {/* <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} /> */}
    </div>
  );
}

export default Home;
