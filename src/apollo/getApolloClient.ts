import {ApolloClient, InMemoryCache} from '@apollo/client';
import {urls} from '@src/constants';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from '@apollo/client/link/context';
import {getToken} from './getToken';

const httpLink = createHttpLink({
  uri: __DEV__ ? urls.graphqlEndpoint.dev : urls.graphqlEndpoint.productions,
});

export const getApolloClient = () => {
  const apolloLink = setContext((_, {headers}) => {
    return {
      ...headers,
      headers: {
        authorization: getToken(),
      },
    };
  });

  const client = new ApolloClient({
    link: apolloLink.concat(httpLink as any),
    cache: new InMemoryCache(),
  });

  return {client};
};
