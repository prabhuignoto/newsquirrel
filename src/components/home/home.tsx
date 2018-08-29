import * as React from 'react';

import SearchResults from '../../containers/search-results';
import TopHeadlines from '../../containers/top-headlines';
import ReadingMode from '../../enums/readingMode';
import { IHome } from '../../models/view/IHome';
import { Wrapper } from './styles';


const Home: React.SFC<IHome> = ({ mode }) => (
  <Wrapper>
    {mode === ReadingMode.TOP_HEADLINES ?
      <TopHeadlines /> : null}
    {mode === ReadingMode.SEARCH_EVERYTHING ?
      <SearchResults /> : null}
  </Wrapper>
)

export default Home;
