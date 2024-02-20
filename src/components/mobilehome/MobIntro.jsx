import React from "react";
import styled from "styled-components";

const HeadContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vw; /* 모바일에서 더 많은 여백을 주도록 수정 */
  margin-bottom: 10vw; /* 모바일에서 더 적은 여백을 주도록 수정 */
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  text-align: center;
`;

// HIVe 제목 스타일
const Title = styled(TextWrapper)`
  color: #70FF00;
  font-family: "Pretendard-Bold", Helvetica;
  font-weight: 600;
  font-size: 14vw; /* 모바일에서 더 큰 폰트 사이즈로 수정 */
  margin-top: 1vw;
`;

// 설명 및 정보 텍스트 스타일
const SubDescription = styled(TextWrapper)`
  color: #838BA2;  
  font-size: 3.3vw; /* 모바일에서 더 큰 폰트 사이즈로 수정 */
  margin-top: 1vw;
  font-weight: 500;
`;

const Description = styled(TextWrapper)`
  color: #ffffff;  
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 4.7vw; /* 모바일에서 더 큰 폰트 사이즈로 수정 */
  font-weight: 700;
  margin-top: 13vw; /* 모바일에서 더 많은 여백을 주도록 수정 */
  line-height: 1.5;
`;

// 별표(*) 및 홍익대학교 벤처창업기관 텍스트를 포함하는 컨테이너
const HighlightContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1vw;
`;

const HighlightText = styled(TextWrapper)`
  font-size: 8vw; // 화면 너비에 따라 크기 조정
  margin: 0 1vw; // 양 옆에 여백 추가
  margin-top: 1vw;
  font-weight: 600;
`;

const StyledSpan = styled.span`
  font-size: 4vw; /* 모바일에서 더 큰 폰트 사이즈로 수정 */
  margin-bottom: 4vw; /* 모바일에서 더 적은 여백을 주도록 수정 */
`;

export const Intro = () => {
  return (
    <HeadContainer>
        <HighlightContainer>
        <HighlightText>홍익대학교 
            <StyledSpan>*</StyledSpan>
            벤처창업기관</HighlightText>
            <Title>HIVe</Title>
        </HighlightContainer>
        <SubDescription>
          * 중소벤처기업부의 인가를 받아 공식적으로<br/> 
          학생처의 지원을 받는 교내 벤처창업기관
        </SubDescription>

        <Description>
          창의적인 아이디어와 열정을 가진 학생들이 모여 <br/>
          혁신적인 사업을 기획하고 실행합니다.
        </Description>
    </HeadContainer>
  );
};

export default Intro;