import * as DateFNS from "date-fns";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import SearchNews from "../components/news-stand/search-news";


export default compose(
  graphql(
    gql`
      query Search($query: String!,$from: String!, $to: String!, $page: Int!, $pageSize: Int!) {
        search(
          query: $query,
          from: $from,
          to: $to,
          page: $page,
          pageSize: $pageSize,
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
      options: (props: any) => ({
        variables: {
          from: DateFNS.format(DateFNS.startOfToday(), "YYYY-MM-DD"),
          page: 1,
          pageSize: 20,
          query: props!.term,
          to: DateFNS.format(DateFNS.endOfToday(), "YYYY-MM-DD")
        }
      }),
      props: ({ data }) => ({
        data,
        error: data!.error,
        loading: data!.loading
      })
    }
  )
)(SearchNews);
