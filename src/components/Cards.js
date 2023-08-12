import { useSelector } from "react-redux";
import '../styles/components/Cards.scss';
import { Link } from "react-router-dom";

const Cards = () => {
  const charactersState = useSelector((state) => state.charactersReducers.characters);
  const filterState = useSelector((state) => state.filter);

  const renderChars = (
    filterState.length === 0
    ? 
    charactersState.map(char => (
      <Link to={`/details/${char.id}`} className="characters-card" key={char.name} id={char.id}>
        {char.name}-{char.status}<img src={char.image} alt='' />
      </Link>
    ))
    :
    filterState[0].map(char => (
      <Link to={`/details/${char.id}`} className="characters-card" key={char.name} id={char.id}>
        {char.name}-{char.status}<img src={char.image} alt='' />
      </Link>
    ))
  )
    
  return (
    <div className="characters-grid">
      {renderChars}
    </div>
  )
}

export default Cards;