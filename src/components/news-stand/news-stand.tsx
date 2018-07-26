import * as React from 'react';
import { IArticleCard } from '../../models/view/IArticleCard';
import { INewsStand } from '../../models/view/INewsStand';
import ArticleCard from './article-card';
import { NewsStandWrapper } from "./styles";

const NewsStand: React.SFC<INewsStand> = ({articleCards}) => {
  return (
    <NewsStandWrapper>
      {articleCards.map<React.ReactElement<IArticleCard>>(article => <ArticleCard {...article} key={article.id} />)}
    </NewsStandWrapper>
  )
}

export default NewsStand;
