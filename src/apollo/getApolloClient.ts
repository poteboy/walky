import {ApolloClient, InMemoryCache, ApolloLink} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {urls} from '@src/constants';
import {createHttpLink} from 'apollo-link-http';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink();

export const getApolloClient = () => {
  const getToken = async () => {
    const token = (await auth().currentUser?.getIdToken()) ?? null;
    return token;
  };

  const apolloLink = setContext(async (_, {headers}) => ({
    headers: {
      ...headers,
      authorization: await getToken(),
    },
  }));

  const client = new ApolloClient({
    uri: __DEV__ ? urls.graphqlEndpoint.dev : urls.graphqlEndpoint.productions,
    // link: apolloLink.concat(httpLink as any),
    cache: new InMemoryCache(),
  });

  return {client};
};
