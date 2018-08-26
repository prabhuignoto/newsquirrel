import 'jest-dom/extend-expect';
import * as React from 'react';
import {render} from 'react-testing-library';
import Footer from '../components/footer/footer';

test('Footer renders correctly', () => {
  const {getByTestId} = render(<Footer />);
  const node = getByTestId('rt-footer');
  const link = node.querySelector('a');
  expect(node).toBeInTheDocument();
  expect(node).toMatchSnapshot();
})

