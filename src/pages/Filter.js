import ReactModal from "react-modal";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterOptions from "../components/FilterOptions";
import { addFilter, removeFilter } from "../redux/actions/actions";
import '../styles/pages/Filter.scss';

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
    toggleModal();
  }

  const createFilters = (status) => {
    return characters.filter(char => char.status === status)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="modal-div">
      <button type="button" onClick={toggleModal}>Filter</button>
        <ReactModal className='react-modal' isOpen={showModal} onRequestClose={toggleModal}>
          <div className="modal">
            <div className="options-div">
            <FilterOptions options={options} selected={selected} onOptionChange={handleOptions} />
            </div>
            <button type="button" className="remove-filter" onClick={removeFilters}>CLEAR FILTERS</button>
            <button type="button" className="close-btn" onClick={toggleModal}>X</button>
          </div>
        </ReactModal>
    </div>
  )
}

export default Filter;
