import Styled from '@emotion/styled';

import ViewPort from '../../enums/viewPort';

const Wrapper = Styled('nav') `
  min-height: 5rem;
  background: #EEF3F5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #2B2D42;
`;

const NavBrand = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 1.5rem;
  margin-right: auto;
  color:  linear-gradient(to right, rgba(217,4,40,1) 0%, rgba(43,45,66,1) 70%, rgba(43,45,66,1) 100%);
`;

const NavBrandText = Styled('span')<{vwPort: ViewPort}>`
  font-size: ${p => p.vwPort === ViewPort.DESK ? '2rem' : '1.75rem'};
  font-weight: 500;
  color: #EDF2F4;
  padding-bottom:3px;
  white-space: nowrap;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.2rem;
    position: absolute;
    bottom: -0.1rem;
    background: #EF233C;
  }
`;

const CountryDropdownWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1.5rem;
`;

const SearchbarWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  margin-right: 'auto';
`;

const ReadmodeWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlagWrapper = Styled('div')`
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