import * as React from "react";
import Thumbnail from "../../containers/thumbnail";
import { IArticleCardView } from "../../models/view/IArticleCard";
import CardDescription from "./card-description";
import CardTitle from "./card-title";
import Publisher from "./publisher";

import NewsStandSize from "../../enums/newsStandSize";
import { ArticleCardWrapper, BlankImage } from "./styles";

const ArticleCard: React.SFC<IArticleCardView> = ({
  title,
  description,
  urlToImage: imgUrl,
  publishedAt,
  url: articleUrl,
  size,
  id,
  onImageLoaded,
  imageLoaded,
  appMode,
  updateQuickviewUrl
}) => {
  return (
    <ArticleCardWrapper key={articleUrl} size={size}>
      <Publisher
        appMode={appMode}
        articleUrl={articleUrl}
        publishedAt={publishedAt}
        size={size}
        updateQuickviewUrl={updateQuickviewUrl}
      />
      {size !== NewsStandSize.IMAGE_FREE && imgUrl ? (
        <Thumbnail url={imgUrl} appMode={appMode} />
      ) : null}
      {!imgUrl && size !== NewsStandSize.IMAGE_FREE ? (
        <BlankImage style={{ height: "10rem" }}>Newsquirrel</BlankImage>
      ) : null}
      <CardTitle appMode={appMode} title={title} articleUrl={articleUrl} />
      <CardDescription size={size} description={description} />
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
