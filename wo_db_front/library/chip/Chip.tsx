import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
type PropsType = {
  name: string;
};
function Chip({ name }: PropsType) {
  return <ChipText>{name}</ChipText>;
}

export default Chip;

const ChipText = styled.span`
  font-size: 8px;
  font-weight: bold;
  color: ${theme.gray};
  border: 1px solid ${theme.ashgray};
  border-radius: 6px;
  ${theme.flexCenter};

  padding: 1px 7px;
  background-color: ${theme.whiteYellow};
`;
