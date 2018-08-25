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
  }
  const{getByTestId} = render(<Loader {...props}/>);
  
  const node = getByTestId('rt-loader');
  expect(node).toBeInTheDocument();
  expect(node).toMatchSnapshot();
})
