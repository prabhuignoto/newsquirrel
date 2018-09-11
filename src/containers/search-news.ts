import * as DateFNS from "date-fns";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import SearchNews from "../components/news-stand/search-news";

interface IProps {
  term: string;
}

export default graphql<IProps, {}, {}, {}>(
  gql`
    query Search(
      $query: String!
      $from: String!
      $to: String!
      $page: Int!
      $pageSize: Int!
    ) {
      search(
        query: $query
        from: $from
        to: $to
        page: $page
        pageSize: $pageSize
      ) {
        author
        title
        description
        url
        urlToImage
        publishedAt
      }
    }
  `,
  {
    options: ({ term }) => ({
      fetchPolicy: "cache-and-network",
      variables: {
        from: DateFNS.format(DateFNS.startOfToday(), "YYYY-MM-DD"),
        page: 1,
        pageSize: 20,
        query: term,
        to: DateFNS.format(DateFNS.endOfToday(), "YYYY-MM-DD")
      }
    }),
    props: ({data}) => ({
      ...data
    })
  }
)(SearchNews);
