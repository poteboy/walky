import React, {FC, memo} from 'react';
import {UserUnitFragment} from '@src/entity/user/document.gen';
import {TouchableOpacity} from 'react-native';
import {
  Avatar,
  Box,
  HStack,
  Divider,
  Actionsheet,
  useDisclose,
} from 'native-base';
import Layout from '@src/components/Layout';
import {Header} from '@src/components';
import styled from 'styled-components/native';

type Props = {
  user: UserUnitFragment;
};

export const ProfleBox: FC<Props> = memo(({user}) => {
  const {isOpen, onClose, onOpen} = useDisclose();

  return (
    <Wrapper>
      <HStack padding={5}>
        <TouchableOpacity onPress={onOpen}>
          <Avatar
            size="lg"
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
            }}
          />
        </TouchableOpacity>
      </HStack>
      <AvatorSheet isOpen={isOpen} onClose={onClose} />
    </Wrapper>
  );
});

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

type AvatorProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AvatorSheet: FC<AvatorProps> = memo(({isOpen, onClose}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content alignItems="center">
        <Divider borderColor="gray.300" />
        <Actionsheet.Item
          _text={{
            color: 'blue.500',
          }}
          _stack={{
            justifyContent: 'center',
            flex: 1,
          }}
          onPress={console.log}>
          ライブラリから選ぶ
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
});
