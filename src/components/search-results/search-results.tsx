import * as React from 'react';
import { Fragment } from 'react';

import NewsstandSizer from '../../containers/newsstand-sizer';
import NewsStand from '../../containers/newstand-search';
import SortBy from '../../containers/sortby';
import { ISearchResults } from '../../models/view/ISearchResults';
import { Tools, ToolWrapper, Wrapper } from './styles';

const SearchResults: React.SFC<ISearchResults> = ({ hasResults }) => {
  return (
    <Wrapper>
      {hasResults ? <Fragment>
        <Tools>
          <ToolWrapper>
            <SortBy />
          </ToolWrapper>
          <ToolWrapper>
            <NewsstandSizer />
          </ToolWrapper>
        </Tools>
        <NewsStand />
      </Fragment> : null}
    </Wrapper>
  )
}

export default SearchResults
