import React, {useMemo, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppDrawer} from './drawer';
import {initialRoute} from './route';
import AuthStackNavigator from '@src/authentications/AuthStackNavigator';
import {useAuth} from '@src/hooks';
import {useInitialNavigation} from './useInitialNavigation';
import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from 'react-native-health';

/* Permission options */
const permissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.Steps],
  },
} as HealthKitPermissions;

AppleHealthKit.initHealthKit(permissions, (error: string) => {
  /* Called after we receive a response from the system */

  if (error) {
    console.log('[ERROR] Cannot grant permissions!');
  }

  /* Can now read or write to HealthKit */

  const options = {
    startDate: new Date(2020, 1, 1).toISOString(),
  };

  AppleHealthKit.getHeartRateSamples(
    options,
    (callbackError: string, results: HealthValue[]) => {
      /* Samples are now collected from HealthKit */

      console.log(callbackError, results);
    },
  );
});

const Authentication = createStackNavigator();

const AuthenticationNavigator: React.FC = () => {
  const navigation = useInitialNavigation();
  const {authorized} = useAuth();

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
