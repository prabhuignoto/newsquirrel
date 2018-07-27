import * as React from 'react';

import SortBy from '../../containers/sortby';
import { IArticleCard } from '../../models/view/IArticleCard';
import { INewsStand } from '../../models/view/INewsStand';
import ArticleCard from './article-card';
import { ArticlesWrapper, NewsStandWrapper, SortByWrapper } from './styles';

const NewsStand: React.SFC<INewsStand> = ({articleCards}) => {
  return (
    <NewsStandWrapper>
      <SortByWrapper>
        <SortBy />
      </SortByWrapper>
      <ArticlesWrapper>
        {articleCards.map<React.ReactElement<IArticleCard>>(article => <ArticleCard {...article} key={article.id} />)}
      </ArticlesWrapper>
    </NewsStandWrapper>
  )
}

export default NewsStand;
