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
        {
          Array.from(Array(10).keys()).map((x, idx) => (
            <div key={idx} style={{visibility: 'hidden', flexGrow: 1, flexBasis: '250px'}}/>
          ))
        }
      </ArticlesWrapper>
    </NewsStandWrapper>
  )
}

export default NewsStand;
