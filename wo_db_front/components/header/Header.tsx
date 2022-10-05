import theme from '@styles/theme';
import { useScrollDir } from 'hooks/useScrollDir';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MenuHeader from './MenuHeader';
function Header() {
  const { scrollDir, setScrollDir } = useScrollDir();
  useEffect(() => {
    const scroll = setTimeout(() => setScrollDir('up'), 700);
    return () => clearTimeout(scroll);
  }, [scrollDir, setScrollDir]);
  return (
    <HeaderBox scrollDir={scrollDir}>
      <MainHeader />
      <MenuHeader scrollDir={scrollDir} />
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.header<{ scrollDir: string }>`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${props => (props.scrollDir === 'up' ? '185px' : '135px')};
  ${theme.flexCenter};
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${theme.white};
  z-index: 99;
`;
