import configureMockStore from 'redux-mock-store';
import { addFilter, removeFilter } from '../../redux/actions/actions';

const mockStore = configureMockStore();
const store = mockStore({});

describe('actions creation', () => {
  it('should add a filter', () => {
    store.dispatch(addFilter(
      {
        status: 'Alive',
      },
    ));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should remove a filter', () => {
    store.dispatch(removeFilter(
      {
        status: ['Alive', 'Dead'],
      },
    ));
    expect(store.getActions()).toMatchSnapshot();
  });
});
