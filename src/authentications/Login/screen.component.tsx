import React, {FC, useState} from 'react';
import Layout from '@src/components/Layout';
import styled from 'styled-components';
import {Card} from 'native-base';
import {useRoute, RouteProp} from '@react-navigation/native';
import {AuthParamList} from '../route';
import {useAuthNavigation} from '../useAuthNavigation';

const ScreenComponent: FC = () => {
  const navigation = useAuthNavigation();
  const route = useRoute<RouteProp<AuthParamList, 'LogIn'>>();

  return (
    <Layout>
      <></>
    </Layout>
  );
};

export default ScreenComponent;
