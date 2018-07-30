import * as React from 'react';

import CountryDropdown from '../../containers/country-dropdown';
import Flag from '../../containers/flag';
import Loader from '../../containers/loader';
import ReadingMode from '../../containers/reading-mode';
import SearchBar from '../../containers/search-bar';
import ReadingModeEnum from '../../enums/readingMode';
import { INavBar } from '../../models/view/INavBar';
import {
  CountryDropdownWrapper,
  FlagWrapper,
  NavBrand,
  NavBrandText,
  ReadmodeWrapper,
  SearchbarWrapper,
  Wrapper,
} from './styles';


const Navbar: React.SFC<INavBar> = ({ mode }) => {
  return (
    <Wrapper className="navbar" role="navigation">

      <ReadmodeWrapper className="navbar-item">
        <ReadingMode />
      </ReadmodeWrapper>

      {mode === ReadingModeEnum.SEARCH_EVERYTHING ?
        <SearchbarWrapper mode={mode} className="navbar-item">
          <SearchBar />
        </SearchbarWrapper> : null}

      {mode === ReadingModeEnum.TOP_HEADLINES ?
        <CountryDropdownWrapper mode={mode} className="navbar-item">
          <CountryDropdown />
        </CountryDropdownWrapper> : null}
      <NavBrand className="nav-brand">
        <NavBrandText>News Squirrel</NavBrandText>
        <FlagWrapper>
          <Flag />
        </FlagWrapper>
      </NavBrand>
      <Loader />
    </Wrapper>
  )
}

export default Navbar
