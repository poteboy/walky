import React, {FC} from 'react';
import Layout from '@src/components/Layout';
import {useAuth, useSnackBar} from '@src/hooks';
import {AuthRootKeys, AuthParamList} from '../route';
import {Text, FormControl, Input, Button} from 'native-base';
import {useRegisterUserMutation} from './document.gen';
import {useUserContext} from '@src/context';
import {yupNameValidation, yupUserCodeValidation} from '@src/lib/validations';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {useAuthNavigation} from '../useAuthNavigation';

const ScreenCompoennt: FC = () => {
  const {authorized, userUid} = useAuth();
  const {showSnack} = useSnackBar();
  const navigation = useAuthNavigation();

  const {control, handleSubmit, getValues, formState} = useForm<FormValue>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });

  const {isValid, errors} = formState;

  const [submit] = useRegisterUserMutation({
    onError(error) {
      showSnack({message: error.message});
    },
  });

  const {name, userCode} = getValues();

  const onSubmit = () => {
    console.log(userUid, name, userCode);
    submit({
      variables: {
        uid: userUid!,
        name: name,
        weight: null,
        age: null,
        userCode: userCode,
      },
    }).then(() => {
      navigation.getParent()?.navigate('DRAWER');
    });
  };

  return (
    <Layout>
      <FormControl>
        <FormControl.Label>名前</FormControl.Label>
        <Controller
          control={control}
          name="name"
          render={({field: {onChange, onBlur, value}, formState: {errors}}) => (
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
        <FormControl.Label>ユーザーコード</FormControl.Label>
        <Controller
          control={control}
          name="userCode"
          render={({field: {onChange, onBlur, value}, formState: {errors}}) => (
            <Input
              {...control?.register('userCode')}
              value={value}
              onBlur={onBlur}
              placeholder="ユーザーコード"
              isInvalid={!!errors.userCode}
              onChangeText={values => onChange(values)}
            />
          )}
        />
      </FormControl>
      <Button onPress={onSubmit} disabled={!isValid}>
        送信
      </Button>
    </Layout>
  );
};

export default ScreenCompoennt;

type FormValue = {
  name: string;
  userCode: string;
};

const validationSchema = yup.object().shape({
  name: yupNameValidation,
  userCode: yupUserCodeValidation,
});
