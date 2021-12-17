import React, {FC, memo, useCallback} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {
  VStack,
  Button,
  HStack,
  Image,
  Text,
  Card,
  View,
  Input,
} from 'native-base';
import styled from 'styled-components/native';
import {AuthRootKeys} from '../route';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthNavigation} from '../useAuthNavigation';
import {colors} from '@src/constants';
import Spacer from '@src/components/Spacer';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useForm, Controller, Control} from 'react-hook-form';
import * as yup from 'yup';
import {yunPhoneValidation} from '@src/lib/validations';
import {yupResolver} from '@hookform/resolvers/yup';

const ScreenComponent: FC = () => {
  const navigation = useAuthNavigation();
  const {control, handleSubmit, getValues, formState} = useForm<FormValue>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });

  const onSignUp = () => {
    navigation.navigate(AuthRootKeys.SignUp);
  };

  const onLogin = useCallback(() => {
    navigation.navigate(AuthRootKeys.SignUp);
  }, [navigation, control]);

  return (
    <Layout gradient>
      <VerticalBox>
        <LoginCard onLogin={onLogin} control={control} />
        <Spacer size={50} />
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
        <Spacer size={50} />
      </VerticalBox>
    </Layout>
  );
};

const screenHeight = Dimensions.get('screen').height;

const VerticalBox = styled(VStack)`
  height: ${screenHeight + 'px'};
  justify-content: center;
  margin: 0px 30px;
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

type Props = {
  onLogin: () => void;
  control: Control<FormValue, object>;
};

const LoginCard: FC<Props> = memo(({onLogin, control}) => {
  return (
    <Card bg={colors.white} borderRadius={5}>
      <VStack padding={5}>
        <Text color={colors.DarkGray} textAlign="center">
          電話番号を入力してください
        </Text>
        <Text color={colors.DarkGray} textAlign="center">
          入力された電話番号にSMSを送信します
        </Text>
        <Spacer size={10} />
        <HStack borderRadius={5} bgColor={colors.Gray}>
          <LeftForm>
            <Image
              source={require('@assets/phone2.png')}
              size={30}
              color={colors.Gray}
              alignSelf="center"
              borderLeftRadius={5}
            />
          </LeftForm>
        </HStack>
        <Spacer size={10} />
        <HStack borderRadius={5} bgColor={colors.Gray}>
          <LeftForm>
            <Image
              source={require('@assets/phone2.png')}
              size={30}
              color={colors.Gray}
              alignSelf="center"
              borderLeftRadius={5}
            />
          </LeftForm>
          <Controller
            control={control}
            name="phone"
            render={({
              field: {onChange, onBlur, value},
              formState: {errors},
            }) => (
              <Input
                {...control?.register('phone')}
                value={value}
                onBlur={onBlur}
                placeholder="電話番号"
                isInvalid={!!errors.phone}
                onChangeText={values => onChange(values)}
                keyboardType="phone-pad"
                width="80%"
              />
            )}
          />
        </HStack>
        <Spacer size={10} />
        <SubmitButton color={colors.Black}>
          <Text color={colors.Black}>ログイン</Text>
        </SubmitButton>
      </VStack>
    </Card>
  );
});

const LeftForm = styled(View)`
  background-color: ${colors.MediumGray};
  width: 20%;
`;

const SubmitButton = styled(Button)`
  background-color: ${colors.white};
  border: 1px solid;
  border-color: ${colors.DarkGray};
`;

type FormValue = {
  phone: string;
};

const validationSchema = yup.object().shape({
  phone: yunPhoneValidation,
});
