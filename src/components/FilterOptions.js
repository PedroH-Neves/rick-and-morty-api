const FilterOptions = ({ options, onOptionChange, selected }) => {

  return (
    <>
    <div>
      <h3>Select an Option:</h3>
      {options.map((option, index) => (
        <label key={index}>
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