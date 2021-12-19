import React, {FC, memo, useCallback, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
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
  Select,
} from 'native-base';
import styled from 'styled-components/native';
import {AuthRootKeys} from '../route';
import {useSnackBar} from '@src/hooks';
import {useAuthNavigation} from '../useAuthNavigation';
import {colors} from '@src/constants';
import Spacer from '@src/components/Spacer';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useForm, Controller, Control} from 'react-hook-form';
import * as yup from 'yup';
import {yunPhoneValidation} from '@src/lib/validations';
import {yupResolver} from '@hookform/resolvers/yup';
import {NationalCode, dialingCodes} from '@src/constants';
import {formatPhoneNumer} from '@src/lib';

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

  const {phone} = getValues();
  const {showSnack} = useSnackBar();
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const onLogin = useCallback(
    async (phone: string | null) => {
      if (phone) {
        const formatedPhone = formatPhoneNumer(country, phone);
        try {
          const confirmation = await auth().signInWithPhoneNumber(
            formatedPhone,
          );
          navigation.navigate(AuthRootKeys.LogIn, {
            confirm: confirmation,
            phone: phone,
          });
        } catch (e) {
          showSnack({message: 'エラーが起きました'});
        }
      }
    },
    [navigation, control, phone],
  );

  const [country, setCountry] = useState<NationalCode>('Japan');

  return (
    <Layout gradient>
      <VerticalBox>
        <LoginCard
          onLogin={onLogin}
          control={control}
          country={country}
          setCountry={setCountry}
        />
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
  onLogin: (phone: string | null) => Promise<void>;
  control: Control<FormValue, object>;
  country: NationalCode;
  setCountry: React.Dispatch<React.SetStateAction<NationalCode>>;
};

const LoginCard: FC<Props> = memo(({onLogin, control, country, setCountry}) => {
  const [phone, setPhone] = useState<string | null>(null);

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
          <Select
            width={'80%'}
            selectedValue={country}
            placeholder={'国'}
            onValueChange={v => setCountry(v as NationalCode)}>
            <Select.Item
              label={dialingCodes.Japan.country}
              value={dialingCodes.Japan.country}
            />
            <Select.Item
              label={dialingCodes.USA.country}
              value={dialingCodes.USA.country}
            />
            <Select.Item
              label={dialingCodes.Korea.country}
              value={dialingCodes.Korea.country}
            />
          </Select>
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
                onChangeText={values => {
                  onChange(values);
                  setPhone(values);
                }}
                keyboardType="phone-pad"
                width="80%"
              />
            )}
          />
        </HStack>
        <Spacer size={10} />
        <SubmitButton
          color={colors.Black}
          onPress={() => {
            onLogin(phone);
          }}>
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
