import * as React from "react";

import DarkMode from "../../containers/dark-mode";
import Filters from "../../containers/filters";
import NewsStandSizer from "../../containers/newsstand-sizer";
import NewsStand from '../../containers/newstand-headlines';
import SearchBox from "../../containers/search-box";
import SearchNews from "../../containers/search-news";
import { AppMode } from "../../enums/appMode";
import ITopHeadlines from "../../models/view/ITopHeadlines";
import {
  AppModeWrapper,
  DarkModeBackdrop,
  FilterWrapper,
  Toolbar,
  Wrapper
} from "./styles";

const TopHeadlines: React.SFC<ITopHeadlines> = ({ appMode, searchTerm, country, category, quickView }) => {
  return (
    <Wrapper data-testid="rt-top-headlines">
      <FilterWrapper>
        <Filters />
      </FilterWrapper>
      <Toolbar appMode={appMode} className="columns is-multiline">
        <div className="column is-5-desktop is-6-fullhd is-12-tablet is-paddingless" style={{marginRight: 'auto'}}>
          <SearchBox />
        </div>
        <div className="is-2-fullhd" />
        <div className="column is-12-mobile is-5-tablet is-3-desktop is-2-fullhd">
          <AppModeWrapper>
            <DarkMode />
          </AppModeWrapper>
        </div>
        <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-fullhd">
          <NewsStandSizer />
        </div>
      </Toolbar>
      { searchTerm ? <SearchNews term={searchTerm}/> : <NewsStand country={country} category={category} quickViewUrl={quickView}/>}
      <DarkModeBackdrop show={appMode.value === AppMode.DARK ? 1 : 0} />
    </Wrapper>
  );
};

export default TopHeadlines;
