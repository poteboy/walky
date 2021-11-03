import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native';
import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from 'react-native-health';

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
  const {t, i18n} = useTranslation();

  const [lang, setLang] = useState<'ja' | 'en'>('ja');

  const onChangeLang = () => {
    if (lang === 'ja') {
      i18n.changeLanguage('en');
      setLang('en');
    } else {
      i18n.changeLanguage('ja');
      setLang('ja');
    }
  };

  return (
    <Wrapper>
      <TestText>test success!</TestText>
      <TestText>{t('hello')}</TestText>
      <Button onPress={onChangeLang} title="change language" />
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
