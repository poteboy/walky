import React, {FC, useState, useEffect, useMemo, useCallback} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import Layout from '@src/components/Layout';
import {VStack, Button, HStack, Text, FormControl, View} from 'native-base';
import styled from 'styled-components/native';
import {AuthRootKeys, AuthParamList} from '../route';
import {useAuthNavigation} from '../useAuthNavigation';
import {useAuth} from '@src/hooks';
import {authRoute} from '@src/navigation/route';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {StyleSheet} from 'react-native';
import {colors} from '@src/constants';

const ScreenCompoennt: FC = () => {
  const route = useRoute<RouteProp<AuthParamList, 'ConfirmSMS'>>();
  const navigation = useAuthNavigation();
  const {setAuthorized} = useAuth();

  const {confirm} = route.params;

  const onSignUp = () => {
    route.params.confirm.confirm(authCode).then(() => {
      setAuthorized(true);
      const authNavigation = navigation.getParent();
      if (authNavigation) {
        authNavigation.navigate(authRoute.DRAWER);
      }
    });
  };

  const [authCode, setAuthCode] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: authCode,
    setValue: setAuthCode,
  });
  const ref = useBlurOnFulfill({value: authCode, cellCount: 6});

  const isValid = useMemo(() => {
    return authCode.length === 6;
  }, [authCode]);

  return (
    <Layout gradient>
      <VerticalBox>
        <View>
          <CodeField
            value={authCode}
            onChangeText={setAuthCode}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            ref={ref}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <Button onPress={onSignUp} isDisabled={!isValid}>
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
  /* justify-content: space-between; */
  margin: 0 20px;
`;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 64,
    lineHeight: 72,
    fontSize: 24,
    borderRadius: 4,
    textAlign: 'center',
    backgroundColor: colors.Gray,
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default ScreenCompoennt;
