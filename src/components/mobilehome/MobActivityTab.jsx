import React, { useState } from "react";
import styled from "styled-components";

const MobActivityContainer = styled.div`
background-color: #1C1C1C;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 3vw;
`;

const MobActivityTextBox = styled.div`
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

const MobActivityQuestionWrapper = styled.div`
display: flex;
width: 90vw;
align-items: center;
justify-content: flex-start;
margin-bottom: 2vw;
margin-top: 5vw;
`;

const MobActivityQuestionText = styled.div`
color: #52FF98;
font-family: "Pretendard-Bold", Helvetica;
font-size: 4.2vw;
font-weight: 600;
margin-left: 3vw;
margin-right: 1vw;
transition: text-align 2s ease;
`;

const MobActivityText = styled.div`
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

export const MobActivityTab = () => {
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
        <MobActivityContainer>
            <MobActivityTextBox expanded={showDropDown1}>
                <MobActivityQuestionWrapper onClick={toggleDropDown1}>
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>정기 세션은 언제 진행되나요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown1}>매주 목요일 6시에 정기 활동이 진행됩니다.</MobDropDownText>
            </MobActivityTextBox>

            <MobActivityTextBox expanded={showDropDown2}>
                <MobActivityQuestionWrapper onClick={toggleDropDown2}>
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>정기 세션에서는 어떤 활동을 하나요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown2}>팀별 프로젝트, 창업 교육 및 강연 등 다양한 활동이 예정되어 있습니다.</MobDropDownText>
            </MobActivityTextBox>

            <MobActivityTextBox expanded={showDropDown3}>
                <MobActivityQuestionWrapper onClick={toggleDropDown3}>
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>팀 빌딩은 어떻게 이루어지나요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown3}>지원하신 서류와 면접 내용을 바탕으로 운영진이 구성할 예정입니다.</MobDropDownText>
            </MobActivityTextBox>

            <MobActivityTextBox expanded={showDropDown4}>
                <MobActivityQuestionWrapper onClick={toggleDropDown4}>
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>창업에 대해 몰라도 활동 가능한가요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown4}>네, 차근차근 배워나갈 수 있도록 정기 세션이 진행될 예정입니다.</MobDropDownText>
            </MobActivityTextBox>
        </MobActivityContainer>
    );
};

export default MobActivityTab;