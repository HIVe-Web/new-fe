import React from "react";
import styled from "styled-components";

import InstargramLogoImg from "../../assets/images/instagramLogo.svg"

const StyledFooter = styled.footer`
  background-color: #1C1C1C;
  padding: 5vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 10vw; // 데스크탑 화면에 맞춘 높이
  width: 100%; // 데스크탑 화면의 너비
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column; // 데스크탑 화면 기준으로 변경
  align-items: center;
  justify-content: space-around; // 데스크탑 화면 기준으로 변경
  width: 100%; // 데스크탑 화면의 너비
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 4vw; // 간격 유지
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #a5b2c5;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 1.8vw; // 데스크탑 화면 기준 사이즈
  font-weight: 500;
`;

const FooterInfo = styled.div`
  color: #606475;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 1.8vw; // 데스크탑 화면 기준 사이즈
  margin-top: 4vw; // 상단 여백
`;

const InstragramLogo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  height: 1.3vw;
  width: 1.3vw;
  align-self: center;
  max-width: 100%;
  max-height: 100%; // 뷰포트 높이의 50%를 최대 높이로 설정
  margin-right: 0.45vw;
  margin-left: 1vw;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://www.hongik.ac.kr/index.do">Hongik Univ.</SocialLink>
          <SocialLink href="https://www.instagram.com/hive_hongik/">
          <InstragramLogo src={InstargramLogoImg}/>
            Instagram
          </SocialLink>
        </SocialLinks>
        
        <FooterInfo>© 2024 HIVe. ALL RIGHTS RESERVED.</FooterInfo>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
