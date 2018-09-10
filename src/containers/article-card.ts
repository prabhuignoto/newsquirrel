import { compose } from "recompose";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ArticleCard from "../components/news-stand/article-card";

const query = gql`
  query {
    defaultNewstandSize @client {
      value
    }
    appMode @client {
      name
      value
    }
  }
`;

export default graphql(query, {
  props: ({ data: { defaultNewstandSize, appMode } }) => ({
    appMode,
    size: defaultNewstandSize.value,
  })
})(ArticleCard);
