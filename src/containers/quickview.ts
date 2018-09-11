import gql from "graphql-tag";
import { graphql } from "react-apollo";
import QuickView from "../components/quickview/quickview";

const query = gql`
  query data($url: string) {
    getIFramelyData(url: $url) {
      site
      description
      date
      logoUrl
      thumbnailUrl
      url
      title
    }
  }
`;

export default graphql(query, {
  options: ({ url }) => ({
    variables: {
      url
    }
  }),
  props: ({ data }) => ({
    ...data
  })
})(QuickView);
