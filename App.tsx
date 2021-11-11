import React from 'react';
import {AppDrawer} from '@src/navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {UserContainer} from '@src/containers/index';
import '@src/constants/langulage/i18n';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <UserContainer.Provider>
          <AppDrawer />
        </UserContainer.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
