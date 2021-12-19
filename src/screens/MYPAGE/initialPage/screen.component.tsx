import React, {FC} from 'react';
import {UserUnitFragment} from '@src/entity/user/document.gen';
import {TouchableOpacity} from 'react-native';
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
  const {user} = useTabContext();

  return (
    <>
      <Header title="@poteboy" />
      <Layout>
        <ProfleBox user={user} />
      </Layout>
    </>
  );
};

export default ScreenComponent;
