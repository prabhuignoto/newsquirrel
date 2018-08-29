import * as React from 'react';

import Filters from '../../containers/filters';
import NewsStandSizer from '../../containers/newsstand-sizer';
import NewsStand from '../../containers/newstand-headlines';
import Sortby from '../../containers/sortby';
import { FilterWrapper, SortbyWrapper, Toolbar, Wrapper } from './styles';

const TopHeadlines = () => {
  return (
    <Wrapper data-testid="rt-top-headlines">
      <FilterWrapper>
        <Filters />
      </FilterWrapper>
      <Toolbar className="is-hidden-mobile">
        <SortbyWrapper>
          <Sortby />
        </SortbyWrapper>
        <NewsStandSizer />
      </Toolbar>
      <NewsStand />
    </Wrapper>
  )
}

export default TopHeadlines;
