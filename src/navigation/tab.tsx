import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {route} from './route';
import {Navigator as HomeNavigator} from '@src/screens/home/navigator';
import MapTest from '@src/components/MapTest';
import AuthTest from '@src/components/AuthTest';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={route.HOME}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={route.HOME} component={HomeNavigator} />
      <Tab.Screen name={route.MAP} component={MapTest} />
      <Tab.Screen name={route.AUTH} component={AuthTest} />
    </Tab.Navigator>
  );
};
