import React from "react";
import styled from "styled-components";

// 미디어 쿼리를 위한 기본 설정
const sizes = {
  tablet: '768px',
  desktop: '1024px',
};

const media = {
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const StyledFooter = styled.footer`
  background-color: #1C1C1C;
  padding: 5vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media ${media.desktop} {
    height: 10vw;
    width: 100%;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media ${media.desktop} {
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2vw;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #a5b2c5;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 1.3vw;
  font-weight: 500;
`;

const FooterInfo = styled.div`
  color: #606475;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 1.4vw;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://www.hongik.ac.kr/index.do">Hongik Univ.</SocialLink>
          <SocialLink href="https://home.hongik.ac.kr/kr/life/seoul-hive.do">Introduce</SocialLink>
          <SocialLink href="https://www.instagram.com/hive_hongik/">Instagram</SocialLink>
        </SocialLinks>
        <SocialLinks>
          <SocialLink href="#">Kakao channel    |    @HIVe</SocialLink>
          <SocialLink href="#">E-mail   |   hive_hongik@naver.com</SocialLink>
        </SocialLinks>
        <FooterInfo>© 2024 HIVe. ALL RIGHTS RESERVED.</FooterInfo>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;