import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/components/CharDetails.scss';

const CharDetails = ({char}) => {

  return (
      <>
      <FontAwesomeIcon icon={faArrowLeft}>Arrow</FontAwesomeIcon>
      <div className="detail-div">
        <img src={char.image} />
        <ul>
          <li><span>Name: </span><span className="info">{char.name}</span></li>
          <li><span>Status: </span><span className="info">{char.status}</span></li>
          <li><span>Species: </span><span className="info">{char.species}</span></li>
          <li><span>Type: </span><span className="info">{char.type === '' ? 'None' : char.type}</span></li>
          <li><span>Gender: </span><span className="info">{char.gender}</span></li>        
          <li><span>Origins: </span><span className="info">{char.origin.name}</span></li>
          <li><span>Location: </span> <span className="info">{char.location.name}</span></li>
        </ul>
      </div>
      </>
    )
}



export default CharDetails;