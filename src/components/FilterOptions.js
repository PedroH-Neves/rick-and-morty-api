const FilterOptions = ({ handleChange, selected }) => {


  return (
    <>
      <form>
        <fieldset>
          <label htmlFor='Alive'>
            Alive
          </label>
          <input type="radio" value='Alive' id="Alive" checked={selected} onChange={handleChange}/>
          <label htmlFor='Dead'>
            Dead
          </label>
          <input type="radio" value='Dead' id="Dead" checked={selected} onChange={handleChange}/>
          <label htmlFor='unknow'>
            unknow
          </label>
          <input type="radio" value='unknow' id="unknow" checked={selected} onChange={handleChange}/>
        </fieldset>
      </form>
    </>
  )
}

export default FilterOptions;