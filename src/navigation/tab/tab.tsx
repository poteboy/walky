import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRouteKeys, TabParamList} from './route';
import {Navigator as HomeNavigator} from '@src/screens/HOME/navigator';
import {Navigator as MyPageNavigator} from '@src/screens/MYPAGE/navigator';
import MapTest from '@src/components/MapTest';
import AuthTest from '@src/components/AuthTest';
import {TabContext} from './context';
import {useFetchUserQuery} from '@src/entity/user/document.gen';
import {Box, Spinner} from 'native-base';
import {useAuth} from '@src/hooks';

const Tab = createBottomTabNavigator<TabParamList>();

export const AppTab = () => {
  const {userUid} = useAuth();

  // ここに来る段階で確実に埋められている
  const {data, loading, refetch} = useFetchUserQuery({
    variables: {uid: userUid!},
  });
  const user = data?.getUser;

  if (!user) {
    return (
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Spinner />
      </Box>
    );
  }

  return (
    <TabContext.Provider
      value={{user: user, loadingUser: loading, refetchUser: refetch}}>
      <Tab.Navigator
        initialRouteName={TabRouteKeys.HOME}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={TabRouteKeys.HOME} component={HomeNavigator} />
        <Tab.Screen name={TabRouteKeys.MYPAGE} component={MyPageNavigator} />
      </Tab.Navigator>
    </TabContext.Provider>
  );
};
