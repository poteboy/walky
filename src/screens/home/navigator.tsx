import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {route} from './route';
import HomeScreenComponent from './home/screen.component';

const HomeStack = createNativeStackNavigator();

export const Navigator: FC = () => {
  return (
    <HomeStack.Navigator initialRouteName={route.home}>
      <HomeStack.Screen name={route.home} component={HomeScreenComponent} />
    </HomeStack.Navigator>
  );
};
