import React from "react";
import styled from "styled-components";
import logoImage from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #070814;
  height: 82px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(${logoImage});
  background-position: 50% 50%;
  background-size: cover;
  height: 50px;
  width: 154px; // 이미지의 실제 크기에 맞게 조정하세요.
`;


const List = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  padding: 0 15px;
  cursor: pointer;
`;

const ItemButton = styled(Item)`
  background-color: #343744;
  margin-left: auto;
`;

const Text = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.18px;
  line-height: 25.2px;
  white-space: nowrap;
`;

export const Header = () => {
  return (
    <Nav>
      <DivCss>
        <LinkDiv>
          <Link>
            <Image />
          </Link>

        </LinkDiv>
        <List>
          <Item><Text>About</Text></Item>
          <Item><Text>모집안내</Text></Item>
          <Item><Text>프로젝트</Text></Item>
          <ItemButton><Text>지원하기</Text></ItemButton>
        </List>
      </DivCss>
    </Nav>
  );
};

export default Header;
