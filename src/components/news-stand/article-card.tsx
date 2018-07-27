import { DateTime } from 'luxon';
import * as React from 'react';
import LazyLoad from "react-lazyload";
import { IArticleCard } from '../../models/view/IArticleCard';
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
    <LazyLoad>
      <ArticleCardWrapper>
        <Publisher>
          <PublishDate>{DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATETIME_SHORT)}</PublishDate>
          <PublishedBy>{source}</PublishedBy>
        </Publisher>
        <CardThumbnail thumbnailUrl={thumbnailUrl} />
        <CardTitle><TitleAnchor href={articleUrl} target="_new">{title}</TitleAnchor></CardTitle>
        <CardDescription>{description}</CardDescription>
      </ArticleCardWrapper>
    </LazyLoad>
  )
}

export default ArticleCard;