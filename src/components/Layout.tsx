import React, {ReactNode, FC} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, Dimensions} from 'react-native';
import {View, VStack, Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  gradient?: boolean;
  children: ReactNode | any;
};

const screenHeight = Dimensions.get('window').height;

const Layout: FC<Props> = ({children, gradient}) => {
  return gradient ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#37B6BF', '#A5C8B2']}>
      <SafeAreaView>
        <View style={{height: screenHeight}}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  ) : (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: screenHeight}}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

const GradientView = styled(LinearGradient);

export default Layout;
