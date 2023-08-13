import '../styles/components/Char.scss';
import PropTypes from 'prop-types';

const Char = ({ image, name }) => (
  <>
    <figure>
      <img src={image} alt="" />
      <figcaption>{name}</figcaption>
    </figure>
  </>
);

Char.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Char;
