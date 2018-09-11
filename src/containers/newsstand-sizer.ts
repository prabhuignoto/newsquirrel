import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, defaultProps } from "recompose";
import ToggleSelect from "../components/toggle-select/toggle-select";
import NewsStandSize from "../enums/newsStandSize";

const mutation = gql`
  mutation($name: String!, $value: Int!) {
    updateNewstandSize(name: $name, value: $value) @client {
      name
    }
  }
`;

export default compose(
  graphql(mutation, {
    name: "updateNewstandSize",
    props: ({ updateNewstandSize }: any) => {
      return {
        items: [
          {
            name: "Comfortable",
            selected: true,
            value: NewsStandSize.COZY
          },
          {
            name: "Compact",
            value: NewsStandSize.COMPACT
          },
          {
            name: "Image free",
            value: NewsStandSize.IMAGE_FREE
          }
        ],
        update: updateNewstandSize
      };
    }
  })
)(ToggleSelect);
