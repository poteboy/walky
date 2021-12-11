import React, {useMemo, useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppDrawer} from './drawer';
import {initialRoute} from './route';
import AuthStackNavigator from '@src/authentications/AuthStackNavigator';
import {useAuth} from '@src/hooks';
import {useInitialNavigation} from './useInitialNavigation';

const Authentication = createStackNavigator();

const AuthenticationNavigator: React.FC = () => {
  const navigation = useInitialNavigation();
  const {authLoading, authorized} = useAuth();
  const initialRouteName = useMemo(() => {
    return authorized ? initialRoute.DRAWER : initialRoute.AUTH;
  }, [authorized]);

  useLayoutEffect(() => {
    if (authorized) {
      navigation.navigate(initialRoute.DRAWER);
    }
  }, [authorized]);

  return (
    <Authentication.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <Authentication.Screen name={initialRoute.DRAWER} component={AppDrawer} />
      <Authentication.Screen
        name={initialRoute.AUTH}
        component={AuthStackNavigator}
      />
    </Authentication.Navigator>
  );
};

export default AuthenticationNavigator;
