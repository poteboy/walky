import React, {FC, useState} from 'react';
import Layout from '@src/components/Layout';
import {View, Image} from 'native-base';
import styled from 'styled-components/native';

const ScreenComponent: FC = () => {
  return (
    <Layout>
      <Wrapper>
        <ImageContaienr>
          <Image
            source={require('@assets/intro/intro-one.png')}
            style={{transform: [{scale: 0.8}]}}
          />
        </ImageContaienr>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContaienr = styled(View)`
  margin: 40px 40px 0 40px;
`;

export default ScreenComponent;
