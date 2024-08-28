import React from "react";
import styled from "styled-components";

const MobHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vw;
`;

const MobHistoryDetailContainerWrapper = styled.div`
  display: flex;
`;

const MobHistoryDetailContainer = styled.div`
  border-radius: 2vw;
  background-color: #D7DDFF;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 17vw;
  height: 27vw;
  padding: 0 5vw;
  margin: 2.5vw;
  box-shadow: -2px 4px 2px rgba(0, 0, 0, 0.4);
`;

const MobHistoryHeadText = styled.div`
  color: #23257B;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 3.5vw;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3vw;
`;

const MobHistoryText = styled.div`
  color: #000000;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 4.5vw;
  font-weight: 900;
  text-align: center;
`;

export const MobHistory = () => {
    return (
        <MobHistoryContainer>
            <MobHistoryDetailContainerWrapper>
                <MobHistoryDetailContainer>
                    <MobHistoryHeadText>
                        설립된 지
                    </MobHistoryHeadText>
                    <MobHistoryText>
                        29년
                    </MobHistoryText>
                </MobHistoryDetailContainer>
                <MobHistoryDetailContainer>
                    <MobHistoryHeadText>
                        누적 회원 수
                    </MobHistoryHeadText>
                    <MobHistoryText>
                        1,000명 +
                    </MobHistoryText>
                </MobHistoryDetailContainer>
                <MobHistoryDetailContainer>
                    <MobHistoryHeadText>
                        진행된 프로젝트
                    </MobHistoryHeadText>
                    <MobHistoryText>
                        300건 +
                    </MobHistoryText>
                </MobHistoryDetailContainer>
            </MobHistoryDetailContainerWrapper>
        </MobHistoryContainer>
    );
};

export default MobHistory;