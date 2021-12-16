import {ApolloClient, InMemoryCache, ApolloLink} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {urls} from '@src/constants';
import {createHttpLink} from 'apollo-link-http';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {setContext} from '@apollo/client/link/context';
import {getToken} from './getToken';

const httpLink = createHttpLink({
  uri: __DEV__ ? urls.graphqlEndpoint.dev : urls.graphqlEndpoint.productions,
});

export const getApolloClient = () => {
  const apolloLink = setContext((_, {headers}) => {
    const tokenId = getToken();
    return {
      ...headers,
      headers: {
        authorization: `Bearer ${tokenId}`,
      },
    };
  });

  const client = new ApolloClient({
    link: apolloLink.concat(httpLink as any),
    cache: new InMemoryCache(),
  });

  return {client};
};
