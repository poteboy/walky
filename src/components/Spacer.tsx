import React, {FC} from 'react';
import styled from 'styled-components/native';

type Props = {
  size: number;
};

const Spacer: FC<Props> = ({size}) => {
  return (
    <>
      <VerticalSpace size={size} />
    </>
  );
};

const VerticalSpace = styled.Text<{size: number}>`
  height: ${props => `${props.size}px`};
  width: auto;
  flex-shrink: 0;
`;

export default Spacer;
