import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyPageRouteKeys, MyPageParamList} from './route';
import MyPageScreenComponent from './initialPage/screen.component';

const HomeStack = createNativeStackNavigator<MyPageParamList>();

export const Navigator: FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={MyPageRouteKeys.InitialPage}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name={MyPageRouteKeys.InitialPage}
        component={MyPageScreenComponent}
      />
    </HomeStack.Navigator>
  );
};
