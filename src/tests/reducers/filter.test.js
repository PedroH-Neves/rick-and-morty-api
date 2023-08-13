import filter from '../../redux/reducers/filter';

describe('Filter Characters Reducer', () => {
  it('should return initial state', () => {
    expect(filter(undefined, {})).toMatchSnapshot();
  });

  it('should handle add a new filter', () => {
    expect(filter([],
      {
        type: 'ADD_FILTER',
      })).toMatchSnapshot();
  });

  it('should handle remove filters', () => {
    expect(filter([],
      {
        type: 'REMOVE_FILTER',
      })).toMatchSnapshot();
  });
});
