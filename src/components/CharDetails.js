import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/CharDetails.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharDetails = ({ char }) => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  return (
    <>
      <button type="button" className="back-arrow" onClick={backHome}>
        <FontAwesomeIcon icon={faAngleLeft}>Arrow</FontAwesomeIcon>
      </button>
      <div className="detail-div">
        <img src={char.image} alt="" />
        <ul>
          <li>
            <span>Name: </span>
            <span className="info">{char.name}</span>
          </li>
          <li>
            <span>Status: </span>
            <span className="info">{char.status}</span>
          </li>
          <li>
            <span>Species: </span>
            <span className="info">{char.species}</span>
          </li>
          <li>
            <span>Type: </span>
            <span className="info">{char.type === '' ? 'None' : char.type}</span>
          </li>
          <li>
            <span>Gender: </span>
            <span className="info">{char.gender}</span>
          </li>
          <li>
            <span>Origins: </span>
            <span className="info">{char.origin.name}</span>
          </li>
          <li>
            <span>Location: </span>
            <span className="info">{char.location.name}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

CharDetails.propTypes = {
  char: PropTypes.arrayOf.isRequired,
};

export default CharDetails;
