import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MenuHeader from './MenuHeader';
function Header() {
  return (
    <HeaderBox>
      <MainHeader />
      <MenuHeader />
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.header`
  width: 100%;
  height: 160px;
  ${theme.flexCenter};
  flex-direction: column;
  justify-content: flex-start;
`;
