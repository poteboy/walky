import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {VStack, Button, HStack, Image, Text} from 'native-base';
import styled from 'styled-components/native';
import {AuthRootKeys} from '../route';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthNavigation} from '../useAuthNavigation';
import {colors} from '@src/constants';
import Spacer from '@src/components/Spacer';

const ScreenComponent: FC = () => {
  const navigation = useAuthNavigation();

  const onSignUp = () => {
    navigation.navigate(AuthRootKeys.SignUp);
  };

  const onLogin = () => {
    navigation.navigate(AuthRootKeys.SignUp);
  };

  return (
    <Layout gradient>
      <VerticalBox>
        {/* <Image source={require('../../../assets/phone.png')} size={100} /> */}
        <HStack justifyContent="center">
          <Boder left />
          <Text color={colors.white}>登録がお済みでない方はこちら</Text>
          <Boder />
        </HStack>
        <Spacer size={10} />
        <RegisterButton onPress={onSignUp}>
          <Text
            color={colors.main}
            letterSpacing="2xl"
            fontSize="xl"
            fontWeight="bold">
            新規登録
          </Text>
        </RegisterButton>
      </VerticalBox>
    </Layout>
  );
};

const VerticalBox = styled(VStack)`
  height: 100%;
  justify-content: center;
  margin: 0 30px;
`;

const HorizontalBox = styled(HStack)`
  width: 100%;
  justify-content: center;
`;

const Boder = styled.View<{left?: boolean}>`
  content: '';
  flex-grow: 1;
  height: 1px;
  background: ${colors.white};
  margin: ${props => (props.left ? '0 20px 0 0' : '0 0 0 20px')};
  align-self: center;
`;

const RegisterButton = styled(Button)`
  background-color: ${colors.white};
`;

export default ScreenComponent;
