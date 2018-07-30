import * as React from 'react';

import ArticleCard from '../../containers/article-card';
import { IArticleCard } from '../../models/view/IArticleCard';
import { INewsStand } from '../../models/view/INewsStand';
import { ArticlesWrapper, NewsStandWrapper } from './styles';

const NewsStand: React.SFC<INewsStand> = ({articleCards}) => {
  return (
    <NewsStandWrapper>
      <ArticlesWrapper>
        {articleCards.map<React.ReactElement<IArticleCard>>(
          article => <ArticleCard {...article} key={article.id}/>)
        }
      </ArticlesWrapper>
    </NewsStandWrapper>
  )
}

export default NewsStand;
