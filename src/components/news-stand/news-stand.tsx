import * as React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";
import ArticleCard from "../../containers/article-card";
import { IArticleCard } from "../../models/view/IArticleCard";
import { INewsStand } from "../../models/view/INewsStand";
import { ArticlesWrapper, LoadingText, NewsStandWrapper } from "./styles";

interface IData {
  getHeadlinesByCountryAndCategory: IArticleCard[];
}

class NewstandQuery extends Query<IData, {}> {}

const GetHeadlines = gql`
query getHeadlines($country: String!, $category: String!) {
  getHeadlinesByCountryAndCategory(country: $country, category: $category) {
    title
    author
    description
    url
    urlToImage
    publishedAt
  }
}
`;

const NewsStand: React.SFC<INewsStand> = ({
  appMode,
  quickViewOpen,
  country,
  category
}) => {
  return (
    <NewsStandWrapper appMode={appMode}>
      <NewstandQuery query={GetHeadlines} variables={{country, category}}>
        {({ loading, error, data }) => {
          if (loading) {
            return <LoadingText
              initialPose={"open"}
            >
              Loading News ...
            </LoadingText>;
          }
          return (
          <ArticlesWrapper>
            {data!.getHeadlinesByCountryAndCategory.map<React.ReactElement<IArticleCard>>(article => (
              <ArticleCard {...article} key={article.title} />
            ))}
            {Array.from(Array(10).keys()).map((x, idx) => (
              <div
                key={idx}
                style={{ visibility: "hidden", flexGrow: 1, flexBasis: "300px" }}
              />
            ))}
          </ArticlesWrapper>
          )
        }}
      </NewstandQuery>
    </NewsStandWrapper>
  );
};

export default NewsStand;
