import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native';
import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from 'react-native-health';
import { useQuery, gql } from '@apollo/client'
import {usegetExamplesQuery } from '@src/entity/document.gen'

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

  const {data, loading} = usegetExamplesQuery()

  const examples =  data?.examples ?? []

  return (
    <Wrapper>
      <TestText>test success!</TestText>
      {examples.map((val, index) => {
        return <TestText key={index}>{val?.message}</TestText>
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
