import 'jest-dom/extend-expect';
import * as React from 'react';
import {cleanup, fireEvent, render } from 'react-testing-library';
import Filters from '../components/filters/filters';
import { IFilter } from '../models/view/IFilter';

afterEach(cleanup);

test('Renders Tabs correctly', () => {
  const callback = jest.fn();
  const filters: IFilter[] = [
    {
      name: 'Tab One',
      selected: false,
      value: 'Tab One',
    },{
      name: 'Tab Two',
      selected: false,
      value: 'Tab Two',
    },{
      name: 'Tab Three',
      selected: true,
      value: 'Tab Three',
    }]
  const {getByTestId} = render(<Filters items={filters} selectFilter={callback} />);
  const node = getByTestId('main-tabs');
  const list = node.querySelector('ul');
  const listItems = list!.querySelectorAll('li');

  expect(node).toBeInTheDocument();
  expect(node).toHaveClass('tabs');
  expect(listItems).toHaveLength(3);
  expect(node).toMatchSnapshot();
  fireEvent(listItems[0], new MouseEvent('click', {
    bubbles: true,
    cancelable: true
  }));
  expect(callback).toHaveBeenCalledTimes(1);
})
