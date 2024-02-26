import React from "react";
import styled from "styled-components";

import InstargramLogoImg from "../../assets/images/instagramLogo.svg"

const MobStyledFooter = styled.footer`
  background-color: #1C1C1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30vw;
`;

const MobFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 7vw;
  margin-bottom: 7vw;
`;

const MobSocialLinks = styled.div`
  display: flex;
  gap: 2vw;
`;

const MobSocialLink = styled.a`
  text-decoration: none;
  color: #a5b2c5;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 3vw;
  font-weight: 500;
  margin: 1vw;
`;

const MobFooterInfo = styled.div`
  color: #606475;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 3vw;
`;

const MobInstragramLogo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  height: 2vw;
  width: 2vw;
  align-self: center;
  max-width: 100%;
  max-height: 100%; // 뷰포트 높이의 50%를 최대 높이로 설정
  margin-right: 1vw;
  margin-left: 1vw;
`;

export const MobFooter = () => {
  return (
    <MobStyledFooter>
      <MobFooterContent>
        <MobSocialLinks>
          <MobSocialLink href="https://www.hongik.ac.kr/index.do">Hongik Univ.</MobSocialLink>
          <MobSocialLink href="https://www.instagram.com/hive_hongik/">
            <MobInstragramLogo src={InstargramLogoImg}/>
            Instagram
            </MobSocialLink>
        </MobSocialLinks>
        <MobFooterInfo>© 2024 HIVe. ALL RIGHTS RESERVED.</MobFooterInfo>
      </MobFooterContent>
    </MobStyledFooter>
  );
};

export default MobFooter;