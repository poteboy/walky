import React, {FC} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {VStack, Button, HStack, Text, FormControl} from 'native-base';
import styled from 'styled-components/native';
import {AuthRootKeys, AuthParamList} from '../route';
import {useAuthNavigation} from '../useAuthNavigation';
import {useAuth} from '@src/hooks';
import {authRoute} from '@src/navigation/route';
import {NavigationProps} from '@src/navigation/navigation-props';

const ScreenCompoennt: FC = () => {
  const route = useRoute<RouteProp<AuthParamList, 'ConfirmSMS'>>();
  const navigation = useAuthNavigation();
  const {setAuthorized} = useAuth();

  const {phone} = route.params;

  const onSignUp = () => {
    setAuthorized(true);
    const authNavigation = navigation.getParent();
    if (authNavigation) {
      authNavigation.navigate(authRoute.DRAWER);
    }
  };

  return (
    <Layout gradient>
      <VerticalBox>
        <Text>{phone}</Text>
        <Button onPress={onSignUp}>確認</Button>
      </VerticalBox>
    </Layout>
  );
};

const VerticalBox = styled(VStack)`
  height: 100%;
  justify-content: center;
`;

const HorizontalBox = styled(HStack)`
  width: 100%;
  justify-content: center;
`;

export default ScreenCompoennt;
