import {ApolloClient, InMemoryCache, ApolloLink} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {urls} from '@src/constants';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {setContext} from '@apollo/client/link/context';

export const getApolloClient = () => {
  const token = auth().currentUser?.getIdToken();

  const apolloLink = setContext((_, {headers}) => ({
    headers: {
      ...headers,
      authorization: token?.then(v => {
        return v;
      })
        ? `Bearer ${token?.then(v => {
            return v;
          })}`
        : '',
    },
  }));

  const client = new ApolloClient({
    link: ApolloLink.from([
      apolloLink,
      createUploadLink({
        uri: __DEV__
          ? urls.graphqlEndpoint.dev
          : urls.graphqlEndpoint.productions,
      }) as any,
    ]),
    cache: new InMemoryCache(),
  });

  return {client};
};
