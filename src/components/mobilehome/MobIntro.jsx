import React from "react";
import styled from "styled-components";

import gradationBackImg from "../../assets/images/gradationBack.png"
import HiveLogoImage from "../../assets/images/HIVeLogo.svg"
import HVCLogoImage from "../../assets/images/Hongik Venture Club.svg"

const MobHeadContainer = styled.div`
  background: url(${gradationBackImg});
  width: 100vw;
  height: 100vw;
  background-size: 100%;
`;

const MobgradientBackBox = styled.div`
  background: linear-gradient(180deg, rgba(28, 28, 28, 0) 0%, rgb(28, 28, 28) 100%);
  display: flex;
  flex-direction: column;
  height: 110vw;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const HiveIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 4vw;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const HiveLogoImg = styled.img`
  object-fit: contain;
  height: 27vw;
  width: 30vw;
`;

const HVCLogoImg = styled.img`
  object-fit: contain;
  height: 10vw;
  width: 45vw;
`;

export const MobIntro = () => {
  return (
    <MobHeadContainer>
      <MobgradientBackBox>
        <HiveIntroduction>홍익대학교 벤처창업기관 하이브</HiveIntroduction>
        <HiveLogoImg src={HiveLogoImage}/>
        <HVCLogoImg src={HVCLogoImage}/>
      </MobgradientBackBox>
    </MobHeadContainer>
  );
};

export default MobIntro;