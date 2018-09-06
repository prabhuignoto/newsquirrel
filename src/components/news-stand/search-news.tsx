import * as DateFNS from "date-fns";
import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import ArticleCard from "../../containers/article-card";
import Quickview from '../../containers/quickview';
import { IArticleCard } from "../../models/view/IArticleCard";
import ISearchNews from "../../models/view/ISearchNews";
import ErrorUI from '../error-ui/ui';
import SpinnerSVG from './assets/spinner.svg';
import {
  ArticlesWrapper,
  LoadingText,
  LoadMore,
  LoadMoreWrapper,
  NewsStandWrapper,
  QuickviewWrapper,
  SpinnerWrapper
} from "./styles";
interface IData {
  search: IArticleCard[];
}
import Info from '../info-ui/info-ui';

class SearchNewsQuery extends Query<IData, {}> {}

const query = gql`
  query Search(
    $query: String!
    $from: String!
    $to: String!
    $page: Int!
    $pageSize: Int!
  ) {
    search(
      query: $query
      from: $from
      to: $to
      page: $page
      pageSize: $pageSize
    ) {
      author
      title
      description
      url
      urlToImage
      publishedAt
    }
  }
`;

const SearchNews: React.SFC<ISearchNews> = ({ term, appMode, openQuickView, quickViewOpen, quickViewUrl }) => {
  let page: number = 1;

  const variables = {
    from: DateFNS.format(DateFNS.startOfToday(), "YYYY-MM-DD"),
    page: 1,
    pageSize: 20,
    query: term,
    to: DateFNS.format(DateFNS.endOfToday(), "YYYY-MM-DD")
  };
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
      <SearchNewsQuery
        query={query}
        variables={variables}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          return (
            <div style={{width: '100%'}}>
              {loading ? (
                <LoadingText initialPose={"open"}>Searching ...</LoadingText>
              ) : null}

              {!loading && !error && data!.search.length < 1 ? <Info message="Your search did not match any documents" /> : null}

              {(!error && !loading) || (loading && data!.search) ? (
                <React.Fragment>
                  <ArticlesWrapper>
                    {data!.search.map<React.ReactElement<IArticleCard>>(
                      article => (
                        <ArticleCard {...article} key={article.url} />
                      )
                    )}
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
                    {!loading && data!.search.length > 0 ? <LoadMore
                      onClick={() => {
                        return fetchMore({
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) {
                              return prev;
                            }
                            return Object.assign({}, prev, {
                              search: [
                                ...prev.search,
                                ...fetchMoreResult.search
                              ]
                            });
                          },
                          variables: {
                            page: ++page
                          }
                        });
                      }}
                    >
                      Load More
                    </LoadMore> : null}
                    {loading ? <SpinnerWrapper><SpinnerSVG /></SpinnerWrapper> : null}
                  </LoadMoreWrapper>
                </React.Fragment>
              ) : null}

              {error ? <ErrorUI message="Search service is currently down. Please check back after some time."/> : null}
            </div>
          );
        }}
      </SearchNewsQuery>)
      }
    </NewsStandWrapper>
  );
};

export default SearchNews;
