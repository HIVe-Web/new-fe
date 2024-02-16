import React from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vw;
`;

const HistoryTitle = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 3vw;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 5vw;
`;

const HistoryDetailContainerWrapper = styled.div`
  display: flex;
`;

const HistoryDetailContainer = styled.div`
  border-radius: 2vw;
  box-shadow: 0.3vw 0.3vw 2vw 0.1vw rgba(255, 255, 255, 0.25);
  background-color: #2A2A2A;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 10vw;
  height: 20vw;
  padding: 0 5vw;
  max-width: 20vw;
  margin: 2.5vw;
`;

const HistoryHeadText = styled.div`
  color: #A49F9F;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 2vw;
  text-align: center;
  margin-bottom: 4vw;
`;

const HistoryText = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 3vw;
  text-align: center;
`;

export const History = () => {
    return (
        <HistoryContainer>
        <HistoryTitle>
          창업에 관심을 가진 다양한 학생들을 만나 <br />실제 사업화까지 경험해볼 수 있는 기회를 잡으세요!
        </HistoryTitle>
        <HistoryDetailContainerWrapper>
          <HistoryDetailContainer>
            <HistoryHeadText>
              설립된 지
            </HistoryHeadText>
            <HistoryText>
              27년
            </HistoryText>
          </HistoryDetailContainer>
          <HistoryDetailContainer>
            <HistoryHeadText>
              누적 회원 수
            </HistoryHeadText>
            <HistoryText>
              1,000명 +
            </HistoryText>
          </HistoryDetailContainer>
          <HistoryDetailContainer>
            <HistoryHeadText>
              진행된 프로젝트
            </HistoryHeadText>
            <HistoryText>
              300건 +
            </HistoryText>
          </HistoryDetailContainer>
        </HistoryDetailContainerWrapper>
      </HistoryContainer>
    );
};

export default History;