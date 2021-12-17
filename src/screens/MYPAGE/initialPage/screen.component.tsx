import React, {FC} from 'react';
import {MyPageParamList, MyPageRouteKeys} from '../route';
import {useMyPageNavigation} from '../useMyPageNavigation';
import {useRoute, RouteProp} from '@react-navigation/native';
import {useTabContext} from '@src/navigation/tab/context';
import {Text} from 'native-base';
import Layout from '@src/components/Layout';
import styled from 'styled-components/native';

const ScreenComponent: FC = () => {
  const route = useRoute<RouteProp<MyPageParamList, 'MyPage/InitialPage'>>();
  const navigation = useMyPageNavigation();
  const {user} = useTabContext();

  return (
    <Layout>
      <Text>{user.name}</Text>
      <Text>{user.uid}</Text>
      <Text>{user.phoneNumber}</Text>
    </Layout>
  );
};

export default ScreenComponent;
