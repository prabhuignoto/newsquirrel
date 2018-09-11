import { DateTime } from "luxon";
import { Fragment } from "react";
import * as React from "react";
import LoaderSize from "../../enums/loaderSize";
import Size from "../../enums/newsStandSize";
import { IArticleCardView } from "../../models/view/IArticleCard";
import Loader from "../loader/loader";
import BlankImage from "./assets/blank.svg";
import EyeSolid from "./assets/eye-solid.svg";

import {
  ArticleCardWrapper,
  CardDescription,
  CardImage,
  CardTitle,
  CheckPreview,
  Controls,
  ImageWrapper,
  PublishDate,
  Publisher,
  StubImage,
  TitleAnchor
} from "./styles";

let handleCheckArticle: (
  url: string,
  id: string,
  fn?: (url: string, id: string) => void
) => React.MouseEventHandler;
handleCheckArticle = (url, id, fn) => {
  return () => {
    if (fn) {
      fn(url, id);
    }
  };
};

const ArticleCard: React.SFC<IArticleCardView> = ({
  title,
  description,
  urlToImage: imgUrl,
  publishedAt,
  source,
  url: articleUrl,
  size,
  id,
  onImageLoaded,
  imageLoaded,
  showArticle,
  checkArticle,
  canEmbedInFrame,
  appMode,
  updateQuickviewUrl
}) => {
  return (
    <ArticleCardWrapper
      size={size}
      // pose={"open"}
      // initialPose={"close"}
      key={articleUrl}
    >
      <Publisher size={size} appMode={appMode}>
        <PublishDate dateTime={publishedAt}>
          {DateTime.fromISO(publishedAt).toLocaleString(
            DateTime.DATETIME_SHORT
          )}
        </PublishDate>
        <Controls className="is-hidden-touch">
          {typeof canEmbedInFrame === "undefined" ? (
            <CheckPreview
              onClick={() => {
                updateQuickviewUrl({
                  variables: {
                    url:articleUrl,
                  }
                })
              }}
            >
              <EyeSolid title="Quick View" />
            </CheckPreview>
          ) : null}
        </Controls>
      </Publisher>
      {size !== Size.IMAGE_FREE ? (
        <Fragment>
          {/* {!imageLoaded ? (
            <StubImage
              src={imgUrl ? imgUrl : BlankImage}
              onLoad={onImageLoaded}
              onError={onImageLoaded}
            />
          ) : null} */}

          <ImageWrapper size={size}>
            {!!imgUrl ? (
              <CardImage size={size} src={imgUrl} />
            ) : (
              <BlankImage />
            )}
            {/* {!imageLoaded ? (
              <Loader start={true} size={LoaderSize.SMALL} stop={false} />
            ) : null} */}
          </ImageWrapper>
        </Fragment>
      ) : null}

      <CardTitle size={size}>
        <TitleAnchor
          appMode={appMode}
          href={articleUrl}
          target="_new"
          title={title}
        >
          {title ? <span>{title}</span> : null}
        </TitleAnchor>
      </CardTitle>

      <CardDescription size={size}>
        {description ? <span>{description}</span> : null}
      </CardDescription>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
