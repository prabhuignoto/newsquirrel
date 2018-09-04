import 'jest-dom/extend-expect';
import * as React from 'react';
import {fireEvent, render} from 'react-testing-library';
import Dropdown from '../components/dropdown/dropdown';
import { IDropdown } from '../models/view/IDropdown';

test('Dropdown renders correctly', () => {
  const callbackSelect = jest.fn();
  const props:IDropdown = {
    items: [{
      name: 'dropdown1',
      onSelect: callbackSelect,
      value: 'dropdown1',
    }, {
      name: 'dropdown2',
      onSelect: callbackSelect,
      value: 'dropdown2',
    }],
    label: 'Test_Dropdown_label',
    onClick: jest.fn(),
    onSelect: callbackSelect,
    selectedItem: '',
    show: true,
  };
  const props2:IDropdown = Object.assign({}, props, {
    show: false,
  });

  const {getByTestId, rerender} = render(<Dropdown {...props}/>);
  let node = getByTestId('rt-dropdown-wrapper');
  const label = getByTestId('rt-dropdown-label');
  let list = node.querySelectorAll('ul li');
  expect(node).toBeInTheDocument();
  expect(label).toHaveTextContent('Test_Dropdown_label');
  expect(node).toMatchSnapshot();
  expect(list).toHaveLength(2);
  fireEvent(list[0] as HTMLLIElement, new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }));
  expect(callbackSelect).toHaveBeenCalled();

  rerender(<Dropdown {...props2} />);
  node = getByTestId('rt-dropdown-wrapper')
  list = node.querySelectorAll('ul li');
  expect(node).toBeInTheDocument();
  expect(list).toHaveLength(0);
})
