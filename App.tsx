import React from 'react';
import {AppNavigator} from '@src/navigation/navigator';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import '@src/constants/langulage/i18n';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <AppNavigator /> */}
        <Drawer.Navigator>
          <Drawer.Screen name={'tab'} component={AppNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
