import ReactModal from "react-modal";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterOptions from "../components/FilterOptions";
import { addFilter, removeFilter } from "../redux/actions/actions";

ReactModal.setAppElement('body')

const Filter = () => {
  const filters = useSelector(state => state.filter);
  const characters = useSelector(state => state.charactersReducers.characters);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('');
  const options = ['Alive', 'Dead', 'unknown']

  const handleOptions = (option) => {
    setSelected(option);
    let selectedFilters = createFilters(option)
    dispatch(addFilter(selectedFilters))
  };

  const removeFilters = () => {
    dispatch(removeFilter());
  }

  const createFilters = (status) => {
    return characters.filter(char => char.status === status)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <button type="button" onClick={toggleModal}>Filter</button>
        <ReactModal isOpen={showModal} onRequestClose={toggleModal}>
          <div>
            <FilterOptions options={options} selected={selected} onOptionChange={handleOptions} />
            <button type="button" onClick={removeFilters}>RemoveFilter</button>
            <button type="button" onClick={toggleModal}>X</button>
          </div>
        </ReactModal>
    </div>
  )
}

export default Filter;
