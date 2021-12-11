import React, {useMemo, useEffect} from 'react';
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

  useEffect(() => {
    if (authorized) {
      navigation.navigate(initialRoute.DRAWER);
    } else {
      navigation.navigate(initialRoute.AUTH);
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
