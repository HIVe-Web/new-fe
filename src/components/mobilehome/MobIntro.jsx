import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

import WebBackgroundImage from "../../assets/images/webBackground.svg"
import HiveLogoImage from "../../assets/images/HIVeLogo.svg"
import HVCLogoImage from "../../assets/images/Hongik Venture Club.svg"

import hivcdSImage from '../../assets/images/hivcdS.svg'
import hiceDImage from '../../assets/images/hiceD.svg'
import businessJImage from '../../assets/images/businessJ.svg'

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { EffectCoverflow, Navigation, Mousewheel } from "swiper/core";

const MobHeadContainer = styled.div`
  background: url(${WebBackgroundImage});
  width: 100vw; // 가로 폭을 화면 너비에 맞춤
  height: 120vw; // 최소 높이를 화면 높이에 맞춤
  background-size: cover; // 배경 이미지가 컨테이너를 꽉 채우도록 조정
  margin-bottom : 1200px;
  `;

// const MobgradientBackBox = styled.div`
//   background: linear-gradient(180deg, rgba(28, 28, 28, 0) 0%, rgb(28, 28, 28) 100%);
//   display: flex;
//   flex-direction: column;
//   height: 100vw; // 높이를 화면의 높이에 맞춤
//   width: 100vw; // 가로 폭을 화면 너비에 맞춤
//   align-items: center;
//   justify-content: center;
//   margin-top: 2vw;
// `;

const MobIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 58vw;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40vw;
`;

const MobHiveIntroduction = styled.div`
  display: flex;x
  flex-direction: column;
  color: #ffffff;
  font-family: "Pretendard", Helvetica;
  font-size: 4.0vw;
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

const MobPersonaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobPersonaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-top: 20vw;
`;


const MobPersonaDetailContainer = styled.div`
  display: flex;  
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  margin: 1.2vw;
`;

const MobFirstDescription = styled.div`
    color: #000000;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.4vw;
    font-weight: 600;
    margin-top: 10vw;
    margin-bottom: 3vw;
    line-height: 1.5;
`;

const MobPersonaSpeechBubble1 = styled.div`
  background-color: #D7DDFF;
  border: 0px none;
  border-radius: 1.7vw;
  width: 50vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -4vw;
`;

const MobPersonaSpeechBubble2 = styled.div`
  background-color: #D7DDFF;
  border: 0px none;
  border-radius: 1.7vw;
  width: 50vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -4vw;
  top: -10vw;
`;

const MobPersonaSpeechBubble3 = styled.div`
  background-color: #D7DDFF;
  border: 0px none;
  border-radius: 1.7vw;
  width: 50vw;
  height: 20vw;
  justify-content: center;
  align-items: center;
  margin-right: -4vw;
`;

const MobPersonaSpeechBubbleImage = styled.div`
  width: 0; // 너비는 여전히 0으로 설정 (삼각형 모양을 유지하기 위해)
  height: 0; // 높이는 여전히 0으로 설정
  border-top: 3vw solid #000000; // 말풍선의 "말" 부분의 크기를 결정
  border-left: 1.8vw solid transparent; // 말풍선 꼬리의 왼쪽 부분
  border-right: 1.8vw solid transparent; // 말풍선 꼬리의 오른쪽 부분
`;


const MobPersonaText = styled.div`
  color: #000000;
  text-align: center;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 4.3vw;
  font-weight: 650;
`;

const MobPersonaImage = styled.object`
  aspect-ratio: 1;
  object-fit: contain; // 이미지 비율을 유지하면서 컨테이너를 채우기 위해 'cover' 사용
  object-position: center;
  height: 50vw;
  width: 30vw;
  align-self: center;

  margin-top: 4vw;
  //background-color: #FFFFFF;
`;

const MobPersonaImage2 = styled.object`
  aspect-ratio: 1;
  object-fit: contain; // 이미지 비율을 유지하면서 컨테이너를 채우기 위해 'cover' 사용
  object-position: center;
  height: 50vw;
  width: 50vw;
  align-self: center;

  margin-top: 4vw;
  //background-color: #FFFFFF;
`;

const MobPersonaName = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 5vw;
  font-weight: 700;
  margin-top: 3vw;
  text-align: center;
  white-space: nowrap;
`;

export const MobIntro = () => {
  return (
    <MobHeadContainer>
      <MobIntroBox>
        <MobHiveIntroduction>홍익대학교 벤처창업기관 하이브</MobHiveIntroduction>
        <MobHiveLogoImg src={HiveLogoImage}/>
        <MobHVCLogoImg src={HVCLogoImage}/>
      </MobIntroBox>

      <MobPersonaContainer>
            <MobFirstDescription>하이브는 창의적인 아이디어와 <br/>열정을 가진 학생들이 모여<br />
                    혁신적인 사업을 기획하고 실행합니다.</MobFirstDescription>

            <MobPersonaWrapper>

              <MobPersonaDetailContainer>
                  <MobPersonaSpeechBubble1>
                      <MobPersonaText>
                          단기성 프로젝트를 넘어 <br />실제 창업까지 이끌어내고 싶어요.
                      </MobPersonaText>
                  </MobPersonaSpeechBubble1>
                  <MobPersonaSpeechBubbleImage />
                  <MobPersonaImage data={hiceDImage}/>
                  <MobPersonaName>
                      컴퓨터공학과 D씨
                  </MobPersonaName>
                </MobPersonaDetailContainer>
              

                <MobPersonaDetailContainer>
                  <MobPersonaSpeechBubble2>
                      <MobPersonaText>
                          디자인 역량을 살려 실제 사업에 <br /> 필요한 아이템을 만들고 싶어요.
                      </MobPersonaText>
                  </MobPersonaSpeechBubble2>
                  <MobPersonaSpeechBubbleImage />
                  <MobPersonaImage2 data={hivcdSImage}/>
                  <MobPersonaName>
                      시각디자인과 S씨
                  </MobPersonaName>
                </MobPersonaDetailContainer>  

                <MobPersonaDetailContainer>
                  <MobPersonaSpeechBubble3>
                      <MobPersonaText>
                          막연히 창업에 대한 꿈은 있지만 <br /> 어떻게 시작해야 할 지 모르겠어요.
                      </MobPersonaText>
                  </MobPersonaSpeechBubble3>
                  <MobPersonaSpeechBubbleImage />
                  <MobPersonaImage data={businessJImage}/>
                  <MobPersonaName>
                      경영학과 J씨
                  </MobPersonaName>
                </MobPersonaDetailContainer>

              </MobPersonaWrapper>
        </MobPersonaContainer>
    </MobHeadContainer>
  );
};

export default MobIntro;