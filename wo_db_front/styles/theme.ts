import { css } from 'styled-components';

// color: ${props => props.theme.red}; 이런식으로
const colors = {
  black: '#303030',
  lightBlack: '#707070',
  pink: '#fd4381',
  yellow: '#ffc31c',
  lightBlue: '#bcd1f8',
  mediumBlue: '#d7e3fb',
  blue: '#4866E4',
  gray: '#8c8c8c',
  red: '#FF3535',
  lightGray: '#F5F5F5',
  ashgray: '#e4e2e3',
  whiteYellow: '#fafafa',
  white: '#ffffff',
};

const breakpoints = {
  mobileSM: 320,
  mobileMD: 375,
  mobileLG: 425,
  tablet: 768,
  pc: 1280,
};
const hideScroll = css`
  --ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
const textEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  white-space: nowrap;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
`;
const textEllipsisMulti = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
// 밑에는 css 도 이렇게 할 수 있다는거
// 스타일 적용할 땐 다른 속성 밑에 ${props => props.theme.flexCenter} 추가해주기.
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const resetBtnStyle = css`
  appearance: none;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
const boxShadow = css`
  box-shadow: 1px 1px 2px 1px rgba(25, 33, 41, 0.048);
`;
const theme = {
  ...breakpoints,
  ...colors,
  flexCenter,
  hideScroll,
  textEllipsis,
  textEllipsisMulti,
  resetBtnStyle,
  boxShadow,
};

export default theme;
