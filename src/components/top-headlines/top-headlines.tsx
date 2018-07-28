import * as React from 'react';

import Filters from '../../containers/filters';
import NewsStand from '../../containers/newstand-headlines';
import { Wrapper } from './styles';

const TopHeadlines = () => {
  return (
    <Wrapper>
      <div style={{width: '100%', marginBottom: '1rem'}}>
        <Filters />
      </div>
      <NewsStand />
    </Wrapper>
  )
}

export default TopHeadlines;
