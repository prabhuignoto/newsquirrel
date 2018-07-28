import * as React from 'react';

import { ISearchBar } from '../../models/view/ISearchBar';
import { Button, Input, Wrapper } from './styles';

const handler = function _handler(fn: (term: string) => void) {
  return function oHandler(ev: React.FormEvent<HTMLInputElement>) {
    const value: string = ev.currentTarget.value;
    fn(value);
  }
}

const handleKeyUp= function _handleKeyUp(fn: () => void) {
  return function oHandler(ev: React.KeyboardEvent<HTMLInputElement>) {
    if(ev.keyCode === 13) {
      fn();
    }
  }
}

const SearchBar: React.SFC<ISearchBar> = ({ placeHolder, handleInput, searchTerm, handleSearch, handleClear }) => (
  <Wrapper>
    <Input
      placeholder={placeHolder}
      onInput={handler(handleInput)}
      onKeyUp={handleKeyUp(handleSearch)}
      value={searchTerm} />
      {
        searchTerm.length > 0 ? <Button onClick={handleClear} /> : null
      }
  </Wrapper>
)

export default SearchBar
