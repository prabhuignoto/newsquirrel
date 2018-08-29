import * as React from "react";

import ArticleCard from "../../containers/article-card";
import { IArticleCard } from "../../models/view/IArticleCard";
import { INewsStand } from "../../models/view/INewsStand";
import { ArticlesWrapper, LoadingText, NewsStandWrapper, QuickviewWrapper } from "./styles";

const NewsStand: React.SFC<INewsStand> = ({
  articleCards,
  detailedPaneOpen,
  appMode
}) => {
  return (
    <NewsStandWrapper appMode={appMode}>
      {articleCards.length < 1 ? (
        <LoadingText>Loading News ...</LoadingText>
      ) :
        <ArticlesWrapper show={detailedPaneOpen ? 0 : 1}>
          {articleCards.map<React.ReactElement<IArticleCard>>(article => (
            <ArticleCard {...article} key={article.id} />
          ))}
          {Array.from(Array(10).keys()).map((x, idx) => (
            <div
              key={idx}
              style={{ visibility: "hidden", flexGrow: 1, flexBasis: "300px" }}
            />
          ))}
      </ArticlesWrapper> }
    </NewsStandWrapper>
  );
};

export default NewsStand;
