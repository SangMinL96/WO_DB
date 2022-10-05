import theme from '@styles/theme';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '@public/images/logo.png';
import TextInput from 'library/input/TextInput';

function MainHeader() {
  const [value, setValue] = useState<string>('');
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <Container>
      <MainHeaderBox>
        <ImageBox>
          <Image src={logo} alt='logo' />
        </ImageBox>
        <TextInput width={'400px'} value={value} onChange={onChange} />
        <LoginBox>
          <div>로그인</div>
          <div>회원가입</div>
        </LoginBox>
      </MainHeaderBox>
    </Container>
  );
}

export default MainHeader;
const Container = styled.section`
  width: 100%;
  ${theme.flexCenter};
  ${theme.boxShadow};
`;
const MainHeaderBox = styled.div`
  width: ${theme.pc}px;
  height: 80px;
  padding: 15px 0;
  ${theme.flexCenter};
  justify-content: space-between;
`;
const ImageBox = styled.div`
  width: 250px;
  padding: 15px 0;
  ${theme.flexCenter};
`;
const LoginBox = styled.div`
  padding: 15px 0;
  ${theme.flexCenter};
  > div {
    margin-left: 15px;
    font-size: 15px;
    font-weight: bold;
    color: ${theme.gray};
    cursor: pointer;
  }
`;
