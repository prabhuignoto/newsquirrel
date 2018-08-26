import 'jest-dom/extend-expect';
import * as React from 'react'
import {render} from 'react-testing-library';
import Loader from '../components/loader/loader';
import LoaderSize from '../enums/loaderSize';
test('Renders loader correctly', () => {
  const props = {
    size: LoaderSize.LARGE,
    start: true,
    stop: false,
  };
  const props2 = {
    size: LoaderSize.SMALL,
    start: false,
    stop: true,
  }
  const{getByTestId, rerender} = render(<Loader {...props}/>);
  let node = getByTestId('rt-loader');
  expect(node).toBeInTheDocument();
  expect(node).toMatchSnapshot();
  rerender(<Loader {...props2} />);
  node = getByTestId('rt-loader');
  expect(node).toBeInTheDocument();
})
