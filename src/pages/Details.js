import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CharDetails from '../components/CharDetails';

const Details = () => {
  const { id } = useParams();

  const characters = useSelector((state) => state.charactersReducers.characters);
  const charDetails = (characters.filter((char) => char.id === Number(id))[0]);

  return (
    <div>
      <CharDetails char={charDetails} />
    </div>
  );
};

export default Details;
