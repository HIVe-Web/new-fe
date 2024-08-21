import React from "react";
import styled from "styled-components";

import TargetBackgroundImage from "../../assets/images/targetBackground.svg"

const TargetContainer = styled.div`
    background: url(${TargetBackgroundImage});
    width: 100%;
    height: 61vw;
    background-size: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 8vw;
`;

const TargetTitle = styled.div`
    color: #8884A8;
    text-align: center;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 2.6vw;
    margin-bottom: 0.7vw;
`;

const TargetSubTitle = styled.div`
    color: #4A4DFF;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.5vw;
    margin-bottom: 1.5vw;
`;

const TargetTextBox = styled.div`
    border-radius: 1vw; 
    align-items: center;
    display: flex;
    background-color: #F1F3FF;
    min-height: 8vw;
    width: 60vw;
    margin: 1.3vw;
`;

const TargetTextNumber = styled.div`
    color: #4A4DFF;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3vw;
    text-align: center;
    margin-left: 3vw;
`;

const TargetText = styled.div`
    color: #000000;
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
                <TargetText>A홍익대학교 재학생 / 휴학생</TargetText>
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
                <TargetText>대학 생활을 더 특별하게 만들고 싶은 분</TargetText>
            </TargetTextBox>
        </TargetContainer>
    )
};

export default Targets;