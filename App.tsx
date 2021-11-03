import React from 'react';
import {AppNavigator} from '@src/navigation/navigator';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, View} from 'react-native';
import '@src/constants/langulage/i18n';

const Drawer = createDrawerNavigator();

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <AppNavigator /> */}
        <Drawer.Navigator>
          <Drawer.Screen name={'tab'} component={AppNavigator} />
          <Drawer.Screen name={'test'} component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
