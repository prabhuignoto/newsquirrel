import * as React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";
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
  country,
  category,
  openQuickView,
  quickViewPosition
}) => {
  return (
    <NewsStandWrapper appMode={appMode}>
      {openQuickView ? (
        <QuickviewWrapper
          pose={openQuickView ? "open" : "close"}
          initialPose="close"
          position={quickViewPosition}
        >
          <Quickview />
        </QuickviewWrapper>
      ) : (
        <NewstandQuery query={GetHeadlines} variables={{ country, category }}>
          {({ loading, error, data }) => {
            return (
              <div style={{ width: "100%" }}>
                {loading ? (
                  <LoadingText initialPose={"open"}>
                    Loading News ...
                  </LoadingText>
                ) : null}
                {!loading && !error ? (
                  <ArticlesWrapper>
                    {data!.getHeadlinesByCountryAndCategory.map<
                      React.ReactElement<IArticleCard>
                    >(article => (
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
            );
          }}
        </NewstandQuery>
      )}
    </NewsStandWrapper>
  );
};

export default NewsStand;
