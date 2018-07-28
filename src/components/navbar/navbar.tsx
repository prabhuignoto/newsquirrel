import * as React from 'react';

import CountryDropdown from '../../containers/country-dropdown';
import Loader from '../../containers/loader';
import ReadingMode from '../../containers/reading-mode';
import SearchBar from '../../containers/search-bar';
import ReadingModeEnum from '../../enums/readingMode';
import { INavBar } from '../../models/view/INavBar';
import { CountryDropdownWrapper, NavBrand, NavBrandText, ReadmodeWrapper, SearchbarWrapper, Wrapper } from './styles';


const Navbar: React.SFC<INavBar> = ({ mode }) => {
  return (
    <Wrapper className="navbar" role="navigation">
      <NavBrand className="nav-brand">
        <NavBrandText>News Squirrel</NavBrandText>
      </NavBrand>
      <ReadmodeWrapper className="navbar-item">
          <ReadingMode />
      </ReadmodeWrapper>

      {mode === ReadingModeEnum.SEARCH_EVERYTHING ?
        <SearchbarWrapper mode={mode}>
          <div className="navbar-item">
            <SearchBar />
          </div>
        </SearchbarWrapper> : null}
        
      {mode === ReadingModeEnum.TOP_HEADLINES ?
        <CountryDropdownWrapper mode={mode}>
          <div className="navbar-item">
            <CountryDropdown />
          </div>
        </CountryDropdownWrapper> : null}
        <Loader />
    </Wrapper>
  )
}

export default Navbar
