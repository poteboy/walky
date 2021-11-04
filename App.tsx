import React from 'react';
import {AppDrawer} from '@src/navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import '@src/constants/langulage/i18n';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
