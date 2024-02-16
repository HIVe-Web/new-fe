import React from "react";
import styled from "styled-components";

const TargetContainer = styled.div`
    background-color: #1C1C1C;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vw;
`;

const TargetTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 3.4vw;
    margin-bottom: 1vw;
`;

const TargetSubTitle = styled.div`
    color: #70ff00;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 4vw;
    margin-bottom: 1vw;
`;

const TargetTextBox = styled.div`
    border-radius: 1vw; 
    box-shadow: 0.2vw 0.2vw 0.73vw 0px rgba(142, 142, 142, 0.25); /* 2px, 7.3px를 vw 단위로 변환 */
    align-items: center;
    display: flex;
    background-color: #2a2a2a;
    min-height: 8vw;
    width: 60vw;
    margin: 1.1vw;
`;

const TargetTextNumber = styled.div`
    color: #70ff00;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3vw;
    text-align: center;
    margin-left: 2vw;
`;

const TargetText = styled.div`
    color: #ffffff;
    margin-left: 2vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.3vw;
`;


export const Targets = () => {
    return (
        <TargetContainer>
            <TargetTitle>Targets</TargetTitle>
            <TargetSubTitle>모집 대상</TargetSubTitle>
            <TargetTextBox>
                <TargetTextNumber>01</TargetTextNumber>
                <TargetText>홍익대학교 재학생/휴학생</TargetText>
            </TargetTextBox>
            <TargetTextBox>
                <TargetTextNumber>02</TargetTextNumber>
                <TargetText>성별, 학과 무관 창업에 관심 있는 분</TargetText>
            </TargetTextBox>
            <TargetTextBox>
                <TargetTextNumber>03</TargetTextNumber>
                <TargetText>막연했던 아이디어를 실현해보고 싶은 분</TargetText>
            </TargetTextBox>
            <TargetTextBox>
                <TargetTextNumber>04</TargetTextNumber>
                <TargetText>보람찬 대학 생활을 원하는 분</TargetText>
            </TargetTextBox>
        </TargetContainer>
    )
};

export default Targets;