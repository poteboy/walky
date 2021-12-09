import React, {FC, useState, useEffect, useMemo, useCallback} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {VStack, Button, HStack, Text, FormControl, Input} from 'native-base';
import styled from 'styled-components/native';
import {AuthRootKeys, AuthParamList} from '../route';
import {useAuthNavigation} from '../useAuthNavigation';
import {useAuth} from '@src/hooks';
import {authRoute} from '@src/navigation/route';
import {NavigationProps} from '@src/navigation/navigation-props';

const ScreenCompoennt: FC = () => {
  const route = useRoute<RouteProp<AuthParamList, 'ConfirmSMS'>>();
  const navigation = useAuthNavigation();
  const {setAuthorized} = useAuth();

  const {confirm} = route.params;

  const onSignUp = () => {
    const code = getAuthCode();
    route.params.confirm.confirm(code!).then(() => {
      setAuthorized(true);
      const authNavigation = navigation.getParent();
      if (authNavigation) {
        authNavigation.navigate(authRoute.DRAWER);
      }
    });
  };

  const [authCode, setAuthCode] = useState<{[key: string]: string | undefined}>(
    {
      '1': undefined,
      '2': undefined,
      '3': undefined,
      '4': undefined,
      '5': undefined,
      '6': undefined,
    },
  );

  const isEnabled = useMemo(() => {
    return (
      !!authCode['1'] &&
      !!authCode['2'] &&
      !!authCode['3'] &&
      !!authCode['4'] &&
      !!authCode['5'] &&
      !!authCode['6']
    );
  }, [authCode]);

  const getAuthCode = useCallback(() => {
    if (isEnabled) {
      return (
        authCode['1']! +
        authCode['2']! +
        authCode['3']! +
        authCode['4']! +
        authCode['5']! +
        authCode['6']!
      );
    }
  }, [authCode, isEnabled]);

  return (
    <Layout gradient>
      <VerticalBox>
        <HorizontalBox>
          {Object.keys(authCode).map((v, index) => {
            return (
              <Input
                value={authCode[v]}
                keyboardType="numeric"
                onChangeText={num => {
                  setAuthCode(authCodes => {
                    authCodes[v] = num;
                    return {...authCodes};
                  });
                }}
              />
            );
          })}
        </HorizontalBox>
        <Button onPress={onSignUp} isDisabled={!isEnabled}>
          確認
        </Button>
      </VerticalBox>
    </Layout>
  );
};

const VerticalBox = styled(VStack)`
  height: 100%;
  justify-content: center;
`;

const HorizontalBox = styled(HStack)`
  /* justify-content: center; */
  justify-content: space-between;
  margin: 0 20px;
`;

export default ScreenCompoennt;
