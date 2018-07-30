import { DateTime } from 'luxon';
import { Fragment } from 'react';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import * as uniqid from 'uniqid';

import LoaderSize from '../../enums/loaderSize';
import Size from '../../enums/newsStandSize';
import { IArticleCard } from '../../models/view/IArticleCard';
import Loader from '../loader/loader';
import BlankImage from './assets/blank.svg';
import {
  ArticleCardWrapper,
  CardDescription,
  CardImage,
  CardTitle,
  PublishDate,
  PublishedBy,
  Publisher,
  StubImage,
  TitleAnchor,
} from './styles';

import LineClamp from 'shiitake';
const ArticleCard: React.SFC<IArticleCard> = ({
  title, description, thumbnailUrl: imgUrl,
  publishedAt, source, articleUrl,
  size, id, onImageLoaded, imageLoaded }) => {
  return (
    <ArticleCardWrapper size={size} key={uniqid()}>

      <Publisher size={size}>
        <PublishDate>{DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATETIME_SHORT)}</PublishDate>
        <PublishedBy>{source}</PublishedBy>
      </Publisher>

      {size !== Size.IMAGE_FREE ?
        <Fragment>{!imageLoaded ?
          <LazyLoad height={100}>
            <StubImage src={imgUrl ? imgUrl : BlankImage} onLoad={onImageLoaded} onError={onImageLoaded} />
            </LazyLoad>:
            null}
          <CardImage thumbnailUrl={(imageLoaded && !!imgUrl) ? imgUrl : BlankImage} size={size} >
            {!imageLoaded ? <Loader start={true} size={LoaderSize.SMALL} /> : null}
          </CardImage>
        </Fragment>
        : null}

      <CardTitle size={size}>
        <TitleAnchor href={articleUrl} target="_new" title={title}>
          {title ?
          <LineClamp lines={size === Size.COZY ? 4 : 3} renderFullOnServer={true}>
            {title}
          </LineClamp> : null}
        </TitleAnchor>
      </CardTitle>

      <CardDescription size={size}>
        {/* {description ?  */}
        <LineClamp lines={4}>
          {description}
        </LineClamp> : null}
      </CardDescription>
    </ArticleCardWrapper>
  )
}

export default ArticleCard;