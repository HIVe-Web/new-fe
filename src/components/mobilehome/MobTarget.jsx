import React from "react";
import styled from "styled-components";

import TargetBackgroundImage from "../../assets/images/TargetBackgroundMob.svg" 

const MobTargetHeadContainer = styled.div`
  background: url(${TargetBackgroundImage});
  width: 100vw;
  height: 160vw;
  background-size: cover;
  margin-top: 100px;
  background-position: center;
`;

const MobTargetContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 25vw;
`;

const MobTargetTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.5vw;
    margin-bottom: 3vw;
`;

const MobTargetSubTitle = styled.div`
    color: #4A4DFF;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-bottom: 3vw;
`;

const MobTargetTextBox = styled.div`
    border-radius: 4vw; 
    box-shadow: 0.2vw 0.2vw 0.73vw 0px rgba(142, 142, 142, 0.25); /* 2px, 7.3px를 vw 단위로 변환 */
    align-items: center;
    display: flex;
    background-color: #F1F3FF;
    min-height: 15vw;
    width: 85vw;
    margin: 2vw;
`;

const MobTargetTextNumber = styled.div`
    color: #4A4DFF;
    font-family: "Pretendard-ExtraBold", Helvetica;
    font-size: 5vw;
    text-align: center;
    margin-left: 4vw;
`;

const MobTargetText = styled.div`
    color: #000000;
    margin-left: 2vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 4.3vw;
`;


export const MobTargets = () => {
    return (
    <MobTargetHeadContainer>
        <MobTargetContainer>
            <MobTargetTitle>Targets</MobTargetTitle>
            <MobTargetSubTitle>모집 대상</MobTargetSubTitle>
            <MobTargetTextBox>
                <MobTargetTextNumber>01</MobTargetTextNumber>
                <MobTargetText>홍익대학교 재학생/휴학생</MobTargetText>
            </MobTargetTextBox>
            <MobTargetTextBox>
                <MobTargetTextNumber>02</MobTargetTextNumber>
                <MobTargetText>성별, 학과 무관 창업에 관심 있는 분</MobTargetText>
            </MobTargetTextBox>
            <MobTargetTextBox>
                <MobTargetTextNumber>03</MobTargetTextNumber>
                <MobTargetText>막연했던 아이디어를 실현해보고 싶은 분</MobTargetText>
            </MobTargetTextBox>
            <MobTargetTextBox>
                <MobTargetTextNumber>04</MobTargetTextNumber>
                <MobTargetText>대학 생활을 더 특별하게 만들고 싶은 분</MobTargetText>
            </MobTargetTextBox>
        </MobTargetContainer>
    </MobTargetHeadContainer>
    )
};

export default MobTargets;