import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: process.env.REACT_APP_NEWSAPI_GRAPHQL_SERVER
});

export default Client;