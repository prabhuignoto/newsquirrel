import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
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

const mutation = gql`
  mutation($url: String!) {
    updateQuickviewUrl(url: $url) @client
  }
`;

export default compose(
  graphql(query, {
    props: ({ data: { defaultNewstandSize, appMode } }) => ({
      appMode,
      size: defaultNewstandSize.value
    })
  }),
  graphql(mutation, {
    name: "updateQuickviewUrl",
    props: ({updateQuickviewUrl}) => ({
      updateQuickviewUrl
    })
  })
)(ArticleCard);
