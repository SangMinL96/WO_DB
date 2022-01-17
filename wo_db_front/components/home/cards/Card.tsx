import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
type PropsType = {
  category: string;
};
function Card({ category }: PropsType) {
  return (
    <Container>
      <CategoryBox>
        <h3>{category}</h3>
      </CategoryBox>
      <ListBox>
        <li>
          <TopBox>
            <h5>ㅋㅋㅋ이건 아니지F이건 아니지F이건 아니지F이건 아니지F이건 아니지</h5>
            <Badge>[30]</Badge>
          </TopBox>
          <BottomBox>
            <span>#스타</span>
            <Info>dasdfsddfsasfs</Info>
          </BottomBox>
        </li>
        <li>
          <TopBox>
            <h5>ㅋㅋㅋ이건 아니지F이건 아니지F이건 아니지F이건 아니지F이건 아니지</h5>
            <Badge>[30]</Badge>
          </TopBox>
          <BottomBox>
            <span>#스타</span>
            <Info>dasdfsddfsasfs</Info>
          </BottomBox>
        </li>
        <li>
          <TopBox>
            <h5>ㅋㅋㅋ이건 아니지F이건 아니지F이건 아니지F이건 아니지F이건 아니지</h5>
            <Badge>[30]</Badge>
          </TopBox>
          <BottomBox>
            <span>#스타</span>
            <Info>dasdfsddfsasfs</Info>
          </BottomBox>
        </li>
        <li>
          <TopBox>
            <h5>ㅋㅋㅋ이건 아니지F이건 아니지F이건 아니지F이건 아니지F이건 아니지</h5>
            <Badge>[30]</Badge>
          </TopBox>
          <BottomBox>
            <span>#스타</span>
            <Info>dasdfsddfsasfs</Info>
          </BottomBox>
        </li>
        <li>
          <TopBox>
            <h5>ㅋㅋㅋ이건 아니지F이건 아니지F이건 아니지F이건 아니지F이건 아니지</h5>
            <Badge>[30]</Badge>
          </TopBox>
          <BottomBox>
            <span>#스타</span>
            <Info>dasdfsddfsasfs</Info>
          </BottomBox>
        </li>
      </ListBox>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  ${theme.flexCenter};
  flex-direction: column;
  width: 375px;
  height: 700px;
  background-color: ${theme.white};
  ${theme.boxShadow};
  border-radius: 10px;
  border: 1px solid ${theme.ashgray};
  margin-top: 20px;
`;
const CategoryBox = styled.div`
  ${theme.flexCenter};
  width: 60%;
  height: 40px;
  color: ${theme.black};
  border: 1px solid ${theme.ashgray};
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  h3 {
    font-size: 16px;
  }
`;

const ListBox = styled.div`
  ${theme.flexCenter};
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  color: ${theme.black};
  margin-top: 10px;
  > li {
    cursor: pointer;
    ${theme.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    width: 92%;
    height: 50px;
    border-bottom: 1px solid ${theme.ashgray};
    margin-bottom: 8px;
    &:hover {
      transform: scale(1.012);
    }
  }
`;
const TopBox = styled.div`
  ${theme.flexCenter};
  width: 95%;

  > h5 {
    position: relative;
    width: 100%;
    ${theme.textEllipsis};
    font-size: 15px;
  }
`;

const BottomBox = styled.div`
  margin-top: 5px;
  width: 100%;
  ${theme.flexCenter};
  justify-content: space-between;
  > span {
    margin-top: 3px;
    margin-left: 2px;
    font-size: 11px;
  }
`;

const Badge = styled.div`
  font-size: 11px;
  font-weight: bold;
  color: ${theme.red};
  margin-left: 4px;
`;
const Info = styled.div`
  ${theme.flexCenter};
  flex-direction: column;
  justify-content: flex-end;
  font-size: 13px;
  color: ${theme.gray};
`;
