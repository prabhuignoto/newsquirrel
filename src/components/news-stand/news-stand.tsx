import * as React from "react";
import ArticleCard from "../../containers/article-card";
import Quickview from "../../containers/quickview";
import { IArticleCard } from "../../models/view/IArticleCard";
import { INewsStand } from "../../models/view/INewsStand";
import ErrorUI from "../error-ui/ui";
import {
  ArticlesWrapper,
  LoadingText,
  NewsStandWrapper,
  QuickviewWrapper
} from "./styles";

const NewsStand: React.SFC<INewsStand> = ({
  appMode,
  openQuickView,
  loading,
  error,
  data,
}) => {
  return (
    <NewsStandWrapper appMode={appMode}>
      {openQuickView ? (
        <QuickviewWrapper
          pose={openQuickView ? "open" : "close"}
          initialPose="close"
        >
          <Quickview />
        </QuickviewWrapper>
      ) : (
        <div style={{ width: "100%" }}>
          {loading ? (
            <LoadingText initialPose={"open"}>Loading News ...</LoadingText>
          ) : null}
          {!loading && !error ? (
            <ArticlesWrapper>
              {
                data!.getHeadlines.map((article: IArticleCard) => (
                <ArticleCard {...article} key={article.title} />
              ))}
              {Array.from(Array(10).keys()).map((x, idx) => (
                <div
                  key={idx}
                  style={{
                    flexBasis: "300px",
                    flexGrow: 1,
                    visibility: "hidden"
                  }}
                />
              ))}
            </ArticlesWrapper>
          ) : null}
          {error ? (
            <ErrorUI message="Failed to load the Headlines currently. Please check back in a while." />
          ) : null}
        </div>
      )}
    </NewsStandWrapper>
  );
};

export default NewsStand;
