import 'jest-dom/extend-expect';
import * as React from 'react';
import {render} from 'react-testing-library';
import Footer from '../components/footer/footer';
import { AppMode } from '../enums/appMode';

test('Footer renders correctly', () => {
  const {getByTestId} = render(<Footer appMode={{name: 'Dark', value:AppMode.DARK}}/>);
  const node = getByTestId('rt-footer');
  const link = node.querySelector('a');
  expect(node).toBeInTheDocument();
  expect(node).toMatchSnapshot();
})

