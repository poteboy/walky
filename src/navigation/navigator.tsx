import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {route} from './route';
import {Navigator as HomeNavigator} from '@src/screens/home/navigator';
import MapTest from '@src/components/MapTest';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={route.HOME}>
      <Tab.Screen name={route.HOME} component={HomeNavigator} />
      <Tab.Screen name={route.MAP} component={MapTest} />
    </Tab.Navigator>
  );
};
