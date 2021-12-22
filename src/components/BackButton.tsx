import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'native-base';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export const BacKButton: FC<Props> = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={goBack}>
      <Image source={require('@assets/arrow-left.png')} />
    </TouchableOpacity>
  );
};
