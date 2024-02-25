import React, { useState } from "react";
import styled from "styled-components";

const MobApplyContainer = styled.div`
background-color: #1C1C1C;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 3vw;
`;

const MobApplyTextBox = styled.div`
border-radius: 1vw;
justify-content: center;
display: flex;
flex-direction: column;
background-color: #2a2a2a;
width: 90vw;
position: relative;
transition: min-height 0.5s ease;
min-height: ${props => props.expanded ? "30vw" : "18vw"};
margin-bottom: 2vw;
align-items: center;
`;

const MobApplyQuestionWrapper = styled.div`
display: flex;
width: 90vw;
align-items: center;
justify-content: flex-start;
margin-bottom: 2vw;
margin-top: 5vw;
`;

const MobApplyQuestionText = styled.div`
color: #52FF98;
font-family: "Pretendard-Bold", Helvetica;
font-size: 4.2vw;
font-weight: 600;
margin-left: 3vw;
margin-right: 1vw;
transition: text-align 2s ease;
`;

const MobApplyText = styled.div`
color: #ffffff;
margin-left: 1vw;
font-family: "Pretendard-Bold", Helvetica;
font-weight: 600;
font-size: 4vw;
transition: text-align 2s ease;
`;

const MobDropDownText = styled.div`
color: #ffffff;
font-family: "Pretendard-Regular", Helvetica;
width: 67vw;
font-size: 2.8vw;
margin-top: 3vw;
display: flex;
opacity: ${props => props.show ? 1 : 0};
max-height: ${props => props.show ? "10vw" : "0"};
overflow: hidden;
transition: opacity 0.5s ease, max-height 0.5s ease;
`;

export const MobApplyTab = () => {
    const [showDropDown1, setShowDropDown1] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [showDropDown3, setShowDropDown3] = useState(false);
    const [showDropDown4, setShowDropDown4] = useState(false);

    const toggleDropDown1 = () => {
        setShowDropDown1(!showDropDown1);
    };

    const toggleDropDown2 = () => {
        setShowDropDown2(!showDropDown2);
    };

    const toggleDropDown3 = () => {
        setShowDropDown3(!showDropDown3);
    };

    const toggleDropDown4 = () => {
        setShowDropDown4(!showDropDown4);
    };

    return (
        <MobApplyContainer>
            <MobApplyTextBox expanded={showDropDown1}>
                <MobApplyQuestionWrapper onClick={toggleDropDown1}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>프로젝트나 협업 경험이 없어도 지원 가능한가요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown1}>네, 창업에 대한 의지만 있다면 누구나 가능합니다!</MobDropDownText>
            </MobApplyTextBox>

            <MobApplyTextBox expanded={showDropDown2}>
                <MobApplyQuestionWrapper onClick={toggleDropDown2}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>포트폴리오를 따로 제출해야 하나요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown2}>포트폴리오가 있을 시 제출 가능하나, 필수는 아닙니다.</MobDropDownText>
            </MobApplyTextBox>

            <MobApplyTextBox expanded={showDropDown3}>
                <MobApplyQuestionWrapper onClick={toggleDropDown3}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>면접은 어떤 방식으로 진행되나요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown3}>지원하신 서류 바탕으로 면접이 이루어 집니다.</MobDropDownText>
            </MobApplyTextBox>

            <MobApplyTextBox expanded={showDropDown4}>
                <MobApplyQuestionWrapper onClick={toggleDropDown4}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>지원 결과는 어떻게 확인할 수 있나요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown4}>서류, 면접 결과 모두 기재해주신 연락처로 안내해드립니다.</MobDropDownText>
            </MobApplyTextBox>
        </MobApplyContainer>
    );
};

export default MobApplyTab;