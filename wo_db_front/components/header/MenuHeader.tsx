import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

function MenuHeader() {
  return (
    <Container>
      <LinkBox>
        <li>
          <a>자유글</a>
        </li>
        <li>
          <a>랭킹</a>
        </li>
        <li>
          <a>꿀팁</a>
        </li>
        <li>
          <a>운동만남</a>
        </li>
        <li>
          <a>식품</a>
        </li>
      </LinkBox>
    </Container>
  );
}

export default MenuHeader;

const Container = styled.section`
  width: 1000px;
  height: 80px;
  border-top: none;
  background-color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 3px;
  ${theme.flexCenter};
`;

const LinkBox = styled.div`
  padding: 0 40px;
  width: 100%;
  height: 100%;
  ${theme.flexCenter};
  justify-content: space-between;
  a {
    color: ${theme.lightBlack};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`;
