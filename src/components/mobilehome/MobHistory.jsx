import React from "react";
import styled from "styled-components";

const MobHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8vw;
`;

const MobHistoryTitle = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 5vw;
  font-weight: 900;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 8vw;
`;

const MobHistoryDetailContainerWrapper = styled.div`
  display: flex;
`;

const MobHistoryDetailContainer = styled.div`
  border-radius: 2vw;
  box-shadow: 0.3vw 0.3vw 2vw 0.1vw rgba(255, 255, 255, 0.25);
  background-color: #2A2A2A;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 15vw;
  height: 25vw;
  padding: 0 5vw;
  margin: 2.5vw;
`;

const MobHistoryHeadText = styled.div`
  color: #A49F9F;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 3.5vw;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3vw;
`;

const MobHistoryText = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 4.5vw;
  font-weight: 900;
  text-align: center;
`;

export const MobHistory = () => {
    return (
        <MobHistoryContainer>
            <MobHistoryTitle>
                창업에 관심을 가진 다양한 학생들을 만나 <br />사업화까지 경험해볼 수 있는 기회를 잡으세요!
            </MobHistoryTitle>
            <MobHistoryDetailContainerWrapper>
                <MobHistoryDetailContainer>
                    <MobHistoryHeadText>
                        설립된 지
                    </MobHistoryHeadText>
                    <MobHistoryText>
                        27년
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