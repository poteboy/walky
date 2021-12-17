import React, {FC, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {
  VStack,
  Button,
  HStack,
  FormControl,
  Input,
  Text,
  Select,
} from 'native-base';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthNavigation} from '../useAuthNavigation';
import {AuthRootKeys} from '../route';
import {
  useForm,
  FieldValues,
  Controller,
  UseControllerProps,
} from 'react-hook-form';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import * as yup from 'yup';
import {yunPhoneValidation, yupNameValidation} from '@src/lib/validations';
import {yupResolver} from '@hookform/resolvers/yup';
import Spacer from '@src/components/Spacer';
import {formatPhoneNumer} from '@src/lib';
import {NationalCode, dialingCodes} from '@src/constants';
import {useAuth, useSnackBar} from '@src/hooks';

const ScreenCompoennt: FC = () => {
  const navigator = useAuthNavigation();
  const {control, handleSubmit, getValues, formState} = useForm<FormValue>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });
  const {isValid, errors} = formState;
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const {showSnack} = useSnackBar();

  const onSendSMS = async () => {
    if (phone) {
      const formatedPhone = formatPhoneNumer(country, phone);
      try {
        const confirmation = await auth().signInWithPhoneNumber(formatedPhone);
        setConfirm(confirmation);
      } catch (e) {
        showSnack({message: 'エラーが起きました'});
      }
    }
  };

  useEffect(() => {
    if (confirm) {
      navigator.navigate(AuthRootKeys.ConfirmSMS, {
        confirm: confirm,
        phone: phone,
      });
    }
  }, [confirm]);

  const {phone} = getValues();

  const [country, setCountry] = useState<NationalCode>('Japan');

  return (
    <Layout gradient>
      <VerticalBox>
        <Title>新規会員登録</Title>
        <FormControl>
          <Select
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
              />
            )}
          />
        </FormControl>
        <Button onPress={onSendSMS} isDisabled={!isValid}>
          SMSを送信する
        </Button>
      </VerticalBox>
    </Layout>
  );
};

const Title = styled(Text)`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const VerticalBox = styled(VStack)`
  height: 100%;
  padding: 50px 0;
  /* justify-content: center; */
`;

const HorizontalBox = styled(HStack)`
  width: 100%;
  justify-content: center;
`;

type FormValue = {
  phone: string;
};

const validationSchema = yup.object().shape({
  phone: yunPhoneValidation,
});

export default ScreenCompoennt;
