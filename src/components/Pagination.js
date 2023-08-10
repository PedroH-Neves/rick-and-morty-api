const Pagination = ({setPageNumber, pageNumber}) => {
  let next = () => {
    setPageNumber((x) => x + 1)
  };

  let prev = () => {
    if(pageNumber === 1) return;
    setPageNumber((x) => x - 1)
  };

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  )
};

export default Pagination;