import * as React from 'react';

import Filters from '../../containers/filters';
import NewsStandSizer from '../../containers/newsstand-sizer';
import NewsStand from '../../containers/newstand-headlines';
import { FilterWrapper, NewsStandWrapper, Wrapper } from './styles';

const TopHeadlines = () => {
  return (
    <Wrapper data-testid="rt-top-headlines">
      <FilterWrapper>
        <Filters />
      </FilterWrapper>
      <NewsStandWrapper className="is-hidden-mobile">
        <NewsStandSizer />
      </NewsStandWrapper>
      <NewsStand />
    </Wrapper>
  )
}

export default TopHeadlines;
