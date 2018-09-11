import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, defaultProps } from "recompose";
import Dropdown from "../components/dropdown/dropdown";

const query = gql`
  query {
    defaultCountry @client {
      country
    }
    countries @client {
      items {
        code
        icon
        name
      } 
    }
  }
`;

const mutation = gql`
  mutation($code: String!) {
    updateCountry(value: $code) @client
  }
`;

export default compose(
  graphql(query, {
    props: ({ data: { countries, defaultCountry } }: any) => {
      return {
        items: countries.items,
        selectedItem: defaultCountry.country
      };
    }
  }),
  graphql(mutation, {
    name: "updateCountry",
    props: ({updateCountry}) => ({
      update: updateCountry,
    })
  }),
  defaultProps({
    label: "Change country"
  })
)(Dropdown);
