import { useSelector } from 'react-redux';
import '../styles/components/Cards.scss';
import { Link } from 'react-router-dom';
import Char from './Char';

const Cards = () => {
  const charactersState = useSelector((state) => state.charactersReducers.characters);
  const filterState = useSelector((state) => state.filter);

  const renderChars = (
    filterState.length === 0
      ? charactersState.map((char) => (
        <Link to={`/details/${char.id}`} className="characters-card" key={char.name} id={char.id}>
          <Char name={char.name} image={char.image} />
        </Link>
      ))
      : filterState[0].map((char) => (
        <Link to={`/details/${char.id}`} className="characters-card" key={char.name} id={char.id}>
          <Char name={char.name} image={char.image} />
        </Link>
      ))
  );

  return (
    <div className="cards-list">
      {renderChars}
    </div>
  );
};

export default Cards;
