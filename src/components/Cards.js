import { useSelector } from "react-redux";
import '../styles/components/Cards.scss';
import { Link } from "react-router-dom";

const Cards = () => {
  const charactersState = useSelector((state) => state.charactersReducers.characters);
    
  return (
    <div className="characters-grid">
      {charactersState.map(char => (
        <Link to={`/details/${char.id}`} className="characters-card" key={char.id} id={char.id}>
          {char.name}-{char.status}<img src={char.image} alt='' />
        </Link>
      ))}
    </div>
  )
}

export default Cards;