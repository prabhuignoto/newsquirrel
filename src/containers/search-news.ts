import * as DateFNS from "date-fns";
import gql from "graphql-tag";
import { FormEvent } from "react";
import { compose, graphql } from "react-apollo";
import SearchNews from "../components/news-stand/search-news";

interface IProps {
  term: string;
}

const query = gql`
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
`;

export default compose(
  graphql<IProps, {}, {}, {}>(query, {
    options: ({ term }) => ({
      fetchPolicy: "cache-and-network",
      variables: {
        from: DateFNS.format(DateFNS.startOfYesterday(), "YYYY-MM-DD"),
        page: 1,
        pageSize: 20,
        query: term,
        to: DateFNS.format(DateFNS.endOfToday(), "YYYY-MM-DD")
      }
    }),
    props: ({ data }) => ({
      ...data
    })
  }),
  graphql(
    gql`
      mutation update($term: String!) {
        updateSearchTerm(term: $term) @client
      }
    `,
    {
      props: ({ mutate }) => ({
        clearSearch: () => {
          if (mutate) {
            mutate({
              variables: {
                term: ''
              }
            });
          }
        }
      })
    }
  )
)(SearchNews);
