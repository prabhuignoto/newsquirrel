import * as React from "react";
import ArticleCard from "../../containers/article-card";
import Quickview from "../../containers/quickview";
import { IArticleCard } from "../../models/view/IArticleCard";
import ISearchNews from "../../models/view/ISearchNews";
import ErrorUI from "../error-ui/ui";
import Info from "../info-ui/info-ui";
import BackSVG from "./assets/chevron-left.svg";
import SpinnerSVG from "./assets/spinner.svg";
import {
  ArticlesWrapper,
  Back,
  BackIconWrapper,
  BackWrapper,
  LoadingText,
  LoadMore,
  LoadMoreWrapper,
  MessageWrapper,
  NewsStandWrapper,
  QuickviewWrapper,
  SpinnerWrapper,
} from "./styles";
let page = 1;


const SearchNews: React.SFC<ISearchNews> = ({
  term,
  appMode,
  openQuickView,
  quickViewOpen,
  quickViewUrl,
  search,
  loading,
  error,
  fetchMore,
  clearSearch,
}) => {
  return (
    <NewsStandWrapper appMode={appMode}>
      {openQuickView ? (
        <QuickviewWrapper>
          <Quickview />
        </QuickviewWrapper>
      ) : (
        <div style={{ width: "100%" }}>
          {(!error && !loading) || (loading && search) ? (
            <React.Fragment>
              <BackWrapper>
                <Back onClick={clearSearch}>
                  <BackIconWrapper>
                    <BackSVG />
                  </BackIconWrapper> Back to Headlines
                </Back>
              </BackWrapper>
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

          {loading ? (
            <LoadingText>Searching ...</LoadingText>
          ) : null}

          {!loading && !error && search.length < 1 ? (
            <MessageWrapper>
              <Info message="Your search did not match any documents" />
            </MessageWrapper>
          ) : null}

          {error ? (
            <MessageWrapper>
              <ErrorUI message="Search service is currently down. Please check back after some time." />
            </MessageWrapper>
          ) : null}
        </div>
      )}
    </NewsStandWrapper>
  );
};

export default SearchNews;
