import CharDetails from "../components/CharDetails";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const [char, setChar] = useState({})
  const { id } = useParams();

  const characters = useSelector(state => state.charactersReducers.characters);
  const charDetails = (characters.filter(char => char.id === Number(id))[0])

  useEffect(() => {
    setChar(charDetails)
    console.log(char)
  }, [])

  const renderChar = {
    id: char.id,
    name: char.name,
    status: char.status,
    location: char.location,
    species: char.species,
    gender: char.gender,
    origin: char.origin,
    image: char.image,
  }

  return (
    <div>
      <CharDetails char={renderChar}/>
    </div>
  )
}


export default Details;
