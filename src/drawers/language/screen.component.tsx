import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Center,
  FlatList,
  Box,
  HStack,
  VStack,
  Text,
  CheckIcon,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const ScreenComponent: FC = () => {
  const {t, i18n} = useTranslation();

  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  const date = [
    {
      language: 'English',
      selected: isEnglish,
      t: 'en',
    },
    {
      language: '日本語',
      selected: !isEnglish,
      t: 'ja',
    },
  ];

  return (
    <Box
      w={{
        base: '100%',
        md: '25%',
      }}>
      <FlatList
        data={date}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              i18n.changeLanguage(item.t);
            }}>
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2">
              <HStack space={3}>
                {item.selected && <CheckIcon />}
                <Text>{item.language}</Text>
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
      />
    </Box>
  );
};

export default ScreenComponent;
