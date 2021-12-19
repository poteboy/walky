import React, {FC} from 'react';
import {StatusBar, Box, HStack, Heading} from 'native-base';
import styled from 'styled-components/native';
import {colors} from '@src/constants';

type Props = {
  title: string;
};

export const Header: FC<Props> = ({title}) => {
  return (
    <>
      <StatusBar />
      <AppBar safeAreaTop>
        <HStack>
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
