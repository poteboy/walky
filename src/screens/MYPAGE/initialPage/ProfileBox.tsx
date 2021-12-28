import React, {FC, memo, useCallback, useState, useEffect} from 'react';
import {UserUnitFragment} from '@src/entity/user/document.gen';
import {TouchableOpacity} from 'react-native';
import {
  Avatar,
  Box,
  HStack,
  Divider,
  Actionsheet,
  useDisclose,
  VStack,
  Text,
  View,
  Badge,
  Image,
} from 'native-base';
import Layout from '@src/components/Layout';
import {colors} from '@src/constants';
import styled from 'styled-components/native';
import {launchImageLibrary, Asset} from 'react-native-image-picker';
import {useSnackBar} from '@src/hooks';

type Props = {
  user: UserUnitFragment;
  onNavigateFriendPage: () => void;
};

export const ProfleBox: FC<Props> = memo(({user, onNavigateFriendPage}) => {
  const {showSnack} = useSnackBar();
  const {isOpen, onClose, onOpen} = useDisclose();

  const [image, setImage] = useState<Asset[] | undefined>(undefined);

  const pickImage = useCallback(async () => {
    const options = {
      mediaType: 'photo' as any,
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };
    launchImageLibrary(options).then(response => {
      if (response.didCancel || response.errorCode || response.errorMessage) {
        showSnack({message: 'エラーが起きました'});
      } else {
        setImage(response.assets);
        onClose();
      }
    });
  }, [setImage, onClose]);

  return (
    <Wrapper>
      <HStack padding={5} width="100%">
        <TouchableOpacity onPress={onOpen} style={{width: '30%'}}>
          <Image
            source={require('@assets/plus.png')}
            alignSelf="flex-end"
            style={{
              transform: [{translateY: 25}, {translateX: -5}],
              zIndex: 100,
            }}
          />
          <Avatar
            size="xl"
            source={{
              uri: 'https://poteboy.com/static/6bdbf18104cab1d4ec7d3d23f03949a9/poteicon.png',
            }}>
            {user.name?.toUpperCase()[0]}
            {/* <Avatar.Badge /> */}
          </Avatar>
        </TouchableOpacity>
        <VStack marginLeft={5} width="60%">
          <Text fontSize={22} bold textAlign="right" paddingTop={5}>
            {user.name}
          </Text>
          <TouchableOpacity onPress={onNavigateFriendPage}>
            <FlexColumn marginY={3}>
              <Text
                color={colors.DarkGray}
                textAlign="right"
                marginRight={2}
                alignSelf="center">
                フレンド
              </Text>
              <Text fontSize={22} bold alignSelf="flex-end">
                3
              </Text>
            </FlexColumn>
          </TouchableOpacity>
        </VStack>
      </HStack>
      <AvatorSheet isOpen={isOpen} onClose={onClose} pickImage={pickImage} />
    </Wrapper>
  );
});

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const FlexColumn = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

type AvatorProps = {
  isOpen: boolean;
  onClose: () => void;
  pickImage: () => void;
};

const AvatorSheet: FC<AvatorProps> = memo(({isOpen, onClose, pickImage}) => {
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
          onPress={pickImage}>
          ライブラリから選ぶ
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
});
