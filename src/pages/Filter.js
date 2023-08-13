import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import FilterOptions from '../components/FilterOptions';
import { addFilter, removeFilter } from '../redux/actions/actions';
import '../styles/pages/Filter.scss';

ReactModal.setAppElement('body');

const Filter = () => {
  const characters = useSelector((state) => state.charactersReducers.characters);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('');
  const options = ['Alive', 'Dead', 'unknown'];

  const createFilters = (status) => (
    characters.filter((char) => char.status === status)
  );

  const handleOptions = (option) => {
    setSelected(option);
    const selectedFilters = createFilters(option);
    dispatch(addFilter(selectedFilters));
  };

  const toggleModal = (e) => {
    setShowModal(!showModal);
    e.target.value = '';
  };

  const removeFilters = () => {
    dispatch(removeFilter());
    toggleModal();
  };

  return (
    <div className="modal-div">
      <button className="filter-btn" type="button" onClick={toggleModal}><FontAwesomeIcon icon={faFilter}>Filter</FontAwesomeIcon></button>
      <ReactModal className="react-modal" isOpen={showModal} onRequestClose={toggleModal}>
        <div className="modal">
          <div className="options-div">
            <FilterOptions options={options} selected={selected} onOptionChange={handleOptions} />
          </div>
          <button type="button" className="remove-filter" onClick={removeFilters}>CLEAR FILTERS</button>
          <button type="button" className="close-btn" onClick={toggleModal}>X</button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Filter;
