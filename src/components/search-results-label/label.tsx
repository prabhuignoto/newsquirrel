import * as React from 'react';

import { ISearchResultsLabel } from '../../models/view/ISearchResultsLabel';
import { Wrapper } from './style';


const SearchResultsLabel: React.SFC<ISearchResultsLabel> = ({resultsCount}) => (
  <Wrapper>
    About {resultsCount} News items
  </Wrapper>
)

export default SearchResultsLabel;
