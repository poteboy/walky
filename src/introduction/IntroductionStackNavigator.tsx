import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IntroductionParamList, IntroductionRouteKey} from './route';
import FirstScreenComponent from './First/screen.component';

const IntroductionStack = createNativeStackNavigator<IntroductionParamList>();

const IntroductionStackNavigator: React.FC = () => {
  return (
    <IntroductionStack.Navigator
      initialRouteName={IntroductionRouteKey.First}
      screenOptions={{headerShown: true}}>
      <IntroductionStack.Screen
        name={IntroductionRouteKey.First}
        component={FirstScreenComponent}
      />
    </IntroductionStack.Navigator>
  );
};

export default IntroductionStackNavigator;
