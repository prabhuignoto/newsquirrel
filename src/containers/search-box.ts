import gql from "graphql-tag";
import { FormEvent } from "react";
import { compose, graphql } from "react-apollo";
import SearchBox from "../components/search-box/box";

export default compose(
  graphql(
    gql`
      mutation update($term: String!) {
        updateSearchTerm(term: $term) @client
      }
    `,
    {
      props: ({ mutate }) => ({
        clearField: (ev: KeyboardEvent & FormEvent<HTMLInputElement>) => {
          if (mutate) {
            mutate({
              variables: {
                term: ev.currentTarget.value
              }
            });
          }
        },
        onGo: (value: string) => {
          if(value && mutate) {
            mutate({
              variables: {
                term: value
              }
            });
          }
        },
        onSearch: (ev: KeyboardEvent & FormEvent<HTMLInputElement>) => {
          if (ev.keyCode === 13 && mutate) {
            mutate({
              variables: {
                term: ev.currentTarget.value
              }
            });
          }
        }
      })
    }
  )
)(SearchBox);
