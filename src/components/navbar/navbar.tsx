import * as React from 'react';
import { Fragment } from "react";
import CountryDropdown from '../../containers/country-dropdown';
import ViewPort from '../../enums/viewPort';
import { CountryDropdownWrapper, NavBrand, NavBrandText, Wrapper } from './styles';

const Navbar = () => {
  return (
    <Wrapper className="navbar" role="navigation" data-testid="rt-navbar">
      <NavBrand className="nav-brand">
        <NavBrandText vwPort={ViewPort.MOB}>Newsquirrel</NavBrandText>
      </NavBrand>
        <Fragment>
          <CountryDropdownWrapper
            className="navbar-item">
              <CountryDropdown />
          </CountryDropdownWrapper>
        </Fragment>
      {/* <Loader /> */}
    </Wrapper>
  )
}

export default Navbar
