import * as React from 'react';
import { Fragment } from "react";
import CountryDropdown from '../../containers/country-dropdown';
import Loader from '../../containers/loader';
import PocketLogin from '../../containers/pocketLogin';
import SearchBar from '../../containers/search-bar';
import ReadingModeEnum from '../../enums/readingMode';
import ViewPort from '../../enums/viewPort';
import { INavBar } from '../../models/view/INavBar';
import { CountryDropdownWrapper, NavBrand, NavBrandText, ReadmodeWrapper, SearchbarWrapper, Wrapper } from './styles';

const Navbar: React.SFC<INavBar> = ({ mode }) => {
  return (
    <Wrapper className="navbar" role="navigation" data-testid="rt-navbar">
      <NavBrand className="nav-brand">
        <NavBrandText vwPort={ViewPort.MOB}>Newsquirrel</NavBrandText>
      </NavBrand>
      {mode === ReadingModeEnum.SEARCH_EVERYTHING ?
        <Fragment>
          <SearchbarWrapper
            mode={mode}
            className="navbar-item is-hidden-desktop"
            vwPort={ViewPort.MOB}
          >
            <SearchBar />
          </SearchbarWrapper>
          <SearchbarWrapper
            mode={mode}
            className="navbar-item is-hidden-touch"
            vwPort={ViewPort.DESK}
          >
            <SearchBar />
          </SearchbarWrapper>
        </Fragment> : null}

      {mode === ReadingModeEnum.TOP_HEADLINES ?
        <Fragment>
          <PocketLogin />
          <CountryDropdownWrapper
            vwPort={ViewPort.DESK}
            mode={mode}
            className="navbar-item is-hidden-touch">
              <CountryDropdown />
          </CountryDropdownWrapper>
          <CountryDropdownWrapper
            vwPort={ViewPort.MOB}
            mode={mode}
            className="navbar-item is-hidden-desktop">
            <CountryDropdown />
          </CountryDropdownWrapper>
        </Fragment> : null}
      <Loader />
    </Wrapper>
  )
}

export default Navbar
