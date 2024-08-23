import React from "react";
import styled from "styled-components";

import WebBackgroundImage from "../../assets/images/webBackground.svg"
import HiveLogoImage from "../../assets/images/HIVeLogo.svg"
import HVCLogoImage from "../../assets/images/Hongik Venture Club.svg"

import hivcdSImage from '../../assets/images/hivcdS.svg'
import hiceDImage from '../../assets/images/hiceD.svg'
import businessJImage from '../../assets/images/businessJ.svg'

const HeadContainer = styled.div`
  background: url(${WebBackgroundImage});
  width: 100%;
  height: 100vw;
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
  color: #000000;
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

const PersonaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FirstDescription = styled.div`
  color: #000000;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 2.2vw;
  font-weight: 600;
  margin-top: 10vw;
  margin-bottom: 3vw;
  line-height: 1.5;
`;

const PersonaWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const PersonaDetailContainer = styled.div`
  display: flex;  
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.2vw;
`;

const PersonaSpeechBubble = styled.div`
  background-color: #F1F3FF;
  border: 0px none;
  border-radius: 1.3vw;
  width: 20vw;
  height: 6.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonaSpeechBubbleImage = styled.div`
  width: 0vw;
  height: 0vw;
  border-top: 1.8vw solid #F4F6FA;
  border-left: 1vw solid transparent;
  border-right: 1vw solid transparent;
`;

const PersonaText = styled.div`
  color: #000000;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 1.35vw;
  font-weight: 600;
`;

const PersonaImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain; // 이미지 비율을 유지하면서 컨테이너를 채우기 위해 'cover' 사용
  object-position: center;
  height: 18vw;
  width: 18vw;
  align-self: center;
  max-width: 100%;
  max-height: 100%; // 뷰포트 높이의 50%를 최대 높이로 설정
`;

const PersonaName = styled.div`
  color: #000000;
  font-family: "Pretendard", Helvetica;
  font-size: 2vw;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  margin-top: 1vw;
`;

export const Intro = () => {
  return (
    <HeadContainer>
      <IntroBox>
        <HiveIntroduction>홍익대학교 벤처창업기관 하이브</HiveIntroduction>
        <HiveLogoImg src={HiveLogoImage} />
        <HVCLogoImg src={HVCLogoImage} />
      </IntroBox>

      <PersonaContainer>
        <FirstDescription>하이브는 창의적인 아이디어와 열정을 가진 학생들이 모여<br />
          혁신적인 사업을 기획하고 실행합니다.</FirstDescription>
        <PersonaWrapper>
          {/* 컴퓨터공학과 D씨 */}
          <PersonaDetailContainer>
            <PersonaSpeechBubble>
              <PersonaText>
                단기성 프로젝트가 아닌 <br />실제 창업까지 실현 해보고 싶어요.
              </PersonaText>
            </PersonaSpeechBubble>
            <PersonaSpeechBubbleImage />
            <PersonaImage src={hiceDImage} />
            <PersonaName>
              컴퓨터공학과 D씨
            </PersonaName>
          </PersonaDetailContainer>

          {/* 시각디자인과 S씨 */}
          <PersonaDetailContainer>
            <PersonaSpeechBubble>
              <PersonaText>
                디자인 역량을 살려 실제 사업에 <br /> 필요한 아이템을 만들고 싶어요.
              </PersonaText>
            </PersonaSpeechBubble>
            <PersonaSpeechBubbleImage />
            <PersonaImage src={hivcdSImage} style={{width: '34.18vw'}} />
            <PersonaName>
              시각디자인과 S씨
            </PersonaName>
          </PersonaDetailContainer>

          {/* 경영학과 J씨 */}
          <PersonaDetailContainer>
            <PersonaSpeechBubble>
              <PersonaText>
                막연히 창업에 대한 꿈은 있지만 <br /> 어떻게 시작해야 할 지 모르겠어요.
              </PersonaText>
            </PersonaSpeechBubble>
            <PersonaSpeechBubbleImage />
            <PersonaImage src={businessJImage} />
            <PersonaName>
              경영학과 J씨
            </PersonaName>
          </PersonaDetailContainer>

        </PersonaWrapper>
      </PersonaContainer>
    </HeadContainer>
  )
};

export default Intro;