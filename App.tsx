import React from 'react';
import {AppNavigator} from '@src/navigation/navigator';
import {NavigationContainer} from '@react-navigation/native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@src/constants/langulage/i18n';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
