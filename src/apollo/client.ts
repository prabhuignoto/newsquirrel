import ApolloClient from "apollo-boost";
import { ApolloCache } from "apollo-cache";
import defaults from "./defaults";

// tslint:disable-next-line:no-console

const Client = new ApolloClient({
  clientState: {
    defaults,
    resolvers: {
      Mutation: {
        updateSearchTerm(
          _: any,
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
          _: any,
          { name, value }: { name: string; value: number },
          { cache }: { cache: ApolloCache<{}> }
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
        updateNewstandSize(
          _: any,
          { value }: { value: number },
          { cache }: { cache: any }
        ) {
          cache.writeData({
            data: {
              defaultNewstandSize: {
                __typename: "defaultNewstandSize",
                id: "defaultNewstandSize",
                value
              }
            },
            id: "defaultNewstandSize"
          });
          return null;
        },
        updateCategory(
          _: any,
          { value }: { value: string },
          { cache }: { cache: any }
        ) {
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
        updateCountry(
          _: any,
          { value }: { value: string },
          { cache }: { cache: any }
        ) {
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
        },
        updateQuickviewUrl(
          _: any,
          { url }: { url: string },
          { cache }: { cache: any }
        ) {
          cache.writeData({
            data: {
              quickViewUrl: {
                __typename: "QuickviewUrl",
                id: "quickviewurl",
                isOpen: true,
                url
              }
            }
          });
          return null;
        },
        closeQuickView(_: any, data: any, { cache }: { cache: any }) {
          cache.writeData({
            data: {
              quickViewUrl: {
                __typename: "QuickviewUrl",
                id: "quickviewurl",
                isOpen: false,
                url: ""
              }
            }
          });
          return null;
        },
        updateSearchPage(
          _: any,
          { page }: { page: number },
          { cache }: { cache: any }
        ) {
          cache.writeData({
            data: {
              searchPage: {
                __typename: "SearchPage",
                id: "searchpage",
                number: page
              }
            }
          });
        }
      }
    }
  },
  uri: process.env.REACT_APP_NEWSAPI_GRAPHQL_SERVER
});

export default Client;
