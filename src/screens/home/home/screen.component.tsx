import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {Button, View} from 'react-native';
import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from 'react-native-health';
import {useFetchUsersQuery} from './document.gen'

/* Permission options */
const permissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.Steps],
  },
} as HealthKitPermissions;

AppleHealthKit.initHealthKit(permissions, (error: string) => {
  /* Called after we receive a response from the system */

  if (error) {
    console.log('[ERROR] Cannot grant permissions!');
  }

  /* Can now read or write to HealthKit */

  const options = {
    startDate: new Date(2020, 1, 1).toISOString(),
  };

  AppleHealthKit.getHeartRateSamples(
    options,
    (callbackError: string, results: HealthValue[]) => {
      /* Samples are now collected from HealthKit */

      console.log(callbackError, results);
    },
  );
});

const ScreenComponent: FC = () => {

  const {data, loading} = useFetchUsersQuery()

  useEffect(() => {

    if(!loading)  {
      console.log(data)
    }
  }, [loading])

  return (
    <Wrapper>
      <TestText>test success!</TestText>
      {data?.users?.map((user, index) => {
        return (
          <View key={index}>
          <TestText>{user?.uid}</TestText>
          <TestText>{user?.displayName}</TestText>
          </View>
        )
      })}
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
