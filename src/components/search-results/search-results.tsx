import * as React from 'react';
import { Fragment } from "react";

import NewsStand from '../../containers/newstand-search';
import SortBy from '../../containers/sortby';
import { ISearchResults } from '../../models/view/ISearchResults';
import { Wrapper } from './styles';

const SearchResults: React.SFC<ISearchResults> = ({ hasResults }) => {
  return (
    <Wrapper>
      {hasResults ? <Fragment>
        <div style={{ alignSelf: 'flex-end' }}>
          <SortBy />
        </div>
        <NewsStand />
      </Fragment> : null}
    </Wrapper>
  )
}

export default SearchResults
