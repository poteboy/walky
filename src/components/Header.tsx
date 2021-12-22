import React, {FC} from 'react';
import {StatusBar, Box, HStack, Heading, Image} from 'native-base';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {colors} from '@src/constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  title: string;
  onBack?: () => void;
};

export const Header: FC<Props> = ({title, onBack}) => {
  return (
    <>
      <StatusBar />
      <AppBar safeAreaTop>
        <HStack alignItems="center">
          {onBack && (
            <TouchableOpacity onPress={onBack}>
              <Image source={require('@assets/arrow-left.png')} marginX={3} />
            </TouchableOpacity>
          )}
          <Heading color={colors.white} padding={2.5}>
            {title}
          </Heading>
        </HStack>
      </AppBar>
    </>
  );
};

const AppBar = styled(Box)`
  background-color: ${colors.Thema};
`;
