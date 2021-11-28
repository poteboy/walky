import React from "react";
import {AppDrawer} from "@src/navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider} from "native-base";
import "@src/constants/langulage/i18n";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppDrawer />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
