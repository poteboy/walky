import React, {FC, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {VStack, Button, HStack, FormControl, Input} from 'native-base';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthNavigation} from '../useAuthNavigation';
import {AuthRootKeys} from '../route';
import {useForm, Controller} from 'react-hook-form';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ScreenCompoennt: FC = () => {
  const navigator = useAuthNavigation();
  const {control, handleSubmit} = useForm<FormValue>();
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const onSendSMS = async () => {
    // navigator.navigate(AuthRootKeys.ConfirmSMS, {phone: '090-1234-1234'});
    await auth().setLanguageCode('ja');
    const confirmation = await auth().signInWithPhoneNumber('+81 9078883147');
    setConfirm(confirmation);
  };

  useEffect(() => {
    if (confirm) {
      navigator.navigate(AuthRootKeys.ConfirmSMS, {confirm: confirm});
    }
  }, [confirm]);

  return (
    <Layout gradient>
      <VerticalBox>
        <FormControl>
          <FormControl.Label>First Name</FormControl.Label>
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

export default ScreenCompoennt;
