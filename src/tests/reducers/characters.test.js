import charactersReducers, { initialState } from '../../redux/reducers/characters';

describe('Characters Reducers', () => {
  it('should return the initial state', () => {
    expect(charactersReducers(undefined, {})).toMatchSnapshot();
  });

  it('should handle Fetch Characters Request', () => {
    expect(charactersReducers(initialState,
      {
        type: 'FETCH_CHARACTERS_REQUEST',
      })).toMatchSnapshot();
  });

  it('should handle Fetch Characters Success', () => {
    expect(charactersReducers(initialState,
      {
        type: 'FETCH_CHARACTERS_SUCCESS',
      })).toMatchSnapshot();
  });

  it('should handle Fetch Characters Failure', () => {
    expect(charactersReducers(initialState,
      {
        type: 'FETCH_CHARACTERS_FAILURE',
      })).toMatchSnapshot();
  });
});
