import * as React from "react";
import { Spring } from "react-spring";
import Thumbnail from "../../containers/thumbnail";
import Size from "../../enums/newsStandSize";
import { IArticleCardView } from "../../models/view/IArticleCard";
import CardDescription from "./card-description";
import CardTitle from "./card-title";
import Publisher from "./publisher";

import { ArticleCardWrapper } from "./styles";

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
      {/* {size !== Size.IMAGE_FREE ? <Thumbnail imgUrl={imgUrl} /> : null} */}
      <Thumbnail url={imgUrl} />
      <CardTitle appMode={appMode} title={title} articleUrl={articleUrl} />
      <CardDescription size={size} description={description} />
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
