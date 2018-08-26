import { DateTime } from "luxon";
import { Fragment } from "react";
import * as React from "react";
import LazyLoad from "react-lazyload";
import Truncate from "react-truncate";
import * as uniqid from "uniqid";

import LoaderSize from "../../enums/loaderSize";
import Size from "../../enums/newsStandSize";
import { IArticleCard } from "../../models/view/IArticleCard";
import Loader from "../loader/loader";
import BlankImage from "./assets/blank.svg";
import {
  ArticleCardWrapper,
  CardDescription,
  CardImage,
  CardTitle,
  ImageWrapper,
  PublishDate,
  PublishedBy,
  Publisher,
  StubImage,
  TitleAnchor
} from "./styles";

const ArticleCard: React.SFC<IArticleCard> = ({
  title,
  description,
  thumbnailUrl: imgUrl,
  publishedAt,
  source,
  articleUrl,
  size,
  id,
  onImageLoaded,
  imageLoaded
}) => {
  return (
    <ArticleCardWrapper size={size} key={uniqid()}>
      <Publisher size={size}>
        <PublishDate dateTime={publishedAt}>
          {DateTime.fromISO(publishedAt).toLocaleString(
            DateTime.DATETIME_SHORT
          )}
        </PublishDate>
        <PublishedBy>{source}</PublishedBy>
      </Publisher>

      {size !== Size.IMAGE_FREE ? (
        <Fragment>
          {!imageLoaded ? (
            <LazyLoad height={50}>
              <StubImage
                src={imgUrl ? imgUrl : BlankImage}
                onLoad={onImageLoaded}
                onError={onImageLoaded}
              />
            </LazyLoad>
          ) : null}

          <ImageWrapper size={size}>
            <CardImage
              thumbnailUrl={imageLoaded && !!imgUrl ? imgUrl : BlankImage}
              size={size}
            />
            {!imageLoaded ? (
              <Loader start={true} size={LoaderSize.SMALL} stop={false} />
            ) : null}
          </ImageWrapper>
        </Fragment>
      ) : null}

      <CardTitle size={size}>
        <TitleAnchor href={articleUrl} target="_new" title={title}>
          {title ? <Truncate lines={3}>{title}</Truncate> : null}

          {/* {title} */}
        </TitleAnchor>
      </CardTitle>

      <CardDescription size={size}>
        {description ? <Truncate lines={4}>{description}</Truncate> : null}
      </CardDescription>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
