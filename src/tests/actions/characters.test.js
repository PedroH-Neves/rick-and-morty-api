import configureStore from 'redux-mock-store';
import { fetchCharactersRequest, fetchCharactersSuccess, fetchCharactersFailure } from '../../redux/actions/actions';

const mockStore = configureStore();
const store = mockStore({});

describe('characters creation', () => {
  it('should request characters', () => {
    store.dispatch(fetchCharactersRequest(
      {
        loading: true,
        characters: {},
        error: '',
      },
    ));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should fetch characters with success', () => {
    store.dispatch(
      fetchCharactersSuccess({
        loading: false,
        characters: {
          name: 'test character',
        },
        error: '',
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should fetch characters with failure', () => {
    store.dispatch(
      fetchCharactersFailure({
        loading: false,
        characters: {},
        error: 'some error',
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });
});
