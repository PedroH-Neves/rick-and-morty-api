import { useSelector } from "react-redux";

const Cards = () => {
  const charactersState = useSelector((state) => state.charactersReducers.characters);

  return (
    <div>
      {charactersState.map(characters => (
        <div key={characters.id}>{characters.name}-{characters.status}<img src={characters.image} alt='' /></div>
      ))}
    </div>
  )
}

export default Cards;