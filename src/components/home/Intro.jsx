import React from "react";
import styled from "styled-components";

import WebBackgroundImage from "../../assets/images/webBackground.svg"
import HiveLogoImage from "../../assets/images/HIVeLogo.svg"
import HVCLogoImage from "../../assets/images/Hongik Venture Club.svg"

const HeadContainer = styled.div`
  background: url(${WebBackgroundImage});
  width: 100%;
  height: 44vw;
  background-size: 100%;
`;

const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vw;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10vw;
`;

const HiveIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 2.5vw;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const HiveLogoImg = styled.img`
  object-fit: contain;
  height: 18vw;
  width: 20vw;
`;

const HVCLogoImg = styled.img`
  object-fit: contain;
  height: 8vw;
  width: 25vw;
`;

export const Intro = () => {
    return (
        <HeadContainer>
          <IntroBox>
            <HiveIntroduction>홍익대학교 벤처창업기관 하이브</HiveIntroduction>
            <HiveLogoImg src={HiveLogoImage} />
            <HVCLogoImg src={HVCLogoImage}/>
          </IntroBox>
      </HeadContainer>
    )
};

export default Intro;