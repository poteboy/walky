import React, {FC, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {VStack, Button, HStack, FormControl, Input} from 'native-base';
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

const ScreenCompoennt: FC = () => {
  const navigator = useAuthNavigation();
  const {control, handleSubmit} = useForm<FormValue>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const onSendSMS = async () => {
    const confirmation = await auth().signInWithPhoneNumber('');
    setConfirm(confirmation);
  };

  useEffect(() => {
    if (confirm) {
      navigator.navigate(AuthRootKeys.ConfirmSMS, {
        confirm: confirm,
        phone: '',
        name: '',
      });
    }
  }, [confirm]);

  return (
    <Layout gradient>
      <VerticalBox>
        <FormControl>
          <FormControl.Label>名前</FormControl.Label>
          <Controller
            control={control}
            name="name"
            render={({
              field: {onChange, onBlur, value},
              formState: {errors},
            }) => (
              <Input
                {...control?.register('name')}
                value={value}
                onBlur={onBlur}
                placeholder="名前"
                isInvalid={!!errors.name}
                onChangeText={values => onChange(values)}
              />
            )}
          />
          <Spacer size={10} />
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
                isInvalid={!!errors.name}
                onChangeText={values => onChange(values)}
              />
            )}
          />
        </FormControl>
        <Button onPress={onSendSMS}>SMSを送信する</Button>
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

type FormValue = {
  name: string;
  phone: string;
};

const validationSchema = yup.object().shape({
  name: yupNameValidation,
  phone: yunPhoneValidation,
});

export default ScreenCompoennt;
