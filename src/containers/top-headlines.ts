import gql from "graphql-tag";
import { graphql } from "react-apollo";
import TopHeadlines from "../components/top-headlines/top-headlines";

const query = gql`
  query {
    defaultCountry @client {
      country
    }
    defaultCategory @client {
      value
    }
    appMode @client {
      name
      value
    }
    searchTerm @client {
      value
    }
  }
`;

export default graphql(query, {
  props: ({ data: { defaultCountry, defaultCategory, appMode, searchTerm } }) => ({
    appMode,
    category: defaultCategory.value,
    country: defaultCountry.country,
    searchTerm: searchTerm.value
  })
})(TopHeadlines);
