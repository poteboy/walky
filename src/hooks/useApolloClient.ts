import {ApolloClient, InMemoryCache, ApolloLink} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {urls} from '@src/constants';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {setContext} from '@apollo/client/link/context';
import {useState, useEffect, useMemo} from 'react';
import {useAuth} from './useAuth';

export const useApolloClient = () => {
  const {idToken} = useAuth();

  const [apolloLink, setApolloLink] = useState(
    setContext((_, {headers}) => ({
      headers: {
        ...headers,
        authorization: idToken,
      },
    })),
  );

  useEffect(() => {
    setApolloLink(
      setContext((_, {headers}) => ({
        headers: {
          ...headers,
          authorization: idToken,
        },
      })),
    );
  }, [idToken]);

  const client = useMemo(() => {
    return new ApolloClient({
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
  }, [apolloLink]);

  return {client};
};
