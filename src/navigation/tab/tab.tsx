import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {route} from '../route';
import {Navigator as HomeNavigator} from '@src/screens/home/navigator';
import MapTest from '@src/components/MapTest';
import AuthTest from '@src/components/AuthTest';
import {TabContext} from './context';
import {useFetchUserQuery} from '@src/entity/user/document.gen';
import {Box, Spinner} from 'native-base';
import {useAuth} from '@src/hooks';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  const {userUid} = useAuth();

  // ここに来る段階で確実に埋められている
  const {data} = useFetchUserQuery({variables: {uid: userUid!}});
  const user = data?.getUser;

  if (!user) {
    return (
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Spinner />
      </Box>
    );
  }

  return (
    <TabContext.Provider value={{user: user}}>
      <Tab.Navigator
        initialRouteName={route.HOME}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={route.HOME} component={HomeNavigator} />
      </Tab.Navigator>
    </TabContext.Provider>
  );
};
