import * as React from "react";

import ArticleCard from "../../containers/article-card";
import { IArticleCard } from "../../models/view/IArticleCard";
import { INewsStand } from "../../models/view/INewsStand";
import {
  ArticlesWrapper,
  LoadingText,
  NewsStandWrapper,
  QuickViewOverlay
} from "./styles";

const NewsStand: React.SFC<INewsStand> = ({
  articleCards,
  appMode,
  quickViewOpen
}) => {
  const articlesLength = articleCards.length;
  return (
    <NewsStandWrapper appMode={appMode}>
      <LoadingText
        pose={articlesLength > 0 ? "close" : "open"}
        initialPose={"open"}
      >
        Loading News ...
      </LoadingText>
      <ArticlesWrapper>
        {articleCards.map<React.ReactElement<IArticleCard>>(article => (
          <ArticleCard {...article} key={article.id} />
        ))}
        {Array.from(Array(10).keys()).map((x, idx) => (
          <div
            key={idx}
            style={{ visibility: "hidden", flexGrow: 1, flexBasis: "300px" }}
          />
        ))}
      </ArticlesWrapper>
    </NewsStandWrapper>
  );
};

export default NewsStand;
