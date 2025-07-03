import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://democvapi.celepus.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
