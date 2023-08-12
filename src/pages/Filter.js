import ReactModal from "react-modal";
import React, { useState } from "react";
import FilterOptions from "../components/FilterOptions";

ReactModal.setAppElement('body')

const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('');
  const options = ['Alive', 'Dead', 'unknown']

  const handleOptions = (option) => {
    setSelected(option);
  };

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <button type="button" onClick={toggleModal}>Filter</button>
        <ReactModal isOpen={showModal} onRequestClose={toggleModal}>
          <div>
            <FilterOptions options={options} selected={selected} onOptionChange={handleOptions} />
          </div>
        </ReactModal>
    </div>
  )
}

export default Filter;
