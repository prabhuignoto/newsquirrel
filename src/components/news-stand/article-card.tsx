import { DateTime } from 'luxon';
import * as React from 'react';
import LazyLoad from 'react-lazyload';

import NewsStandSize from '../../enums/newsStandSize';
import { IArticleCard } from '../../models/view/IArticleCard';
import BlankImage from './assets/picture.svg';
import {
  ArticleCardWrapper,
  CardDescription,
  CardImage,
  CardTitle,
  PublishDate,
  PublishedBy,
  Publisher,
  TitleAnchor,
} from './styles';

const ArticleCard: React.SFC<IArticleCard> = ({title, description, thumbnailUrl, publishedAt, source, articleUrl, size }) => {
  return (
      <ArticleCardWrapper size={size}>
        {size === NewsStandSize.COZY ? 
        <Publisher>
          <PublishDate>{DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATETIME_SHORT)}</PublishDate>
          <PublishedBy>{source}</PublishedBy>
        </Publisher> : null }
        {size !== NewsStandSize.IMAGE_FREE ? <LazyLoad height="30">
            <CardImage thumbnailUrl={thumbnailUrl ? thumbnailUrl : BlankImage} size={size}/>
        </LazyLoad> : null}
        <CardTitle size={size}>
          <TitleAnchor href={articleUrl} target="_new">{title}</TitleAnchor>
        </CardTitle>
        {size === NewsStandSize.COZY || size === NewsStandSize.IMAGE_FREE ? <CardDescription>{description}</CardDescription> : null }
      </ArticleCardWrapper>
  )
}

export default ArticleCard;