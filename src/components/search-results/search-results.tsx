import { Fragment } from 'react';
import * as React from 'react';
import * as uuid from 'uniqid';

import Error from '../../containers/error';
import FilterByTime from '../../containers/filter-by-time';
import NewsstandSizer from '../../containers/newsstand-sizer';
import NewsStand from '../../containers/newstand-search';
import Pager from '../../containers/pager';
import SearchResultsLabel from '../../containers/search-results-label';
import SortBy from '../../containers/sortby';
import { ISearchResults } from '../../models/view/ISearchResults';
import SearchHome from '../info-pages/search-home';
import { SearchToolsWrapper2, Tools, ToolWrapper, Wrapper } from './styles';

const SearchResults: React.SFC<ISearchResults> = ({ hasResults, failureResponse }) => {
  return (
    <Wrapper hasResults={hasResults}>
        <Fragment>
          <Tools>
            <ToolWrapper>
              <SortBy />
            </ToolWrapper>
            <ToolWrapper>
              <NewsstandSizer />
            </ToolWrapper>
            <ToolWrapper>
              <FilterByTime />
            </ToolWrapper>
          </Tools>

          { hasResults ? 
            <Fragment>
              <SearchToolsWrapper2>
                <SearchResultsLabel />
                <Pager key={uuid()}/>
              </SearchToolsWrapper2>
              <NewsStand />
              {/* <Pager /> */}
            </Fragment> : null}
          
        </Fragment>
      { !hasResults &&  !failureResponse ? <SearchHome /> : null}
      { failureResponse ? <Error response={failureResponse} /> : null}
    </Wrapper>
  )
}

export default SearchResults
