import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import Filters from "../components/filters/filters";

const query = gql`
  query {
    defaultCategory @client {
      value
    }
    categories @client {
      value
    }
  }
`;

const mutation = gql`
  mutation($value: string) {
    updateCategory(value: $value) @client
  }
`;

export default compose(
  graphql(query, {
    props: ({ data: {defaultCategory, categories }) => {
      return {
        items: categories.value.map(x => {
          let selected = false;
          if (x === defaultCategory.value) {
            selected = true;
          }
          return Object.assign({}, {
            name: x,
            selected,
            value: x,
          });
        })
      };
    }
  }),
  graphql(mutation, {
    name: "updateCategory",
    props: ({updateCategory}) => ({
      update: updateCategory
    })
  })
)(Filters);
