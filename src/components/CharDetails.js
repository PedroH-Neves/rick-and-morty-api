import { useSelector } from "react-redux";

const CharDetails = ({char}) => {
  return (
    <div>
      {char.name}
    </div>
  )
}


export default CharDetails;