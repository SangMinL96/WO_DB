import theme from '@styles/theme';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import textDelIcon from '@public/images/textDelIcon.png';

type PropsType = {
  width?: string | number;
  height?: string | number;
  placeholder?: string;
  value: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
};

function TextInput({ width = '100%', height = '40px', value, onChange, placeholder, defaultValue }: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <InputBox width={width} height={height}>
      <input ref={inputRef} placeholder={placeholder} value={value} onChange={onChange} defaultValue={defaultValue} />
      <DelButtonBox onClick={() => (inputRef.current.value = '')}>
        <Image src={textDelIcon} alt='textDelIcon' />
      </DelButtonBox>
    </InputBox>
  );
}

export default TextInput;

type StyledType = {
  height: string | number;
  width: string | number;
};
const InputBox = styled.div<StyledType>`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  > input {
    font-size: 14px;
    color: ${theme.black};
    width: 100%;
    height: 100%;
    padding: 0 40px 0 15px;
    border: 1px solid ${theme.ashgray};
    border-radius: 8px;
    ${theme.boxShadow};
  }
`;

const DelButtonBox = styled.div`
  position: absolute;
  right: -45px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
