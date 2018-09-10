import ApolloClient from "apollo-boost";
import { ApolloCache } from "apollo-cache";
import defaults from "./defaults";

const Client = new ApolloClient({
  clientState: {
    defaults,
    resolvers: {
      Mutation: {
        updateSearchTerm(
          _,
          { term }: { term: string },
          { cache }: { cache: ApolloCache<{}> }
        ) {
          const data = {
            searchTerm: {
              __typename: "SearchTerm",
              value: term
            }
          };
          cache.writeData({ data });
          return null;
        },
        updateAppMode(
          _,
          { name, value }: { name: string; value: number },
          { cache, getCacheKey }: { cache: ApolloCache<{}> }
        ) {
          cache.writeData({
            data: {
              appMode: {
                __typename: "AppMode",
                id: "app-mode",
                name,
                value
              }
            }
          });
          return null;
        },
        updateNewstandSize(_, { value }: { value: number }, { cache }) {
          cache.writeData({
            data: {
              defaultNewstandSize: {
                __typename: "defaultNewstandSize",
                id: "defaultNewstandSize",
                value
              }
            }
          });
          return null;
        },
        updateCategory(_, { value }: { value: string }, { cache }) {
          cache.writeData({
            data: {
              defaultCategory: {
                __typename: "defaultCategory",
                id: "defaultCategory",
                value
              }
            }
          });
          return null;
        },
        updateCountry(_, { value }: { value: string }, { cache }) {
          cache.writeData({
            data: {
              defaultCountry: {
                __typename: "DefaultCountry",
                country: value,
                id: "default-country"
              }
            }
          });
          return null;
        }
      }
    }
  },
  uri: process.env.REACT_APP_NEWSAPI_GRAPHQL_SERVER
});

export default Client;
