import Styled from 'styled-components';

import ReadingMode from '../../enums/readingMode';

const Wrapper = Styled.nav `
  min-height: 100px;
  background: #EEF3F5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavBrand = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 2rem;
`;

const NavBrandText = Styled.span`
  font-size: 2rem;
  color: #EF233C;
  padding-bottom:3px;
  white-space: nowrap;
`;

const CountryDropdownWrapper = Styled.div<{mode: ReadingMode}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const SearchbarWrapper = Styled.div<{mode: ReadingMode}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
`;

const ReadmodeWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`;

const FlagWrapper = Styled.div`
  position: absolute;
  top: -13px;
  right: -1px;
`;

export {
  Wrapper,
  NavBrand,
  NavBrandText,
  CountryDropdownWrapper,
  SearchbarWrapper,
  ReadmodeWrapper,
  FlagWrapper,
}