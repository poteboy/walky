import React, {FC} from 'react';
import {Header} from '@src/components';
import Layout from '@src/components/Layout';
import {MyPageParamList} from '../route';
import {useMyPageNavigation} from '../useMyPageNavigation';
import {useRoute, RouteProp} from '@react-navigation/native';

const FriendListScreen: FC = () => {
  const navigation = useMyPageNavigation();
  const route = useRoute<RouteProp<MyPageParamList, 'MyPage/InitialPage'>>();

  return (
    <>
      <Header title="友達リスト" />
      <Layout>
        <></>
      </Layout>
    </>
  );
};

export default FriendListScreen;
