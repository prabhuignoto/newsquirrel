import 'jest-dom/extend-expect';
import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import Flag from '../components/flag/flag';

afterEach(cleanup);

test('Renders Flag component correctly', () => {
  const {getByTestId} = render(<Flag code="in" />);
  const node = getByTestId('rt-flag-wrapper');
  const icon = node.querySelector('i') as HTMLDivElement;

  expect(node).toBeInTheDocument();
  expect(icon).toBeVisible();
  expect(icon).toHaveAttribute('aria-label');
  expect(node).toMatchSnapshot();
});

