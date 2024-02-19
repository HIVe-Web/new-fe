import React from "react";
import styled from "styled-components";

import hivcdSImage from '../../assets/images/hivcdS.png'
import hiceDImage from '../../assets/images/hiceD.png'
import businessJImage from '../../assets/images/businessJ.png'

const PersonaContainer = styled.div`
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
  background-color: #ffffff;
  border: 0px none;
  border-radius: 1.3vw;
  width: 20vw;
  height: 9vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonaSpeechBubbleImage = styled.div`
  width: 0vw;
  height: 0vw;
  border-top: 1.8vw solid #ffffff;
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
  height: 20vw;
  width: 20vw;
  align-self: center;
  max-width: 80%;
  max-height: 80%; // 뷰포트 높이의 50%를 최대 높이로 설정
`;

const PersonaName = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 2vw;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;


export const Persona = () => {
    return (
        <PersonaContainer>
        <PersonaDetailContainer>
            <PersonaSpeechBubble>
              <PersonaText>
              단기성 프로젝트가 아닌 <br/>실제 창업까지 실현 해보고 싶어요.
              </PersonaText>
            </PersonaSpeechBubble>
            <PersonaSpeechBubbleImage />
            <PersonaImage src={hiceDImage} />
            <PersonaName>
              컴퓨터공학과 D씨
            </PersonaName>
          </PersonaDetailContainer>
          <PersonaDetailContainer>
            <PersonaSpeechBubble>
              <PersonaText>
                디자인 역량을 살려 실제 사업에 <br/> 필요한 아이템을 만들고 싶어요.
              </PersonaText>
            </PersonaSpeechBubble>
            <PersonaSpeechBubbleImage />
            <PersonaImage src={hivcdSImage} />
            <PersonaName>
              시각디자인과 S씨
            </PersonaName>
          </PersonaDetailContainer>
  
          <PersonaDetailContainer>
            <PersonaSpeechBubble>
              <PersonaText>
              막연히 창업에 대한 꿈은 있지만 <br/> 어떻게 시작해야 할 지 모르겠어요.
              </PersonaText>
            </PersonaSpeechBubble>
            <PersonaSpeechBubbleImage />
            <PersonaImage src={businessJImage} />
            <PersonaName>
              경영학과 J씨
            </PersonaName>
          </PersonaDetailContainer>
        </PersonaContainer>
    )
};

export default Persona;