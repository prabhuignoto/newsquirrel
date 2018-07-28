import { DateTime } from 'luxon';
import * as React from 'react';
import LazyLoad from "react-lazyload";
import { IArticleCard } from '../../models/view/IArticleCard';
import Svg from './assets/picture.svg';

import {
  ArticleCardWrapper,
  CardDescription,
  CardThumbnail,
  CardTitle,
  PublishDate,
  PublishedBy,
  Publisher,
  TitleAnchor,
} from './styles';

const ArticleCard: React.SFC<IArticleCard> = ({title, description, thumbnailUrl, publishedAt, source, articleUrl }) => {
  return (
      <ArticleCardWrapper>
        <Publisher>
          <PublishDate>{DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATETIME_SHORT)}</PublishDate>
          <PublishedBy>{source}</PublishedBy>
        </Publisher>
        <LazyLoad height="30">
          <CardThumbnail src={thumbnailUrl ? thumbnailUrl : Svg} />
        </LazyLoad>
        <CardTitle><TitleAnchor href={articleUrl} target="_new">{title}</TitleAnchor></CardTitle>
        <CardDescription>{description}</CardDescription>
      </ArticleCardWrapper>
  )
}

export default ArticleCard;