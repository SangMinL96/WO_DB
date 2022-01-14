import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function GridCardsContainer() {
  return (
    <Container>
      <Card category='자유게시판' />
      <Card category='자유게시판' />
      <Card category='자유게시판' />
    </Container>
  );
}

export default React.memo(GridCardsContainer);
const Container = styled.section`
  ${theme.flexCenter};
  width: 1280px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 70px;
  margin-bottom: 80px;
  margin-top: 80px;
  @media (max-width: ${theme.pc + 1}px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 15px;
  }

  @media (max-width: ${theme.tablet}px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 15px;
    grid-gap: 40px 15px;
  }
`;
