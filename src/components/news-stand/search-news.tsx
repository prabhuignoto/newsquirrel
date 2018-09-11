import * as React from "react";
import ArticleCard from "../../containers/article-card";
import Quickview from "../../containers/quickview";
import { IArticleCard } from "../../models/view/IArticleCard";
import ISearchNews from "../../models/view/ISearchNews";
import ErrorUI from "../error-ui/ui";
import Info from "../info-ui/info-ui";
import SpinnerSVG from "./assets/spinner.svg";
import {
  ArticlesWrapper,
  LoadingText,
  LoadMore,
  LoadMoreWrapper,
  NewsStandWrapper,
  QuickviewWrapper,
  SpinnerWrapper
} from "./styles";

const SearchNews: React.SFC<ISearchNews> = ({
  term,
  appMode,
  openQuickView,
  quickViewOpen,
  quickViewUrl,
  search,
  loading,
  error,
  fetchMore
}) => {
  let page = 1;
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
            <LoadingText initialPose={"open"}>Searching ...</LoadingText>
          ) : null}

          {!loading && !error && search.length < 1 ? (
            <Info message="Your search did not match any documents" />
          ) : null}

          {(!error && !loading) || (loading && search) ? (
            <React.Fragment>
              <ArticlesWrapper>
                {search.map((article: IArticleCard) => (
                  <ArticleCard {...article} key={article.url} />
                ))}
                {Array.from(Array(5).keys()).map((x, idx) => (
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
              <LoadMoreWrapper>
                {!loading && search.length > 0 ? (
                  <LoadMore
                    onClick={() => {
                      return fetchMore({
                        updateQuery: (prev, { fetchMoreResult }) => {
                          if (!fetchMoreResult) {
                            return prev;
                          }
                          return Object.assign({}, prev, {
                            search: [...prev.search, ...fetchMoreResult.search]
                          });
                        },
                        variables: {
                          page: ++page
                        }
                      });
                    }}
                  >
                    Load More
                  </LoadMore>
                ) : null}
                {loading ? (
                  <SpinnerWrapper>
                    <SpinnerSVG />
                  </SpinnerWrapper>
                ) : null}
              </LoadMoreWrapper>
            </React.Fragment>
          ) : null}

          {error ? (
            <ErrorUI message="Search service is currently down. Please check back after some time." />
          ) : null}
        </div>
      )}
    </NewsStandWrapper>
  );
};

export default SearchNews;
