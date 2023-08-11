import { useSelector } from "react-redux";
import '../styles/components/Cards.scss';

const Cards = () => {
  const charactersState = useSelector((state) => state.charactersReducers.characters);

  return (
    <div className="characters-grid">
      {charactersState.map(characters => (
        <div onClick={alert} className="characters-card" key={characters.id}>{characters.name}-{characters.status}<img src={characters.image} alt='' /></div>
      ))}
    </div>
  )
}

export default Cards;