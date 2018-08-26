import 'jest-dom/extend-expect';
import * as React from 'react';
import{fireEvent, render, waitForElement } from 'react-testing-library';
import SearchBar from '../components/search-bar/search-bar'

test('Render search bar correctly', async () => {
  const handleInput = jest.fn();
  const handleClear = jest.fn();
  const handleSearch = jest.fn();
  const {getByTestId} = render(<SearchBar 
    placeHolder="Search for News"
    handleInput={handleInput}
    handleClear={handleClear}
    handleSearch={handleSearch}
    searchTerm="test"
  />);
  const node = getByTestId('rt-search-bar-wrapper');
  const input = node.querySelector('input') as HTMLInputElement;
  expect(node).toBeInTheDocument();
  expect(input.placeholder).toMatch('Search for News');
  const clearBtn = await waitForElement(() => getByTestId('rt-btn-clear-search')) as HTMLButtonElement;
  fireEvent(clearBtn, new MouseEvent('click', {
    bubbles: true,
    cancelable: true
  }));
  expect(handleClear).toBeCalled();
  fireEvent(input, new KeyboardEvent('input', {
    bubbles: true,
    cancelable: true,
  }));
  expect(handleInput).toBeCalled();
  fireEvent(input, new KeyboardEvent('keypress', {
    bubbles: true,
    cancelable: true
  }))
  expect(handleSearch).toBeCalled();
})
