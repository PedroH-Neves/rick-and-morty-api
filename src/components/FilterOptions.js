import '../styles/components/FilterOptions.scss';

const FilterOptions = ({ options, onOptionChange, selected }) => {

  return (
    <>
    <div className="options-div">
      <h3 >SELECT CHARACTER STATUS:</h3>
      {options.map((option, index) => (
        <label className={`${option}`} key={index}>
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
  )
}

export default FilterOptions;