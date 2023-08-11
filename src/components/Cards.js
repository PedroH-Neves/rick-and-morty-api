import { useSelector } from "react-redux";
import '../styles/components/Cards.scss';
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const charactersState = useSelector((state) => state.charactersReducers.characters);
  const navigate = useNavigate();

  const charactersInfo = () => {
    navigate('/characters');
  }

  return (
    <div className="characters-grid">
      {charactersState.map(characters => (
        <div onClick={charactersInfo} className="characters-card" key={characters.id} id={characters.id}>
          {characters.name}-{characters.status}<img src={characters.image} alt='' />
        </div>
      ))}
    </div>
  )
}

export default Cards;