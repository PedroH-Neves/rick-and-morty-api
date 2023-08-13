import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../../components/Loader';

it('Renders Loader', () => {
  const loader = render;

  render(<Loader />);

  expect(loader).toMatchSnapshot();
});
