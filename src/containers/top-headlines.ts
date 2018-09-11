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
    quickViewUrl @client {
      isOpen,
      url
    }
  }
`;

export default graphql(query, {
  props: ({ data: { defaultCountry, defaultCategory, appMode, searchTerm, quickViewUrl } }) => ({
    appMode,
    category: defaultCategory.value,
    country: defaultCountry.country,
    quickView: quickViewUrl,
    searchTerm: searchTerm.value,
  })
})(TopHeadlines);
