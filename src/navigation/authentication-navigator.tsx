import React, {useMemo, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppDrawer} from './drawer';
import {initialRoute} from './route';
import AuthStackNavigator from '@src/authentications/AuthStackNavigator';
import IntroductionStackNavigator from '@src/introduction/IntroductionStackNavigator';
import {useAuth} from '@src/hooks';
import {useInitialNavigation} from './useInitialNavigation';
import {storage, storageKeys} from '@src/lib';

const Authentication = createStackNavigator();

const AuthenticationNavigator: React.FC = () => {
  const navigation = useInitialNavigation();
  const {authLoading, authorized} = useAuth();
  const initialRouteName = useMemo(() => {
    return authorized ? initialRoute.DRAWER : initialRoute.AUTH;
  }, [authorized]);

  const hasSeenIntroduction: Promise<boolean> = storage
    .load({key: storageKeys.hasSeenIntroduction})
    .then(v => {
      return !!v;
    });

  // useEffect(() => {
  //   if (authorized) {
  //     hasSeenIntroduction.then(v => {
  //       // 既にイントロページを閲覧していたら（初回登録済なら）ホームに移動し、そうでなければイントロページに移動
  //       navigation.navigate(
  //         v ? initialRoute.DRAWER : initialRoute.INTRODUCTION,
  //       );
  //     });
  //   } else {
  //     navigation.navigate(initialRoute.AUTH);
  //   }
  // }, [authorized]);

  return (
    <Authentication.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={initialRouteName}>
      initialRouteName={initialRoute.INTRODUCTION}>
      <Authentication.Screen name={initialRoute.DRAWER} component={AppDrawer} />
      <Authentication.Screen
        name={initialRoute.AUTH}
        component={AuthStackNavigator}
      />
      <Authentication.Screen
        name={initialRoute.INTRODUCTION}
        component={IntroductionStackNavigator}
      />
    </Authentication.Navigator>
  );
};

export default AuthenticationNavigator;
