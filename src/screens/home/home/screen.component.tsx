import React, {FC} from 'react';
import styled from 'styled-components/native';

const ScreenComponent: FC = () => {
  return (
    <Wrapper>
      <TestText>test success!</TestText>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: auto;
  justify-content: center;
`;

const TestText = styled.Text`
  margin: auto;
`;

export default ScreenComponent;
