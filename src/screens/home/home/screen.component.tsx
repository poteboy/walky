import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {Button, View} from 'react-native';
import {useFetchUsersQuery, useFetchUsersLazyQuery} from './document.gen';
import auth from '@react-native-firebase/auth';
import {useSnackBar} from '@src/hooks';

const ScreenComponent: FC = () => {
  const {
    data: users,
    loading,
    refetch,
  } = useFetchUsersQuery({
    onError: e => {
      showSnack({message: e.message});
    },
  });
  const {showSnack} = useSnackBar();

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const onRefetch = () => {
    refetch();
    console.log(users);
  };

  return (
    <Wrapper>
      <TestText>test success!</TestText>
      {users?.users?.map((user, index) => {
        return (
          <View key={index}>
            <TestText>{user?.name}</TestText>
            <TestText>{user?.phoneNumber}</TestText>
            <TestText>{user?.uid}</TestText>
          </View>
        );
      })}
      <Button title="ログアウト" onPress={onSignOut}></Button>
      <Button title="再取得" onPress={onRefetch}></Button>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: auto;
  justify-content: center;
`;

const TestText = styled.Text`
  margin: auto;
`;

export default ScreenComponent;
