import React from "react";
import styled from "styled-components";

const MobStyledFooter = styled.footer`
  background-color: #1C1C1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  font-size: 2.3vw;
  font-weight: 500;
`;

const MobFooterInfo = styled.div`
  color: #606475;
  font-family: "Pretendard-Medium", Helvetica, sans-serif;
  font-size: 2.3vw;
`;

export const MobFooter = () => {
  return (
    <MobStyledFooter>
      <MobFooterContent>
        <MobSocialLinks>
          <MobSocialLink href="https://www.hongik.ac.kr/index.do">Hongik Univ.</MobSocialLink>
          <MobSocialLink href="https://home.hongik.ac.kr/kr/life/seoul-hive.do">Introduce</MobSocialLink>
          <MobSocialLink href="https://www.instagram.com/hive_hongik/">Instagram</MobSocialLink>
        </MobSocialLinks>

        <MobSocialLinks>
          <MobSocialLink href="#">Kakao channel    |    @HIVe</MobSocialLink>
          <MobSocialLink href="#">E-mail   |   hive_hongik@naver.com</MobSocialLink>
        </MobSocialLinks>
        <MobFooterInfo>© 2024 HIVe. ALL RIGHTS RESERVED.</MobFooterInfo>
      </MobFooterContent>
    </MobStyledFooter>
  );
};

export default MobFooter;