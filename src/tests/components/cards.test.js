import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cards from '../../components/Cards';
import store from '../../redux/store';

const character = {
  name: 'Rick Sanchez',
  image: 'character image',
};

it('render all characters', () => {
  const characters = render;

  render(
    <Provider store={store}>
      <Cards name={character.name} image={character.image} />
    </Provider>,
  );

  expect(characters).toMatchSnapshot();
});
