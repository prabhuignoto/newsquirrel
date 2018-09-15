import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Image from '../components/news-stand/thumbnail';

const query = gql`
  query getBase64Img($url: String!) {
    getBase64Img(url: $url) {
      data
    }
  }
`;

export default graphql(query, {
  options: ({url}) => ({
    variables: {
      url
    }
  }),
  props: ({data: {getBase64Img}}) => ({
    data: getBase64Img && getBase64Img.data
  })
})(Image)