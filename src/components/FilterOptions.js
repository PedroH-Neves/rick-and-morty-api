import '../styles/components/FilterOptions.scss';
import PropTypes from 'prop-types';

const FilterOptions = ({ options, onOptionChange, selected }) => (
  <>
    <div className="options-div">
      <h3>FILTER LIST BY STATUS:</h3>
      {options.map((option) => (
        <label className={`${option}`} key={option} htmlFor={`${option}`}>
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={() => onOptionChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  </>
);

FilterOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default FilterOptions;
