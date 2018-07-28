import Styled from 'styled-components';

import ReadingMode from '../../enums/readingMode';

const Wrapper = Styled.nav `
  height: 150px;
  background: #EEF3F5;
  position: relative;
`;

const NavBrand = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;

const NavBrandText = Styled.span`
  font-size: 2rem;
  color: #EF233C;
  padding-bottom:3px;
`;

const CountryDropdownWrapper = Styled.div<{mode: ReadingMode}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
`;

const SearchbarWrapper = Styled.div<{mode: ReadingMode}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  min-width: 350px;
`;

const ReadmodeWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;



export {
  Wrapper,
  NavBrand,
  NavBrandText,
  CountryDropdownWrapper,
  SearchbarWrapper,
  ReadmodeWrapper,
}