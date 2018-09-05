import * as DateFNS from "date-fns";
import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import ArticleCard from "../../containers/article-card";
import { IArticleCard } from "../../models/view/IArticleCard";
import ISearchNews from "../../models/view/ISearchNews";
import SpinnerSVG from './assets/spinner.svg';
import {
  ArticlesWrapper,
  LoadingText,
  LoadMore,
  LoadMoreWrapper,
  NewsStandWrapper,
  SpinnerWrapper
} from "./styles";

interface IData {
  search: IArticleCard[];
}

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

const SearchNews: React.SFC<ISearchNews> = ({ term, appMode }) => {
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
      <SearchNewsQuery
        query={query}
        variables={variables}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          return (
            <div>
              {loading ? (
                <LoadingText initialPose={"open"}>Searching ...</LoadingText>
              ) : null}

              {(!error && !loading) || (loading && data!.search) ? (
                <React.Fragment>
                  <ArticlesWrapper>
                    {data!.search.map<React.ReactElement<IArticleCard>>(
                      article => (
                        <ArticleCard {...article} key={article.url} />
                      )
                    )}
                  </ArticlesWrapper>
                  <LoadMoreWrapper>
                    {!loading ? <LoadMore
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
                    </LoadMore> : <SpinnerWrapper><SpinnerSVG /></SpinnerWrapper>}
                  </LoadMoreWrapper>
                </React.Fragment>
              ) : null}
            </div>
          );
        }}
      </SearchNewsQuery>
    </NewsStandWrapper>
  );
};

export default SearchNews;
