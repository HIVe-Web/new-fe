import React from "react";
import styled from "styled-components";

import gradationBackImg from "../../assets/images/gradationBack.png"
import HiveLogoImage from "../../assets/images/HIVeLogo.svg"
import HVCLogoImage from "../../assets/images/Hongik Venture Club.svg"

const MobHeadContainer = styled.div`
  background: url(${gradationBackImg});
  width: 100vw; // 가로 폭을 화면 너비에 맞춤
  height: 100vw; // 최소 높이를 화면 높이에 맞춤
  background-size: cover; // 배경 이미지가 컨테이너를 꽉 채우도록 조정
`;

const MobgradientBackBox = styled.div`
  background: linear-gradient(180deg, rgba(28, 28, 28, 0) 0%, rgb(28, 28, 28) 100%);
  display: flex;
  flex-direction: column;
  height: 100vw; // 높이를 화면의 높이에 맞춤
  width: 100vw; // 가로 폭을 화면 너비에 맞춤
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
`;

const MobHiveIntroduction = styled.div`
  display: flex;x
  flex-direction: column;
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 4.6vw;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const MobHiveLogoImg = styled.img`
  object-fit: contain;
  max-height: 27vw;
  max-width: 80vw; // 이미지의 최대 가로 폭을 화면의 80%로 제한
  margin-top: 7vw;
  margin-bottom: 8vw;
`;

const MobHVCLogoImg = styled.img`
  object-fit: contain;
  max-height: 10vw;
  max-width: 80vw; // 이미지의 최대 가로 폭을 화면의 80%로 제한
  margin-bottom: 15vw;
`;

export const MobIntro = () => {
  return (
    <MobHeadContainer>
      <MobgradientBackBox>
        <MobHiveIntroduction>홍익대학교 벤처창업기관 하이브</MobHiveIntroduction>
        <MobHiveLogoImg src={HiveLogoImage}/>
        <MobHVCLogoImg src={HVCLogoImage}/>
      </MobgradientBackBox>
    </MobHeadContainer>
  );
};

export default MobIntro;
