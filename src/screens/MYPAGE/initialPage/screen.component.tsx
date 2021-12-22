import React, {FC, useCallback} from 'react';
import {UserUnitFragment} from '@src/entity/user/document.gen';
import {TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import {MyPageParamList, MyPageRouteKeys} from '../route';
import {useMyPageNavigation} from '../useMyPageNavigation';
import {useRoute, RouteProp} from '@react-navigation/native';
import {useTabContext} from '@src/navigation/tab/context';
import {Avatar, Box, HStack, View} from 'native-base';
import Layout from '@src/components/Layout';
import {Header} from '@src/components';
import styled from 'styled-components/native';
import {ProfleBox} from './ProfileBox';

const ScreenComponent: FC = () => {
  const route = useRoute<RouteProp<MyPageParamList, 'MyPage/InitialPage'>>();
  const navigation = useMyPageNavigation();
  const {user, refetchUser, loadingUser} = useTabContext();

  const onNavigateFriendPage = useCallback(() => {
    navigation.navigate('MyPage/FriendList');
  }, [navigation]);

  return (
    <>
      <Header title={'@' + user.userCode ?? ''} />
      <Layout>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loadingUser} onRefresh={refetchUser} />
          }>
          <ProfleBox user={user} onNavigateFriendPage={onNavigateFriendPage} />
        </ScrollView>
      </Layout>
    </>
  );
};

export default ScreenComponent;
