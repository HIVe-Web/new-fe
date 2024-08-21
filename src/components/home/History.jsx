import React from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4vw;
`;

const HistoryDetailContainerWrapper = styled.div`
  display: flex;
`;

const HistoryDetailContainer = styled.div`
  border-radius: 2vw;
  box-shadow: 0vw 1.3vw 1.8vw 0px rgba(0, 0, 0, 0.32); /* 20px, 26px를 vw 단위로 변환 */ 
  background-color: #D7DDFF;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 8vw;
  height: 17vw;
  padding: 0 5vw;
  margin: 2.5vw;
`;

const HistoryHeadText = styled.div`
  color: #23257B;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 2vw;
  text-align: center;
  margin-bottom: 3vw;
`;

const HistoryText = styled.div`
  color: #000000;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 2.8vw;
  text-align: center;
  margin-bottom: 1.2vw;
`;

export const History = () => {
  return (
    <HistoryContainer>
      <HistoryDetailContainerWrapper>
        <HistoryDetailContainer>
          <HistoryHeadText>
            설립된 지
          </HistoryHeadText>
          <HistoryText>
            29년
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