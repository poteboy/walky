import React from 'react';
import {AppDrawer} from '@src/navigation/drawer';
import AuthenticationNavigator from '@src/navigation/authentication-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import '@src/constants/langulage/i18n';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {urls} from '@src/constants';
import {getApolloClient} from '@src/apollo/getApolloClient';

const {client} = getApolloClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
