import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import '@src/constants/langulage/i18n';
import {ApolloProvider} from '@apollo/client';
import {getApolloClient} from '@src/apollo/getApolloClient';
import {AppRoot} from '@src/root';

const {client} = getApolloClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppRoot />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
