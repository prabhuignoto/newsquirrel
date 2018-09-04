import * as React from 'react';

import TopHeadlines from '../../containers/top-headlines';
import { IHome } from '../../models/view/IHome';
import { Wrapper } from './styles';


const Home: React.SFC<IHome> = ({ mode }) => (
  <Wrapper>
      <TopHeadlines />
  </Wrapper>
)

export default Home;
