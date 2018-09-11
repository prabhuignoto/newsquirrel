import { graphql } from "react-apollo";
import { compose } from "recompose";

import gql from "graphql-tag";
import NewsStand from "../components/news-stand/news-stand";

interface IProps {
  category: string;
  country: string;
}

const query = gql`
  query headlines($country: String!, $category: String!) {
    getHeadlines(country: $country, category: $category) {
      title
      author
      description
      url
      urlToImage
      publishedAt
    }
  }
`;

const mutation = gql`
  mutation {
    closeQuickView @client
  }
`;

export default compose(
  graphql<IProps, {}, {}>(query, {
    options: (props: any) => {
      return {
        fetchPolicy: "cache-and-network",
        variables: {
          category: props!.category,
          country: props!.country
        }
      };
    },
    props: ({ data }, props: any) => {
      return {
        appMode: props && props!.appMode,
        data,
        error: data!.error,
        loading: data!.loading,
        openQuickView: false
      };
    }
  }),
  graphql(mutation, {
    name: "closeQuickView",
    props: ({closeQuickView}) => ({
      closeQuickView
    })
  })
)(NewsStand);
