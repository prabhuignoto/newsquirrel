import * as React from 'react';

import DarkMode from '../../containers/dark-mode';
import Filters from '../../containers/filters';
import NewsStandSizer from '../../containers/newsstand-sizer';
import NewsStand from '../../containers/newstand-headlines';
import Sortby from '../../containers/sortby';
import { AppMode } from '../../enums/appMode';
import ITopHeadlines from '../../models/view/ITopHeadlines';
import { AppModeWrapper, DarkModeBackdrop, FilterWrapper, SortbyWrapper, Toolbar, Wrapper } from './styles';

const TopHeadlines: React.SFC<ITopHeadlines> = ({appMode}) => {
  return (
    <Wrapper data-testid="rt-top-headlines">
      <FilterWrapper>
        <Filters />
      </FilterWrapper>
      <Toolbar appMode={appMode}>
        <AppModeWrapper>
          <DarkMode />
        </AppModeWrapper>
        <SortbyWrapper>
          <Sortby />
        </SortbyWrapper>
        <NewsStandSizer />
      </Toolbar>
      <NewsStand />
      <DarkModeBackdrop show={appMode.value === AppMode.DARK ? 1 : 0} />
    </Wrapper>
  )
}

export default TopHeadlines;
