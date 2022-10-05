import theme from '@styles/theme';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import styled from 'styled-components';
type PropsType = {
  scrollDir?: string;
};
function MenuHeader({ scrollDir }: PropsType) {
  const isScrollDir = useMemo(() => scrollDir, [scrollDir]);
  const router = useRouter();
  return (
    <>
      <Container scrollUpDown={isScrollDir}>
        <LinkBox>
          <Link href={'/'} passHref>
            <a className={router.route === '/' && 'active_link'}>홈</a>
          </Link>
          <Link href={'/ranking'} passHref>
            <a className={router.route.includes('/ranking') && 'active_link'}>랭킹</a>
          </Link>
          <li>
            <a>자유게시판</a>
          </li>
          <li>
            <a>익명게시판</a>
          </li>
          <li>
            <a>운동영상</a>
          </li>
          <li>
            <a>운동만남</a>
          </li>
          <li>
            <a>식단</a>
          </li>
        </LinkBox>
      </Container>
      <BottomBox />
    </>
  );
}

export default MenuHeader;

type StyledType = {
  scrollUpDown?: string;
};

const Container = styled.section<StyledType>`
  overflow: hidden;
  width: 1000px;
  height: ${props => (props.scrollUpDown === 'up' ? '90px' : '0px')};
  border-top: none;
  background-color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 3px;
  ${theme.flexCenter};
  border: 1px solid ${theme.lightGray};
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
    padding: 7px 0;
  }
  .active_link {
    border-bottom: 3px solid ${theme.lightBlack};
  }
`;

const BottomBox = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${theme.white};
`;
