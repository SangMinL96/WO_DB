import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
import GridCardsContainer from './cards/GridCardsContainer';
import BannerIndex from './mainBanner/BannerIndex';

function HomeIndex() {
  return (
    <Container>
      <BannerIndex />
      <GridCardsContainer />
    </Container>
  );
}

export default HomeIndex;

const Container = styled.section`
  ${theme.flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
