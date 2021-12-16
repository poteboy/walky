import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeRouteKeys, HomeParamList} from './route';
import HomeScreenComponent from './home/screen.component';

const HomeStack = createNativeStackNavigator<HomeParamList>();

export const Navigator: FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={HomeRouteKeys.InitialPage}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name={HomeRouteKeys.InitialPage}
        component={HomeScreenComponent}
      />
    </HomeStack.Navigator>
  );
};
