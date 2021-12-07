import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {VStack, Button, HStack, FormControl, Input} from 'native-base';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthNavigation} from '../useAuthNavigation';
import {AuthRootKeys} from '../route';
import {useForm, Controller} from 'react-hook-form';

const ScreenCompoennt: FC = () => {
  const navigator = useAuthNavigation();
  const {control, handleSubmit} = useForm();

  const onSendSMS = () => {
    navigator.navigate(AuthRootKeys.ConfirmSMS, {phone: '090-1234-1234'});
  };

  return (
    <Layout>
      <VerticalBox>
        <FormControl>
          <FormControl.Label>First Name</FormControl.Label>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Input
                onBlur={onBlur}
                placeholder="John"
                onChangeText={val => onChange(val)}
                value={value}
              />
            )}
            name="firstName"
            rules={{required: 'Field is required', minLength: 3}}
            defaultValue=""
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

export default ScreenCompoennt;
